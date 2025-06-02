
import { useState, useEffect } from 'react';
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface SearchFilters {
  searchQuery: string;
  category: string;
  type: string;
}

interface Report {
  id: string;
  type: 'lost' | 'found';
  category: string;
  description: string;
  location: string;
  date: string;
  contact: string;
  name: string;
  status: string;
  createdAt: any;
}

export const useSearchReports = (filters: SearchFilters) => {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        setLoading(true);
        
        let q = query(
          collection(db, 'reports'),
          where('status', '==', 'active'),
          orderBy('createdAt', 'desc'),
          limit(50)
        );

        // Add filters
        if (filters.type && filters.type !== 'all') {
          q = query(
            collection(db, 'reports'),
            where('status', '==', 'active'),
            where('type', '==', filters.type),
            orderBy('createdAt', 'desc'),
            limit(50)
          );
        }

        if (filters.category && filters.category !== 'all') {
          // This would need to be adjusted based on how you store categories
          // For now, we'll filter client-side
        }

        const querySnapshot = await getDocs(q);
        let fetchedReports: Report[] = [];
        
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          fetchedReports.push({
            id: doc.id,
            type: data.type,
            category: data.category,
            description: data.description,
            location: data.location,
            date: data.createdAt?.toDate().toLocaleDateString('ar-DZ') || '',
            contact: data.contact,
            name: data.name,
            status: data.status,
            createdAt: data.createdAt
          });
        });

        // Client-side filtering for search query and category
        if (filters.searchQuery) {
          fetchedReports = fetchedReports.filter(report =>
            report.description.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
            report.location.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
            report.category.toLowerCase().includes(filters.searchQuery.toLowerCase())
          );
        }

        if (filters.category && filters.category !== 'all') {
          fetchedReports = fetchedReports.filter(report =>
            report.category === filters.category
          );
        }

        setReports(fetchedReports);
        console.log('Reports fetched successfully:', fetchedReports.length);
        
      } catch (err) {
        console.error('Error fetching reports:', err);
        setError('فشل في تحميل البلاغات');
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [filters.searchQuery, filters.category, filters.type]);

  return { reports, loading, error };
};
