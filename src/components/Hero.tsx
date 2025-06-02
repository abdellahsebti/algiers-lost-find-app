
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-algeria-green via-green-700 to-green-900 text-white py-24 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-algeria-red/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 bg-algeria-red/10 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="animate-fade-in">
            {/* Logo with animation */}
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
              <span className="text-4xl animate-pulse">🇩🇿</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                المفقودات الجزائرية
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-6 text-green-100 font-medium">
              منصة للمساعدة في العثور على الأغراض المفقودة
            </p>
            
            <p className="text-lg md:text-xl mb-12 text-green-200 max-w-4xl mx-auto leading-relaxed px-4">
              نساعدك في العثور على ممتلكاتك المفقودة أو الإبلاغ عن الأغراض التي وجدتها.
              معاً نبني مجتمعاً متعاوناً ومتضامناً في كل ربوع الجزائر الحبيبة
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
            {[
              {
                icon: '📢',
                title: 'أبلغ عن مفقود',
                description: 'فقدت شيئاً مهماً؟ أبلغ عنه ليساعدك المجتمع في العثور عليه',
                link: '/report-lost',
                buttonText: 'الإبلاغ عن مفقود',
                gradient: 'from-algeria-red to-red-600'
              },
              {
                icon: '✋',
                title: 'أبلغ عن موجود',
                description: 'وجدت شيئاً يخص شخصاً آخر؟ ساعد في إعادته لصاحبه',
                link: '/report-found',
                buttonText: 'الإبلاغ عن موجود',
                gradient: 'from-blue-500 to-blue-600'
              },
              {
                icon: '🔍',
                title: 'ابحث عن مفقودات',
                description: 'ابحث في قاعدة البيانات عن الأغراض المفقودة والموجودة',
                link: '/search',
                buttonText: 'ابدأ البحث',
                gradient: 'from-purple-500 to-purple-600'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-3 border border-white/20 hover:border-white/40"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Animated icon */}
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-100 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-green-100 mb-8 leading-relaxed text-lg">
                  {item.description}
                </p>
                
                <Link to={item.link}>
                  <Button 
                    className={`w-full bg-gradient-to-r ${item.gradient} hover:shadow-2xl text-white border-none text-lg py-6 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105`}
                  >
                    {item.buttonText}
                  </Button>
                </Link>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            ))}
          </div>

          {/* Call to action badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-16">
            {[
              '🆓 مجاني تماماً',
              '🔒 آمن وموثوق',
              '🇩🇿 خدمة جزائرية',
              '⚡ سريع وفعال'
            ].map((badge, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 text-green-100 font-medium hover:bg-white/20 transition-colors duration-300"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
