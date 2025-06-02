
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ReportLost = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    category: '',
    description: '',
    location: '',
    image: null as File | null
  });

  const categories = [
    { value: 'id-card', label: 'بطاقة تعريف' },
    { value: 'driving-license', label: 'رخصة السياقة' },
    { value: 'wallet', label: 'محفظة' },
    { value: 'bag', label: 'حقيبة' },
    { value: 'keys', label: 'مفاتيح' },
    { value: 'phone', label: 'هاتف محمول' },
    { value: 'documents', label: 'وثائق' },
    { value: 'other', label: 'أخرى' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.name || !formData.contact || !formData.category || !formData.description) {
      toast({
        title: "خطأ في النموذج",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    try {
      // Here you would normally send data to your backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "تم الإرسال بنجاح! ✅",
        description: "تم تسجيل بلاغ المفقود. سنتصل بك عند وجود تطابق محتمل.",
      });

      // Reset form
      setFormData({
        name: '',
        contact: '',
        category: '',
        description: '',
        location: '',
        image: null
      });
    } catch (error) {
      toast({
        title: "خطأ في الإرسال",
        description: "حدث خطأ أثناء إرسال البلاغ. يرجى المحاولة مرة أخرى.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            الإبلاغ عن غرض مفقود 📢
          </h1>
          <p className="text-lg text-gray-600">
            املأ النموذج أدناه بتفاصيل الغرض المفقود وسنساعدك في العثور عليه
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="bg-algeria-green text-white">
            <CardTitle className="text-2xl text-center">نموذج الإبلاغ عن مفقود</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-right block mb-2">
                    الاسم الكامل *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="أدخل اسمك الكامل"
                    className="text-right"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="contact" className="text-right block mb-2">
                    معلومات الاتصال *
                  </Label>
                  <Input
                    id="contact"
                    type="text"
                    value={formData.contact}
                    onChange={(e) => handleInputChange('contact', e.target.value)}
                    placeholder="رقم الهاتف أو البريد الإلكتروني"
                    className="text-right"
                    required
                  />
                </div>
              </div>

              <div>
                <Label className="text-right block mb-2">نوع الغرض *</Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر نوع الغرض المفقود" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description" className="text-right block mb-2">
                  وصف تفصيلي للغرض *
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="اكتب وصفاً تفصيلياً للغرض المفقود (اللون، الحجم، العلامات المميزة، إلخ)"
                  className="text-right h-32"
                  required
                />
              </div>

              <div>
                <Label htmlFor="location" className="text-right block mb-2">
                  مكان الفقد (اختياري)
                </Label>
                <Input
                  id="location"
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="مثال: جامعة الجزائر، محطة الحافلات، مركز التسوق..."
                  className="text-right"
                />
              </div>

              <div>
                <Label htmlFor="image" className="text-right block mb-2">
                  صورة للغرض (اختياري)
                </Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="text-right"
                />
                <p className="text-sm text-gray-500 mt-1 text-right">
                  يُفضل إرفاق صورة للغرض لتسهيل عملية التعرف عليه
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">ملاحظة مهمة:</h3>
                <p className="text-blue-800 text-sm">
                  • سيتم نشر هذا البلاغ على المنصة ليتمكن من وجد الغرض من التواصل معك
                  <br />
                  • تأكد من صحة معلومات الاتصال
                  <br />
                  • لا تشارك معلومات شخصية حساسة في الوصف
                </p>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-algeria-green hover:bg-green-700 text-white text-lg py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? '🔄 جاري الإرسال...' : '📤 إرسال البلاغ'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default ReportLost;
