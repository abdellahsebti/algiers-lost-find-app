
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
import { Upload, MapPin, CheckCircle2, User, Phone, FileText, Camera, Heart } from 'lucide-react';

const ReportFound = () => {
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
    { value: 'id-card', label: 'بطاقة تعريف', icon: '🆔' },
    { value: 'driving-license', label: 'رخصة السياقة', icon: '🚗' },
    { value: 'wallet', label: 'محفظة', icon: '💼' },
    { value: 'bag', label: 'حقيبة', icon: '🎒' },
    { value: 'keys', label: 'مفاتيح', icon: '🔑' },
    { value: 'phone', label: 'هاتف محمول', icon: '📱' },
    { value: 'documents', label: 'وثائق', icon: '📄' },
    { value: 'other', label: 'أخرى', icon: '❓' }
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

    if (!formData.name || !formData.contact || !formData.category || !formData.description) {
      toast({
        title: "خطأ في النموذج",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "تم الإرسال بنجاح! ✅",
        description: "شكراً لك على مساعدة المجتمع. تم تسجيل بلاغ الغرض الموجود.",
      });

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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-algeria-red to-red-600 rounded-full mb-6 shadow-lg">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-algeria-red to-red-600 bg-clip-text text-transparent">
            الإبلاغ عن غرض موجود
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            وجدت غرضاً يخص شخصاً آخر؟ ساعدنا في إعادته لصاحبه
          </p>
        </div>

        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm animate-fade-in">
          <CardHeader className="bg-gradient-to-r from-algeria-red to-red-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl text-center flex items-center justify-center gap-3">
              <Heart className="w-6 h-6" />
              نموذج الإبلاغ عن موجود
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                  <Label htmlFor="name" className="text-right flex items-center gap-2 text-gray-700 font-semibold">
                    <User className="w-4 h-4 text-algeria-red" />
                    الاسم الكامل *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="أدخل اسمك الكامل"
                    className="text-right h-12 border-2 border-gray-200 focus:border-algeria-red transition-all duration-300 rounded-lg shadow-sm group-hover:border-gray-300"
                    required
                  />
                </div>

                <div className="space-y-2 group">
                  <Label htmlFor="contact" className="text-right flex items-center gap-2 text-gray-700 font-semibold">
                    <Phone className="w-4 h-4 text-algeria-red" />
                    معلومات الاتصال *
                  </Label>
                  <Input
                    id="contact"
                    type="text"
                    value={formData.contact}
                    onChange={(e) => handleInputChange('contact', e.target.value)}
                    placeholder="رقم الهاتف أو البريد الإلكتروني"
                    className="text-right h-12 border-2 border-gray-200 focus:border-algeria-red transition-all duration-300 rounded-lg shadow-sm group-hover:border-gray-300"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-right block text-gray-700 font-semibold">نوع الغرض *</Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger className="text-right h-12 border-2 border-gray-200 focus:border-algeria-red transition-all duration-300 rounded-lg shadow-sm">
                    <SelectValue placeholder="اختر نوع الغرض الموجود" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-2 rounded-lg shadow-xl">
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value} className="text-right hover:bg-red-50">
                        <div className="flex items-center gap-3">
                          <span>{category.icon}</span>
                          <span>{category.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 group">
                <Label htmlFor="description" className="text-right flex items-center gap-2 text-gray-700 font-semibold">
                  <FileText className="w-4 h-4 text-algeria-red" />
                  وصف تفصيلي للغرض *
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="اكتب وصفاً تفصيلياً للغرض الموجود (اللون، الحجم، العلامات المميزة، إلخ)"
                  className="text-right h-32 border-2 border-gray-200 focus:border-algeria-red transition-all duration-300 rounded-lg shadow-sm resize-none group-hover:border-gray-300"
                  required
                />
              </div>

              <div className="space-y-2 group">
                <Label htmlFor="location" className="text-right flex items-center gap-2 text-gray-700 font-semibold">
                  <MapPin className="w-4 h-4 text-algeria-red" />
                  مكان الإيجاد *
                </Label>
                <Input
                  id="location"
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="مثال: جامعة الجزائر، محطة الحافلات، مركز التسوق..."
                  className="text-right h-12 border-2 border-gray-200 focus:border-algeria-red transition-all duration-300 rounded-lg shadow-sm group-hover:border-gray-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image" className="text-right flex items-center gap-2 text-gray-700 font-semibold">
                  <Camera className="w-4 h-4 text-algeria-red" />
                  صورة للغرض (اختياري)
                </Label>
                <div className="relative">
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="text-right h-12 border-2 border-dashed border-gray-300 hover:border-algeria-red focus:border-algeria-red transition-all duration-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-algeria-red file:text-white hover:file:bg-red-700"
                  />
                  <Upload className="absolute left-3 top-3 w-6 h-6 text-gray-400" />
                </div>
                <p className="text-sm text-gray-500 mt-2 text-right flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  يُفضل إرفاق صورة للغرض لتسهيل عملية التعرف عليه
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400 rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  شكراً لك! 🙏
                </h3>
                <ul className="text-green-800 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    بإبلاغك عن هذا الغرض الموجود، أنت تساهم في مساعدة شخص على استرداد ممتلكاته
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    سنتواصل معك عندما نجد التطابق مع صاحب الغرض
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    تأكد من الاحتفاظ بالغرض في مكان آمن حتى إعادته
                  </li>
                </ul>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-algeria-red to-red-600 hover:from-red-700 hover:to-red-700 text-white text-lg py-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    <Heart className="w-5 h-5" />
                    إرسال البلاغ
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default ReportFound;
