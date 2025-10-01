import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import {
  MessageCircle,
  Car,
  Settings,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { moveToContact } from '../utils/move-to-contact';

export function Process() {
  const steps = [
    {
      icon: MessageCircle,
      title: 'КОНСУЛЬТАЦИЯ',
      description:
        'Обсуждаем ваши потребности и выбираем стратегию атаки для вашего автомобиля',
      details: [
        'Определяем модель и год выпуска',
        'Выбираем необходимые услуги',
        'Рассчитываем стоимость работ',
      ],
    },
    {
      icon: Car,
      title: 'ДИАГНОСТИКА',
      description:
        'Проводим полную диагностику систем автомобиля для определения способа захвата',
      details: [
        'Подключение к диагностическому порту',
        'Анализ версий ПО',
        'Проверка совместимости',
      ],
    },
    {
      icon: Settings,
      title: 'ВЫПОЛНЕНИЕ РАБОТ',
      description:
        'Брутальная русификация с использованием профессионального оборудования',
      details: [
        'Резервное копирование данных',
        'Прошивка и настройка',
        'Тестирование функций',
      ],
    },
    {
      icon: CheckCircle,
      title: 'ПРОВЕРКА И ПЕРЕДАЧА',
      description:
        'Тщательная проверка всех систем и обучение владельца работе с русифицированным зверем',
      details: [
        'Полное тестирование',
        'Обучение владельца',
        'Выдача железной гарантии',
      ],
    },
  ];

  return (
    <section
      id="process"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Фоновые эффекты */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-blue-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-3 sm:mb-4 uppercase tracking-wider">
            КАК МЫ{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
              РАБОТАЕМ
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto font-medium px-4">
            <span className="text-blue-400 font-bold">ПРОФЕССИОНАЛЬНЫЙ</span>{' '}
            подход и четкий процесс работы гарантируют качественный результат
            без рисков для вашего автомобиля
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="hover:shadow-2xl hover:shadow-blue-600/25 transition-all duration-300 bg-gray-800/50 border-2 border-gray-700 hover:border-blue-600/50">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 sm:gap-6 lg:gap-8">
                    <div className="flex items-start gap-3 sm:gap-4 lg:gap-6 flex-1">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
                          <step.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                        </div>
                        <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full flex items-center justify-center mt-2 sm:mt-3 lg:mt-4 mx-auto shadow-lg">
                          <span className="text-white font-black text-xs sm:text-sm">
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg lg:text-xl font-black text-white mb-1 sm:mb-2 uppercase tracking-wide">
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 font-medium">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="md:w-64 lg:w-80 pl-12 md:pl-0">
                      <ul className="space-y-1.5 sm:space-y-2">
                        {step.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-xs sm:text-sm text-gray-300"
                          >
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="flex justify-center mt-2 sm:mt-3 lg:mt-4">
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 rotate-90 md:rotate-0" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 border-2 border-blue-600/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3 sm:mb-4 uppercase tracking-wide">
              Готовы <span className="text-blue-400">ЗАХВАТИТЬ</span> ваш
              автомобиль?
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 font-medium px-2">
              Получите бесплатную консультацию и узнайте точную стоимость работ
              для вашего автомобиля
            </p>
            <Button
              size="lg"
              className="px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white font-black border-0 shadow-lg shadow-blue-600/25 uppercase tracking-wider w-full sm:w-auto cursor-pointer"
              onClick={moveToContact}
            >
              ПОЛУЧИТЬ МОЩЬ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
