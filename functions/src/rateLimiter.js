
// Cloud Function to handle rate limiting for form submissions
const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Initialize Firebase Admin if not already initialized
if (admin.apps.length === 0) {
  admin.initializeApp();
}

const db = admin.firestore();

exports.handleRateLimit = functions.https.onCall(async (data, context) => {
  try {
    // Get client IP from context
    const clientIP = context.rawRequest.headers['x-forwarded-for'] || 
                     context.rawRequest.connection.remoteAddress || 
                     context.rawRequest.socket.remoteAddress ||
                     'unknown';
    
    const now = admin.firestore.Timestamp.now();
    const thirtyMinutesAgo = new admin.firestore.Timestamp(
      now.seconds - (30 * 60), 
      now.nanoseconds
    );
    
    // Reference to rate limit document
    const rateLimitRef = db.collection('rate_limits').doc(clientIP);
    
    return db.runTransaction(async (transaction) => {
      const rateLimitDoc = await transaction.get(rateLimitRef);
      
      let submissions = [];
      
      if (rateLimitDoc.exists) {
        submissions = rateLimitDoc.data().submissions || [];
        
        // Filter out submissions older than 30 minutes
        submissions = submissions.filter(timestamp => 
          timestamp.seconds > thirtyMinutesAgo.seconds
        );
      }
      
      // Check if user has exceeded rate limit (max 2 submissions per 30 minutes)
      if (submissions.length >= 2) {
        throw new functions.https.HttpsError(
          'resource-exhausted',
          'تم تجاوز الحد المسموح من التقارير. يرجى المحاولة بعد 30 دقيقة.',
          { 
            rateLimited: true,
            nextAllowedTime: new Date((submissions[0].seconds + (30 * 60)) * 1000)
          }
        );
      }
      
      // Add current timestamp to submissions
      submissions.push(now);
      
      // Update rate limit document
      transaction.set(rateLimitRef, {
        submissions: submissions,
        lastUpdate: now,
        ip: clientIP
      }, { merge: true });
      
      return { 
        allowed: true, 
        remainingSubmissions: 2 - submissions.length,
        resetTime: new Date((now.seconds + (30 * 60)) * 1000)
      };
    });
    
  } catch (error) {
    console.error('Rate limiting error:', error);
    
    if (error instanceof functions.https.HttpsError) {
      throw error;
    }
    
    throw new functions.https.HttpsError(
      'internal',
      'خطأ في النظام. يرجى المحاولة مرة أخرى.',
      error
    );
  }
});

// Clean up old rate limit records (run daily)
exports.cleanupRateLimits = functions.pubsub
  .schedule('every 24 hours')
  .onRun(async (context) => {
    const threeDaysAgo = new admin.firestore.Timestamp(
      admin.firestore.Timestamp.now().seconds - (3 * 24 * 60 * 60),
      0
    );
    
    const oldRecords = await db.collection('rate_limits')
      .where('lastUpdate', '<', threeDaysAgo)
      .get();
    
    const batch = db.batch();
    oldRecords.docs.forEach(doc => {
      batch.delete(doc.ref);
    });
    
    await batch.commit();
    
    console.log(`Cleaned up ${oldRecords.size} old rate limit records`);
    return null;
  });
