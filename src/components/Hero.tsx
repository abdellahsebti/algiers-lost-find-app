
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-algeria-green via-algeria-green to-green-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              المفقودات الجزائرية
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-green-100">
              منصة للمساعدة في العثور على الأغراض المفقودة
            </p>
            <p className="text-lg mb-8 text-green-200 max-w-3xl mx-auto">
              نساعدك في العثور على ممتلكاتك المفقودة أو الإبلاغ عن الأغراض التي وجدتها.
              معاً نبني مجتمعاً متعاوناً ومتضامناً في الجزائر
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">📢</div>
              <h3 className="text-xl font-semibold mb-2">أبلغ عن مفقود</h3>
              <p className="text-green-100 mb-4">
                فقدت شيئاً مهماً؟ أبلغ عنه ليساعدك المجتمع في العثور عليه
              </p>
              <Link to="/report-lost">
                <Button variant="secondary" className="w-full bg-algeria-red hover:bg-red-700 text-white border-none">
                  الإبلاغ عن مفقود
                </Button>
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">✋</div>
              <h3 className="text-xl font-semibold mb-2">أبلغ عن موجود</h3>
              <p className="text-green-100 mb-4">
                وجدت شيئاً يخص شخصاً آخر؟ ساعد في إعادته لصاحبه
              </p>
              <Link to="/report-found">
                <Button variant="secondary" className="w-full bg-algeria-red hover:bg-red-700 text-white border-none">
                  الإبلاغ عن موجود
                </Button>
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">ابحث عن مفقودات</h3>
              <p className="text-green-100 mb-4">
                ابحث في قاعدة البيانات عن الأغراض المفقودة والموجودة
              </p>
              <Link to="/search">
                <Button variant="secondary" className="w-full bg-algeria-red hover:bg-red-700 text-white border-none">
                  ابدأ البحث
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
