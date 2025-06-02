
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Statistics />
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              كيف تعمل المنصة؟
            </h2>
            <p className="text-lg text-gray-600">
              خطوات بسيطة لاسترداد ممتلكاتك أو مساعدة الآخرين
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-algeria-green text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">أبلغ عن الغرض</h3>
              <p className="text-gray-600">
                املأ نموذج بسيط بمعلومات الغرض المفقود أو الموجود
              </p>
            </div>

            <div className="text-center">
              <div className="bg-algeria-green text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">ابحث وتطابق</h3>
              <p className="text-gray-600">
                نظامنا يبحث عن التطابقات المحتملة في قاعدة البيانات
              </p>
            </div>

            <div className="text-center">
              <div className="bg-algeria-green text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">تواصل واسترد</h3>
              <p className="text-gray-600">
                تواصل مع الطرف الآخر واتفق على إعادة الغرض لصاحبه
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
