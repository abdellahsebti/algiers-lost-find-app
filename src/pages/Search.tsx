
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useSearchReports } from '@/hooks/useSearchReports';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const { reports, loading, error } = useSearchReports({
    searchQuery,
    category: selectedCategory,
    type: selectedType
  });

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

  const handleSearch = () => {
    // The search is automatically triggered by the useSearchReports hook
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
                  disabled={loading}
                >
                  {loading ? '🔄 جاري البحث...' : '🔍 ابحث'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search Results */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">نتائج البحث</h2>
            <span className="text-gray-600">
              {loading ? 'جاري التحميل...' : `${reports.length} نتيجة`}
            </span>
          </div>

          {error && (
            <div className="text-center py-8">
              <div className="text-red-500 text-xl">{error}</div>
            </div>
          )}

          {loading ? (
            <div className="grid gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-6">
                    <div className="h-4 bg-gray-300 rounded mb-4"></div>
                    <div className="h-6 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid gap-6">
              {reports.map((item) => (
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
          )}

          {/* No Results Message */}
          {!loading && reports.length === 0 && !error && (
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
