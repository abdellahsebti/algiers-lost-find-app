
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'الصفحة الرئيسية', icon: '🏠' },
    { path: '/report-lost', label: 'الإبلاغ عن مفقود', icon: '📢' },
    { path: '/report-found', label: 'الإبلاغ عن موجود', icon: '✋' },
    { path: '/search', label: 'البحث', icon: '🔍' },
    { path: '/about', label: 'من نحن', icon: 'ℹ️' }
  ];

  return (
    <nav className="bg-gradient-to-r from-algeria-green via-green-700 to-algeria-green shadow-xl sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 space-x-reverse group">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 border border-white/20">
              <span className="text-2xl animate-pulse">🇩🇿</span>
            </div>
            <div className="text-white">
              <span className="font-bold text-2xl block leading-tight">المفقودات الجزائرية</span>
              <span className="text-green-200 text-sm">Lost & Found DZ</span>
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-6 space-x-reverse">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group relative px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-algeria-red text-white shadow-lg transform scale-105'
                      : 'text-white hover:bg-white/10 hover:text-green-100'
                  }`}
                >
                  <span className="ml-2 text-lg group-hover:animate-bounce">{item.icon}</span>
                  {item.label}
                  {location.pathname === item.path && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-algeria-red rounded-full"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-green-200 p-3 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}>
          <div className="flex flex-col space-y-3 pt-4 border-t border-white/20">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-4 rounded-xl text-base font-semibold transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-algeria-red text-white shadow-lg'
                    : 'text-white hover:bg-white/10 hover:text-green-100'
                }`}
              >
                <span className="ml-3 text-xl">{item.icon}</span>
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
