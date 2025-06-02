
import { useEffect, useState } from 'react';
import { useStatistics } from '@/hooks/useStatistics';

const Statistics = () => {
  const { statistics, loading, error } = useStatistics();
  const [animatedNumbers, setAnimatedNumbers] = useState([0, 0, 0, 0]);
  
  const stats = [
    { number: statistics.totalReturned, label: 'أغراض مُستردة', icon: '✅', color: 'from-green-400 to-green-600' },
    { number: statistics.newReports, label: 'بلاغات جديدة', icon: '📢', color: 'from-blue-400 to-blue-600' },
    { number: statistics.activeUsers, label: 'مستخدم نشط', icon: '👥', color: 'from-purple-400 to-purple-600' },
    { number: statistics.participatingStates, label: 'ولاية مشاركة', icon: '🏛️', color: 'from-algeria-red to-red-600' }
  ];

  useEffect(() => {
    // Only animate when we have data and not loading
    if (!loading && !error) {
      const animateNumbers = () => {
        stats.forEach((stat, index) => {
          let current = 0;
          const increment = stat.number / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= stat.number) {
              current = stat.number;
              clearInterval(timer);
            }
            setAnimatedNumbers(prev => {
              const newNumbers = [...prev];
              newNumbers[index] = Math.floor(current);
              return newNumbers;
            });
          }, 40);
        });
      };

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            animateNumbers();
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      const element = document.getElementById('statistics-section');
      if (element) observer.observe(element);

      return () => observer.disconnect();
    }
  }, [loading, error, statistics]);

  if (error) {
    console.error('Statistics error:', error);
  }

  return (
    <section id="statistics-section" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23007a3d' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-algeria-green to-green-600 rounded-full mb-6 shadow-lg">
            <span className="text-2xl">📊</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            إحصائيات المنصة
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            نفخر بما حققناه معاً في خدمة المجتمع الجزائري وبناء جسور التعاون والتضامن
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon with animated background */}
              <div className="relative flex justify-center mb-6">
                <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300`}>
                  <span className="text-3xl filter drop-shadow-sm">{stat.icon}</span>
                </div>
              </div>
              
              {/* Animated number */}
              <div className="text-center relative">
                <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 font-mono">
                  {loading ? (
                    <div className="animate-pulse bg-gray-300 h-12 w-24 mx-auto rounded"></div>
                  ) : error ? (
                    <span className="text-red-500 text-xl">خطأ</span>
                  ) : (
                    <>
                      {animatedNumbers[index].toLocaleString('ar-DZ')}
                      {stat.number > 1000 && <span className="text-algeria-green">+</span>}
                    </>
                  )}
                </div>
                <div className="text-gray-600 font-semibold text-lg leading-relaxed">
                  {stat.label}
                </div>
                
                {/* Progress bar */}
                {!loading && !error && (
                  <div className="mt-4 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${(animatedNumbers[index] / stat.number) * 100}%`,
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-reverse space-x-2 text-algeria-green font-semibold text-lg">
            <span className="animate-pulse">🚀</span>
            <span>انضم إلى مجتمعنا المتنامي وساهم في نشر الخير</span>
            <span className="animate-pulse">🚀</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
