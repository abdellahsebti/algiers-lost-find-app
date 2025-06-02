
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const categories = [
    { value: 'all', label: 'جميع الفئات' },
    { value: 'id-card', label: 'بطاقة تعريف' },
    { value: 'driving-license', label: 'رخصة السياقة' },
    { value: 'wallet', label: 'محفظة' },
    { value: 'bag', label: 'حقيبة' },
    { value: 'keys', label: 'مفاتيح' },
    { value: 'phone', label: 'هاتف محمول' },
    { value: 'documents', label: 'وثائق' },
    { value: 'other', label: 'أخرى' }
  ];

  const types = [
    { value: 'all', label: 'مفقود ومعثور عليه' },
    { value: 'lost', label: 'مفقود فقط' },
    { value: 'found', label: 'معثور عليه فقط' }
  ];

  // Mock data for demonstration
  const mockResults = [
    {
      id: 1,
      type: 'lost',
      category: 'محفظة',
      description: 'محفظة جلدية سوداء تحتوي على بطاقة تعريف وبعض النقود',
      location: 'جامعة الجزائر 3',
      date: '2024-01-15',
      contact: 'أحمد - 0555123456'
    },
    {
      id: 2,
      type: 'found',
      category: 'مفاتيح',
      description: 'حلقة مفاتيح زرقاء مع 4 مفاتيح ومفتاح سيارة تويوتا',
      location: 'محطة حافلات باب الزوار',
      date: '2024-01-14',
      contact: 'فاطمة - fatima@email.com'
    },
    {
      id: 3,
      type: 'lost',
      category: 'هاتف محمول',
      description: 'هاتف سامسونغ أزرق مع كفر أسود',
      location: 'مركز التسوق أردي',
      date: '2024-01-13',
      contact: 'يوسف - 0777987654'
    }
  ];

  const handleSearch = () => {
    // Here you would normally filter the results based on search criteria
    console.log('Searching for:', { searchQuery, selectedCategory, selectedType });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            البحث في المفقودات 🔍
          </h1>
          <p className="text-lg text-gray-600">
            ابحث في قاعدة البيانات عن الأغراض المفقودة والموجودة
          </p>
        </div>

        {/* Search Filters */}
        <Card className="mb-8 shadow-lg">
          <CardHeader className="bg-algeria-green text-white">
            <CardTitle className="text-xl text-center">فلاتر البحث</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="search" className="text-right block mb-2">
                  كلمات البحث
                </Label>
                <Input
                  id="search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ابحث بالوصف أو المكان..."
                  className="text-right"
                />
              </div>

              <div>
                <Label className="text-right block mb-2">نوع الغرض</Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر الفئة" />
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
                <Label className="text-right block mb-2">نوع البلاغ</Label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر النوع" />
                  </SelectTrigger>
                  <SelectContent>
                    {types.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button 
                  onClick={handleSearch}
                  className="w-full bg-algeria-red hover:bg-red-700 text-white"
                >
                  🔍 ابحث
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search Results */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">نتائج البحث</h2>
            <span className="text-gray-600">{mockResults.length} نتيجة</span>
          </div>

          <div className="grid gap-6">
            {mockResults.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-2">
                      <Badge 
                        variant={item.type === 'lost' ? 'destructive' : 'default'}
                        className={item.type === 'lost' ? 'bg-algeria-red' : 'bg-algeria-green'}
                      >
                        {item.type === 'lost' ? '📢 مفقود' : '✋ معثور عليه'}
                      </Badge>
                      <Badge variant="outline">
                        {item.category}
                      </Badge>
                    </div>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 text-right">
                    {item.description}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="text-right">
                      <span className="font-medium">📍 المكان: </span>
                      {item.location}
                    </div>
                    <div className="text-right">
                      <span className="font-medium">📞 التواصل: </span>
                      {item.contact}
                    </div>
                  </div>

                  <div className="mt-4 text-right">
                    <Button 
                      variant="outline" 
                      className="border-algeria-green text-algeria-green hover:bg-algeria-green hover:text-white"
                    >
                      📞 تواصل مع المُبلغ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results Message */}
          {mockResults.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                لم نجد نتائج مطابقة
              </h3>
              <p className="text-gray-600">
                جرب تغيير معايير البحث أو اختيار فئة أخرى
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Search;
