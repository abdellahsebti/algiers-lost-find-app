
const Statistics = () => {
  const stats = [
    { number: '1,234', label: 'أغراض مُستردة', icon: '✅' },
    { number: '567', label: 'بلاغات جديدة', icon: '📢' },
    { number: '890', label: 'مستخدم نشط', icon: '👥' },
    { number: '45', label: 'ولاية مشاركة', icon: '🏛️' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            إحصائيات المنصة
          </h2>
          <p className="text-lg text-gray-600">
            نفخر بما حققناه معاً في خدمة المجتمع الجزائري
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-algeria-green mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
