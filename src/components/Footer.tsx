import { Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t-2 border-blue-600/30 text-white py-8 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
              DIL AUTO
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 font-medium">
              Профессиональная{' '}
              <span className="text-blue-400 font-bold">БРУТАЛЬНАЯ</span>{' '}
              русификация автомобилей с 2022 года. Работаем со всеми популярными
              марками.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm sm:text-base font-black mb-3 sm:mb-4 text-blue-400 uppercase tracking-wide">
              Услуги
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-300">
              <li>
                <a className="text-sm sm:text-base font-medium">
                  Мультимедийные системы
                </a>
              </li>
              <li>
                <a className="text-sm sm:text-base font-medium">
                  Бортовые компьютеры
                </a>
              </li>
              <li>
                <a className="text-sm sm:text-base font-medium">
                  Навигационные системы
                </a>
              </li>
              <li>
                <a className="text-sm sm:text-base font-medium">
                  Мобильные приложения
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm sm:text-base font-black mb-3 sm:mb-4 text-blue-400 uppercase tracking-wide">
              Марки автомобилей
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-300">
              <li>
                <a className="text-sm sm:text-base font-medium">CHANGAN</a>
              </li>
              <li>
                <a className="text-sm sm:text-base font-medium">WELTMEISTER</a>
              </li>
              <li>
                <a className="text-sm sm:text-base font-medium">BYD</a>
              </li>
              <li>
                <a className="text-sm sm:text-base font-medium">GEELY</a>
              </li>
              <li>
                <a className="text-sm sm:text-base font-medium">Toyota</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm sm:text-base font-black mb-3 sm:mb-4 text-blue-400 uppercase tracking-wide">
              Контакты
            </h4>
            <div className="space-y-2 sm:space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-sm sm:text-base font-medium">
                  +996 707 121 296
                </span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 sm:mr-3 mt-0.5 text-blue-400 flex-shrink-0" />
                <span className="text-sm sm:text-base font-medium">
                  г. Бишкек, ул. Анкара 10Б
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-600/30 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-xs sm:text-sm font-medium text-center md:text-left">
            © 2024 <span className="text-blue-400 font-bold">DIL AUTO</span>.
            Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
