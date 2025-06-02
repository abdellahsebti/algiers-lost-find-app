
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 space-x-reverse mb-4">
              <div className="text-2xl">🇩🇿</div>
              <span className="text-xl font-bold">المفقودات الجزائرية</span>
            </div>
            <p className="text-gray-300 mb-4">
              منصة وطنية لمساعدة المواطنين الجزائريين في استرداد ممتلكاتهم المفقودة
              وبناء مجتمع متعاون ومتضامن.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <span className="text-algeria-green">🇩🇿</span>
              <span className="text-gray-300">صنع بحب في الجزائر</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/report-lost" className="text-gray-300 hover:text-algeria-green transition-colors">
                  الإبلاغ عن مفقود
                </Link>
              </li>
              <li>
                <Link to="/report-found" className="text-gray-300 hover:text-algeria-green transition-colors">
                  الإبلاغ عن موجود
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-300 hover:text-algeria-green transition-colors">
                  البحث في المفقودات
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-algeria-green transition-colors">
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">اتصل بنا</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 info@lostfound.dz</p>
              <p>📱 +213 XX XX XX XX</p>
              <p>📍 الجزائر العاصمة، الجزائر</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 المفقودات الجزائرية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
