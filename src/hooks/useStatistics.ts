
import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, getCountFromServer } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface StatisticsData {
  totalReturned: number;
  newReports: number;
  activeUsers: number;
  participatingStates: number;
}

export const useStatistics = () => {
  const [statistics, setStatistics] = useState<StatisticsData>({
    totalReturned: 0,
    newReports: 0,
    activeUsers: 0,
    participatingStates: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        setLoading(true);
        
        // Count total returned items (reports with status 'returned')
        const returnedQuery = query(
          collection(db, 'reports'),
          where('status', '==', 'returned')
        );
        const returnedSnapshot = await getCountFromServer(returnedQuery);
        
        // Count new reports (reports from last 30 days)
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        
        const newReportsQuery = query(
          collection(db, 'reports'),
          where('createdAt', '>=', thirtyDaysAgo)
        );
        const newReportsSnapshot = await getCountFromServer(newReportsQuery);
        
        // Count active users (unique users who submitted reports)
        const usersSnapshot = await getDocs(collection(db, 'users'));
        const activeUsers = usersSnapshot.size;
        
        // Count participating states (unique locations from reports)
        const reportsSnapshot = await getDocs(collection(db, 'reports'));
        const states = new Set();
        reportsSnapshot.forEach(doc => {
          const location = doc.data().location;
          if (location) {
            states.add(location);
          }
        });
        
        setStatistics({
          totalReturned: returnedSnapshot.data().count,
          newReports: newReportsSnapshot.data().count,
          activeUsers: activeUsers,
          participatingStates: states.size
        });
        
        console.log('Statistics fetched successfully:', {
          totalReturned: returnedSnapshot.data().count,
          newReports: newReportsSnapshot.data().count,
          activeUsers: activeUsers,
          participatingStates: states.size
        });
        
      } catch (err) {
        console.error('Error fetching statistics:', err);
        setError('فشل في تحميل الإحصائيات');
      } finally {
        setLoading(false);
      }
    };

    fetchStatistics();
  }, []);

  return { statistics, loading, error };
};
