import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import {
  Monitor,
  Navigation,
  Settings,
  Smartphone,
  Shield,
  Zap,
  Flame,
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Monitor,
      title: 'МУЛЬТИМЕДИЙНАЯ СИСТЕМА',
      description:
        'Полное подчинение навигации, медиаплеера и всех систем русскому языку',
      features: [
        'Навигация на русском',
        'Голосовые команды',
        'Медиаплеер',
        'Настройки системы',
      ],
      popular: true,
    },
    {
      icon: Settings,
      title: 'БОРТОВОЙ КОМПЬЮТЕР',
      description: 'Захват всех меню настроек автомобиля русским языком',
      features: ['Меню настроек', 'Индикаторы приборов', 'Сервисные сообщения'],
      popular: false,
    },
    {
      icon: Smartphone,
      title: 'Установка приложений',
      description:
        'Тотальная русификация официального приложения производителя',
      features: ['YouTube', 'Spotify', 'Google', 'Алиса'],
      popular: false,
    },
    {
      icon: Navigation,
      title: 'НАВИГАЦИОННАЯ СИСТЕМА',
      description: 'Установка и настройка агрессивной русскоязычной навигации',
      features: [
        'Карты Кырзстана',
        'Голосовые подсказки',
        'Пробки онлайн',
        'Yandex Навигатор',
        ` 2ГИС`,
      ],
      popular: false,
    },
  ];

  const advantages = [
    {
      icon: Shield,
      title: 'ЖЕЛЕЗНАЯ ГАРАНТИЯ',
      description: 'Все работы проводятся с сохранением заводской гарантии',
    },
    {
      icon: Zap,
      title: 'МОЛНИЕНОСНОЕ ВЫПОЛНЕНИЕ',
      description: 'Большинство работ выполняется за 1-2 часа',
    },
    {
      icon: Flame,
      title: 'ОГНЕННОЕ КАЧЕСТВО',
      description: 'Предоставляем гарантию на все выполненные работы',
    },
  ];

  return (
    <section
      id="services"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Фоновые эффекты */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-800/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-3 sm:mb-4 uppercase tracking-wider">
            НАШИ{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
              УСЛУГИ
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto font-medium px-4">
            Предоставляем полный спектр услуг по{' '}
            <span className="text-blue-400 font-bold">
              БРУТАЛЬНОЙ РУСИФИКАЦИИ
            </span>{' '}
            автомобилей всех популярных марок с железной гарантией качества
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative hover:shadow-2xl hover:shadow-blue-600/25 transition-all duration-300 bg-gray-800/50 border-2 border-gray-700 hover:border-blue-600/50 group"
            >
              {service.popular && (
                <Badge className="absolute -top-2 left-4 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white font-black border-0 animate-pulse text-xs sm:text-sm">
                  🔥 ХИТ
                </Badge>
              )}
              <CardHeader className="pb-3 sm:pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg text-white font-black uppercase tracking-wide leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 font-medium">
                  {service.description}
                </p>
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-xs sm:text-sm text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="text-center bg-gray-800/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-blue-600/50 transition-colors"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full shadow-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <advantage.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-black text-white mb-2 uppercase tracking-wide">
                {advantage.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 font-medium">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
