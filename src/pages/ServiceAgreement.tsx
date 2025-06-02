
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServiceAgreement = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            اتفاقية الخدمة ⚖️
          </h1>
          <p className="text-lg text-gray-600">
            العقد المبرم بين المستخدم ومنصة المفقودات الجزائرية
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-algeria-green">طبيعة الخدمة</CardTitle>
            </CardHeader>
            <CardContent className="text-right space-y-4">
              <p>منصة المفقودات الجزائرية تقدم الخدمات التالية:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>منصة إلكترونية مجانية لربط أصحاب الأغراض المفقودة بالواجدين</li>
                <li>نظام بحث متقدم في قاعدة بيانات البلاغات</li>
                <li>خدمة إشعارات للتطابقات المحتملة</li>
                <li>دعم فني ومساعدة للمستخدمين</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-algeria-green">التزامات المنصة</CardTitle>
            </CardHeader>
            <CardContent className="text-right space-y-4">
              <p>تلتزم المنصة بما يلي:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>توفير الخدمة مجاناً للمستخدمين</li>
                <li>حماية البيانات الشخصية وفقاً للقانون الجزائري</li>
                <li>الصيانة المنتظمة للمنصة وتحديثها</li>
                <li>مراقبة المحتوى لضمان عدم مخالفته للقانون</li>
                <li>الاستجابة لطلبات الدعم خلال 48 ساعة</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-algeria-green">التزامات المستخدم</CardTitle>
            </CardHeader>
            <CardContent className="text-right space-y-4">
              <p>يلتزم المستخدم بما يلي:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>تقديم معلومات صحيحة ودقيقة</li>
                <li>التحقق من هوية الطرف الآخر قبل اللقاء</li>
                <li>الالتقاء في أماكن عامة وآمنة</li>
                <li>إبلاغ المنصة عن أي محتوى مشبوه</li>
                <li>عدم استغلال المنصة لأغراض تجارية</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-algeria-green">إنهاء الخدمة</CardTitle>
            </CardHeader>
            <CardContent className="text-right space-y-4">
              <p>يحق للمنصة إنهاء الخدمة في الحالات التالية:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>مخالفة شروط الاستخدام</li>
                <li>استخدام المنصة لأغراض إجرامية</li>
                <li>تقديم معلومات كاذبة بشكل متكرر</li>
                <li>إساءة استخدام النظام أو محاولة اختراقه</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-algeria-green">تسوية النزاعات</CardTitle>
            </CardHeader>
            <CardContent className="text-right space-y-4">
              <p>في حالة النزاع:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>محاولة الحل الودي أولاً عبر التواصل المباشر</li>
                <li>اللجوء للوساطة عبر المنصة</li>
                <li>التحكيم وفقاً للقانون الجزائري كملاذ أخير</li>
                <li>اختصاص المحاكم الجزائرية بالنظر في النزاعات</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceAgreement;
