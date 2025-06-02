
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            من نحن 🇩🇿
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            منصة جزائرية رائدة لمساعدة المواطنين في استرداد ممتلكاتهم المفقودة
            وبناء مجتمع متعاون ومتضامن
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold text-algeria-green mb-4">رسالتنا</h2>
              <p className="text-gray-600 leading-relaxed">
                نسعى لتوفير منصة آمنة وفعالة تساعد المواطنين الجزائريين في استرداد 
                ممتلكاتهم المفقودة من خلال توظيف التكنولوجيا لخدمة المجتمع وتعزيز 
                روح التضامن والتعاون بين أفراده.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">👁️</div>
              <h2 className="text-2xl font-bold text-algeria-green mb-4">رؤيتنا</h2>
              <p className="text-gray-600 leading-relaxed">
                أن نكون المنصة الأولى في الجزائر لاسترداد المفقودات، ونساهم في 
                بناء مجتمع متضامن حيث يساعد الجميع بعضهم البعض في الحفاظ على 
                ممتلكاتهم واستردادها عند فقدانها.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How it Works */}
        <Card className="shadow-lg mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center text-algeria-green mb-8">
              كيف تعمل المنصة؟
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-algeria-green text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mx-auto mb-4">
                  📝
                </div>
                <h3 className="font-semibold text-lg mb-2">الإبلاغ</h3>
                <p className="text-gray-600">
                  املأ نموذجاً بسيطاً لوصف الغرض المفقود أو الموجود مع إرفاق صورة إن أمكن
                </p>
              </div>

              <div className="text-center">
                <div className="bg-algeria-green text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mx-auto mb-4">
                  🔍
                </div>
                <h3 className="font-semibold text-lg mb-2">البحث والمطابقة</h3>
                <p className="text-gray-600">
                  نظامنا يبحث عن التطابقات المحتملة في قاعدة البيانات ويرسل إشعارات
                </p>
              </div>

              <div className="text-center">
                <div className="bg-algeria-green text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mx-auto mb-4">
                  🤝
                </div>
                <h3 className="font-semibold text-lg mb-2">التواصل والاسترداد</h3>
                <p className="text-gray-600">
                  نربط بين الطرفين للتواصل والاتفاق على إعادة الغرض لصاحبه
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="shadow-lg mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center text-algeria-green mb-8">
              مميزات المنصة
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="text-2xl">🔒</div>
                <div>
                  <h3 className="font-semibold mb-1">آمان وخصوصية</h3>
                  <p className="text-gray-600 text-sm">
                    نحمي معلوماتك الشخصية ولا نكشف بيانات الاتصال إلا عند التطابق
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="text-2xl">⚡</div>
                <div>
                  <h3 className="font-semibold mb-1">سرعة في الاستجابة</h3>
                  <p className="text-gray-600 text-sm">
                    نظام فوري للبحث والإشعارات عند وجود تطابقات محتملة
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="text-2xl">📱</div>
                <div>
                  <h3 className="font-semibold mb-1">سهولة الاستخدام</h3>
                  <p className="text-gray-600 text-sm">
                    واجهة بسيطة وسهلة تدعم الهواتف الذكية والحاسوب
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="text-2xl">🆓</div>
                <div>
                  <h3 className="font-semibold mb-1">مجانية تماماً</h3>
                  <p className="text-gray-600 text-sm">
                    خدمة مجتمعية مجانية 100% دون أي رسوم أو اشتراكات
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <Card className="shadow-lg mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center text-algeria-green mb-8">
              إنجازاتنا
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-algeria-green mb-2">1,234</div>
                <div className="text-gray-600">أغراض مُستردة</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-algeria-green mb-2">2,567</div>
                <div className="text-gray-600">بلاغ نشط</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-algeria-green mb-2">890</div>
                <div className="text-gray-600">مستخدم مسجل</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-algeria-green mb-2">48</div>
                <div className="text-gray-600">ولاية مشاركة</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="shadow-lg">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-algeria-green mb-6">
              تواصل معنا
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl mb-2">📧</div>
                <h3 className="font-semibold mb-1">البريد الإلكتروني</h3>
                <p className="text-gray-600">info@lostfound.dz</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📱</div>
                <h3 className="font-semibold mb-1">الهاتف</h3>
                <p className="text-gray-600">+213 XX XX XX XX</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📍</div>
                <h3 className="font-semibold mb-1">العنوان</h3>
                <p className="text-gray-600">الجزائر العاصمة، الجزائر</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default About;
