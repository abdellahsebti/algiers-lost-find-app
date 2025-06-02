
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'الصفحة الرئيسية', icon: '🏠' },
    { path: '/report-lost', label: 'الإبلاغ عن مفقود', icon: '📢' },
    { path: '/report-found', label: 'الإبلاغ عن موجود', icon: '✋' },
    { path: '/search', label: 'البحث', icon: '🔍' },
    { path: '/about', label: 'من نحن', icon: 'ℹ️' }
  ];

  return (
    <nav className="bg-algeria-green shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="text-2xl">🇩🇿</div>
            <span className="text-white font-bold text-xl">المفقودات الجزائرية</span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4 space-x-reverse">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'bg-algeria-red text-white'
                      : 'text-white hover:bg-algeria-red hover:text-white'
                  }`}
                >
                  <span className="ml-2">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-gray-300 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-algeria-red text-white'
                    : 'text-white hover:bg-algeria-red hover:text-white'
                }`}
              >
                <span className="ml-2">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
