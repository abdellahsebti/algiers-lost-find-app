
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            شروط الاستخدام 📋
          </h1>
          <p className="text-lg text-gray-600">
            وفقاً للقانون المدني الجزائري والقانون التجاري
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-algeria-green">قبول الشروط</CardTitle>
            </CardHeader>
            <CardContent className="text-right space-y-4">
              <p>باستخدام منصة المفقودات الجزائرية، فإنك توافق على الشروط التالية:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>الالتزام بالقوانين الجزائرية السارية</li>
                <li>استخدام المنصة لأغراض مشروعة فقط</li>
                <li>عدم نشر معلومات كاذبة أو مضللة</li>
                <li>احترام حقوق الآخرين وخصوصيتهم</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-algeria-green">الاستخدام المسموح</CardTitle>
            </CardHeader>
            <CardContent className="text-right space-y-4">
              <p>يُسمح باستخدام المنصة للأغراض التالية:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>الإبلاغ عن الأغراض المفقودة بصدق</li>
                <li>الإبلاغ عن الأغراض الموجودة بنية حسنة</li>
                <li>البحث عن الأغراض المفقودة</li>
                <li>التواصل مع أصحاب البلاغات لإعادة الأغراض</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-algeria-green">الاستخدام المحظور</CardTitle>
            </CardHeader>
            <CardContent className="text-right space-y-4">
              <p>يُحظر استخدام المنصة للأغراض التالية:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>نشر معلومات كاذبة أو مضللة</li>
                <li>محاولة الاحتيال أو النصب</li>
                <li>انتهاك خصوصية الآخرين</li>
                <li>استخدام المنصة لأغراض تجارية غير مصرح بها</li>
                <li>نشر محتوى مخالف للآداب العامة أو القانون</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-algeria-green">المسؤولية</CardTitle>
            </CardHeader>
            <CardContent className="text-right space-y-4">
              <p>وفقاً للقانون المدني الجزائري:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>المنصة وسيط فقط ولا تتحمل مسؤولية المعاملات بين المستخدمين</li>
                <li>المستخدمون مسؤولون عن صحة المعلومات المقدمة</li>
                <li>يجب التحقق من هوية الأطراف قبل تسليم الأغراض</li>
                <li>المنصة غير مسؤولة عن الأضرار الناتجة عن سوء الاستخدام</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-algeria-green">القانون المطبق</CardTitle>
            </CardHeader>
            <CardContent className="text-right space-y-4">
              <p>تخضع هذه الشروط للقانون الجزائري، وتختص المحاكم الجزائرية بالنظر في أي نزاع.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
