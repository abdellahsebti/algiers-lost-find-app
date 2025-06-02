
import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, getCountFromServer } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface StatisticsData {
  totalReturned: number;
  newReports: number;
  totalReports: number;
  successRate: number;
}

export const useStatistics = () => {
  const [statistics, setStatistics] = useState<StatisticsData>({
    totalReturned: 0,
    newReports: 0,
    totalReports: 0,
    successRate: 0
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
        
        // Count total reports
        const totalReportsSnapshot = await getCountFromServer(collection(db, 'reports'));
        
        // Calculate success rate
        const totalReports = totalReportsSnapshot.data().count;
        const totalReturned = returnedSnapshot.data().count;
        const successRate = totalReports > 0 ? Math.round((totalReturned / totalReports) * 100) : 0;
        
        setStatistics({
          totalReturned: totalReturned,
          newReports: newReportsSnapshot.data().count,
          totalReports: totalReports,
          successRate: successRate
        });
        
        console.log('Statistics fetched successfully:', {
          totalReturned: totalReturned,
          newReports: newReportsSnapshot.data().count,
          totalReports: totalReports,
          successRate: successRate
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
