
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23007a3d' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-algeria-green to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl">🇩🇿</span>
              </div>
              <div>
                <span className="text-2xl font-bold block">المفقودات الجزائرية</span>
                <span className="text-green-400 text-sm">Lost & Found DZ</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              منصة وطنية لمساعدة المواطنين الجزائريين في استرداد ممتلكاتهم المفقودة
              وبناء مجتمع متعاون ومتضامن يقوم على قيم الخير والتعاون.
            </p>
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="flex items-center space-x-2 space-x-reverse bg-algeria-green/10 px-4 py-2 rounded-full border border-algeria-green/20">
                <span className="text-algeria-green text-xl">💻</span>
                <span className="text-green-400 font-semibold">صنع بحب من فريق ضمة</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-algeria-green">روابط سريعة</h3>
            <ul className="space-y-4">
              {[
                { to: '/report-lost', label: 'الإبلاغ عن مفقود', icon: '📢' },
                { to: '/report-found', label: 'الإبلاغ عن موجود', icon: '✋' },
                { to: '/search', label: 'البحث في المفقودات', icon: '🔍' },
                { to: '/about', label: 'من نحن', icon: 'ℹ️' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="group flex items-center space-x-3 space-x-reverse text-gray-300 hover:text-algeria-green transition-all duration-300 transform hover:translate-x-2"
                  >
                    <span className="text-lg group-hover:animate-bounce">{link.icon}</span>
                    <span className="group-hover:font-semibold">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-algeria-green">اتصل بنا</h3>
            <div className="space-y-4">
              {[
                { icon: '📧', text: 'info@lostfound.dz' },
                { icon: '📱', text: '+213 XX XX XX XX' },
                { icon: '📍', text: 'الجزائر العاصمة، الجزائر' },
                { icon: '🕐', text: 'متاح 24/7' }
              ].map((contact, index) => (
                <div key={index} className="flex items-center space-x-3 space-x-reverse text-gray-300 group hover:text-green-400 transition-colors duration-300">
                  <span className="text-xl group-hover:animate-pulse">{contact.icon}</span>
                  <span>{contact.text}</span>
                </div>
              ))}
            </div>

            {/* Social badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['🔒 آمن', '🆓 مجاني', '⚡ سريع'].map((badge, index) => (
                <span 
                  key={index}
                  className="bg-algeria-green/10 text-algeria-green px-3 py-1 rounded-full text-sm border border-algeria-green/20 hover:bg-algeria-green/20 transition-colors duration-300"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-right">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 المفقودات الجزائرية. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center space-x-6 space-x-reverse text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-algeria-green transition-colors">سياسة الخصوصية</Link>
              <Link to="/terms" className="hover:text-algeria-green transition-colors">شروط الاستخدام</Link>
              <Link to="/service-agreement" className="hover:text-algeria-green transition-colors">اتفاقية الخدمة</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
