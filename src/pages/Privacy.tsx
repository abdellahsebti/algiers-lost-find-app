
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            سياسة الخصوصية 🔒
          </h1>
          <p className="text-lg text-gray-600">
            وفقاً للقانون الجزائري رقم 18-07 المتعلق بحماية الأشخاص الطبيعيين في مجال معالجة المعطيات ذات الطابع الشخصي
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-algeria-green">المعلومات التي نجمعها</CardTitle>
            </CardHeader>
            <CardContent className="text-right space-y-4">
              <p>نقوم بجمع المعلومات التالية وفقاً للقانون الجزائري:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>الاسم ومعلومات الاتصال (اختيارية)</li>
                <li>وصف الأغراض المفقودة أو الموجودة</li>
                <li>الموقع التقريبي لفقدان أو العثور على الغرض</li>
                <li>عنوان IP لأغراض الأمان ومنع سوء الاستخدام</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-algeria-green">كيف نستخدم معلوماتك</CardTitle>
            </CardHeader>
            <CardContent className="text-right space-y-4">
              <p>نستخدم المعلومات المجمعة للأغراض التالية:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>تسهيل عملية استرداد الأغراض المفقودة</li>
                <li>التواصل بين أصحاب الأغراض المفقودة والواجدين</li>
                <li>منع سوء الاستخدام والبريد المزعج</li>
                <li>تحسين خدماتنا وتطوير المنصة</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-algeria-green">حماية البيانات</CardTitle>
            </CardHeader>
            <CardContent className="text-right space-y-4">
              <p>وفقاً للقانون الجزائري رقم 18-07، نلتزم بما يلي:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>تشفير جميع البيانات المرسلة والمخزنة</li>
                <li>عدم مشاركة البيانات مع أطراف ثالثة دون موافقة</li>
                <li>حق الوصول والتعديل والحذف للبيانات الشخصية</li>
                <li>الإبلاغ عن أي خرق أمني خلال 72 ساعة</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-algeria-green">حقوقك</CardTitle>
            </CardHeader>
            <CardContent className="text-right space-y-4">
              <p>لديك الحقوق التالية وفقاً للقانون الجزائري:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>الحق في الوصول إلى بياناتك الشخصية</li>
                <li>الحق في تصحيح البيانات غير الصحيحة</li>
                <li>الحق في حذف بياناتك</li>
                <li>الحق في الاعتراض على معالجة البيانات</li>
                <li>الحق في تقديم شكوى للسلطة الوطنية لحماية المعطيات ذات الطابع الشخصي</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-algeria-green">الاتصال</CardTitle>
            </CardHeader>
            <CardContent className="text-right">
              <p>للأسئلة حول سياسة الخصوصية، يرجى التواصل معنا على:</p>
              <p className="mt-2 font-semibold">info@lostfound.dz</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
