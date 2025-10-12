import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Clock, CheckCircle } from 'lucide-react';
import Weltmeister from '../../public/assets/wex.jpg';
import BYD from '../../public/assets/byd.png';
import CHANGAN from '../../public/assets/changan.webp';

export function Portfolio() {
  const projects = [
    {
      brand: 'Weltmeister',
      model: 'EX5',
      image: Weltmeister,
      services: ['Русификация', 'Установка Приложений', 'Навигация'],
      duration: '1 час',
      rating: 5,
      client: 'Рустам Б.',
      review:
        'Русификация четкая! Все сделано быстро и профессионально. Рахмат! Машина зверь',
    },
    {
      brand: 'BYD',
      model: 'Song Plus',
      image: BYD,
      services: [
        'Русификация',
        'Установка Приложений',
        'Установка sim-карты',
        'Голосовое управление',
      ],
      duration: '1.5 часа',
      rating: 5,
      client: 'Елена К.',
      review:
        'Спасибо большое за проделанную работу! Теперь я могу наслаждаться своим автомобилем на все 100%. Dil Auto - лучшие!',
    },
    {
      brand: 'Changan',
      model: 'Uni Z',
      image: CHANGAN,
      services: [
        'Русификация',
        'Установка приложений',
        'Камера 360',
        'Race Mode',
      ],
      duration: '1 час',
      rating: 5,
      client: 'Байхан Т.',
      review:
        'Быстро, качественно, мощно! Теперь пользоваться автомобилем - одно удовольствие.',
    },
  ];

  const stats = [
    { number: '300+', label: 'ПОКОРЕННЫХ АВТОМОБИЛЕЙ' },
    { number: '20+', label: 'ПОДЧИНЕННЫХ МОДЕЛЕЙ' },
    { number: '3', label: 'ГОДА НА РЫНКЕ' },
    { number: '4.9', label: 'СРЕДНЯЯ ОЦЕНКА КЛИЕНТОВ' },
  ];

  return (
    <section
      id="portfolio"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Фоновые эффекты */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-3 sm:mb-4 uppercase tracking-wider">
            НАШИ{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
              ТРОФЕИ
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto font-medium px-4">
            Более{' '}
            <span className="text-blue-400 font-bold">
              300+ УСПЕШНО ПОКОРЕННЫХ
            </span>{' '}
            автомобилей различных марок и моделей. Страх клиентов перед
            иностранным языком - наш главный мотиватор
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl hover:shadow-blue-600/25 transition-all duration-300 bg-gray-800/50 border-2 border-gray-700 hover:border-blue-600/50 group"
            >
              <div className="relative">
                <ImageWithFallback
                  src={project.image}
                  alt={`${project.brand} ${project.model}`}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <Badge className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white font-black border-0 text-xs sm:text-sm">
                  {project.brand}
                </Badge>
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-gray-800/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center border border-blue-600/30">
                  <Clock className="w-3 h-3 mr-1 text-blue-400" />
                  <span className="text-xs text-gray-300 font-semibold">
                    {project.duration}
                  </span>
                </div>
              </div>

              <CardContent className="p-4 sm:p-6">
                <h3 className="text-sm sm:text-base font-black text-white mb-2 uppercase tracking-wide">
                  {project.model}
                </h3>

                <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                  {project.services.map((service, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-[10px] sm:text-xs bg-gray-700 text-blue-300 hover:bg-gray-600"
                    >
                      {service}
                    </Badge>
                  ))}
                </div>

                <div className="border-t border-gray-600 pt-3 sm:pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm sm:text-base font-bold text-blue-400">
                      {project.client}
                    </span>
                    <div className="flex items-center">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 sm:w-4 sm:h-4 fill-blue-400 text-blue-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 font-medium">
                    "{project.review}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 border-2 border-blue-600/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg backdrop-blur-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-400 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-semibold uppercase tracking-wide text-xs sm:text-sm leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-full text-green-400 mb-4 font-bold uppercase tracking-wide text-xs sm:text-sm">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <span className="hidden sm:inline">
              ВСЕ РАБОТЫ ВЫПОЛНЕНЫ С ЖЕЛЕЗНОЙ ГАРАНТИЕЙ
            </span>
            <span className="sm:hidden">ГАРАНТИЯ 100%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
