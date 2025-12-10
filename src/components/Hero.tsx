import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle, Zap, Users, Award, Flame } from 'lucide-react';
import { moveToContact } from '../utils/move-to-contact';
import SALON_CHANGAN from '../assets/changan-salon.jpg';

export function Hero() {
  const stats = [
    { icon: Users, value: '300+', label: 'КЛИЕНТОВ ПОКОРЕНО' },
    { icon: Award, value: '3', label: 'ГОДА НА РЫНКЕ' },
    { icon: CheckCircle, value: '100%', label: 'ГАРАНТИЯ СИЛЫ' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-12 sm:py-16 lg:py-32 overflow-hidden">
      {/* Фоновые эффекты */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-600/30 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid xl:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-20">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-800/20 border border-blue-600/30 text-blue-400 text-xs sm:text-sm mb-4 sm:mb-6 font-bold">
              <Flame className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-pulse" />
              <span className="hidden sm:inline">
                ЭКСПЕРТЫ ПО РУСИФИКАЦИИ С 2022 ГОДА
              </span>
              <span className="sm:hidden">С 2022 ГОДА</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
                BRUTAL
              </span>
              <br />
              РУСИФИКАЦИЯ
            </h1>

            <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-gray-300 mb-6 sm:mb-8 font-medium">
              Превращаем ваш автомобиль в русскоязычного зверя. Агрессивная
              русификация с сохранением гарантии.
              <span className="text-blue-400 font-bold">
                {' '}
                БЕЗ КОМПРОМИССОВ.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12">
              <Button
                size="lg"
                className="text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white font-black border-0 shadow-lg shadow-blue-600/25 uppercase tracking-wider w-full sm:w-auto cursor-pointer"
                onClick={moveToContact}
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                ПОЛУЧИТЬ МОЩЬ
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 border-2 border-blue-600/50 text-blue-400 hover:bg-blue-600/10 font-bold uppercase tracking-wider w-full sm:w-auto cursor-pointer"
                onClick={() => {
                  window.open(
                    'https://www.instagram.com/dil_auto/',
                    '_blank',
                    'noopener,noreferrer'
                  );
                }}
              >
                ПОСМОТРЕТЬ РАБОТЫ
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 xl:gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-gray-800/50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 xl:p-4 border border-blue-600/20 hover:border-blue-600/50 transition-colors"
                >
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-md sm:rounded-lg mb-1 sm:mb-2 mx-auto">
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-black text-white">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-400 font-semibold leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-8 xl:mt-0 overflow-visible px-3 sm:px-0">
            <Card className="overflow-hidden shadow-2xl border-2 border-blue-600/30 bg-gray-900/50">
              <ImageWithFallback
                src={SALON_CHANGAN}
                alt="Русифицированная панель автомобиля"
                className="w-full h-64 sm:h-80 md:h-96 xl:h-[28rem] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </Card>

            {/* Floating Badges */}
            <div className="absolute -top-3 sm:-top-4 xl:-top-6 -left-1 sm:-left-2 xl:-left-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-md sm:rounded-lg xl:rounded-xl p-1.5 sm:p-2 md:p-3 xl:p-4 shadow-lg border border-green-500/50 sm:border-2 z-10">
              <div className="flex items-center space-x-1.5 sm:space-x-2 xl:space-x-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 xl:w-3 xl:h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] sm:text-xs md:text-sm xl:text-sm font-black text-white uppercase">
                  РУССКИЙ АКТИВИРОВАН
                </span>
              </div>
            </div>

            <div className="absolute -bottom-3 sm:-bottom-4 xl:-bottom-6 -right-1 sm:-right-2 xl:-right-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-md sm:rounded-lg xl:rounded-xl p-1.5 sm:p-2 md:p-3 xl:p-4 shadow-lg border border-blue-600/50 sm:border-2 z-10">
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl xl:text-2xl font-black text-blue-400">
                  1Ч
                </div>
                <div className="text-[9px] sm:text-[10px] md:text-xs xl:text-xs text-gray-300 font-bold uppercase whitespace-nowrap">
                  ВРЕМЯ АТАКИ
                </div>
              </div>
            </div>

            {/* Дополнительные эффекты */}
            <div className="absolute top-4 right-4 w-2 h-2 sm:w-3 sm:h-3 bg-blue-600 rounded-full animate-ping"></div>
            <div
              className="absolute bottom-4 left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-800 rounded-full animate-ping"
              style={{ animationDelay: '0.5s' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
