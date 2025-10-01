import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function Timeline() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = Math.min(scrolled / scrollHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-4 sm:right-6 lg:right-8 top-0 h-full w-1.5 sm:w-2 z-40 pointer-events-none hidden md:block">
      {/* Дорога */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600 rounded-full">
        {/* Разметка дороги */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full">
          <div
            className="h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-60"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to bottom, transparent 0%, transparent 40%, #3b82f6 50%, #3b82f6 60%, transparent 70%, transparent 100%)',
              backgroundSize: '1px 40px',
            }}
          ></div>
        </div>
      </div>

      {/* Машина */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          top: `${Math.max(10, Math.min(90, scrollProgress * 80 + 10))}%`,
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          {/* Тень машины */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-black/40 rounded-full blur-sm"></div>

          {/* Реалистичная машина вид сверху */}
          <svg
            width="28"
            height="49"
            viewBox="0 0 32 56"
            className="relative z-10 sm:w-8 sm:h-14"
          >
            {/* Тень под машиной */}
            <ellipse
              cx="16"
              cy="28"
              rx="14"
              ry="26"
              fill="#000"
              opacity="0.2"
            />

            {/* Основной корпус автомобиля */}
            <path
              d="M8 8 Q16 4 24 8 L26 12 L28 48 Q16 52 4 48 L6 12 Z"
              fill="#1a1a1a"
              stroke="#333"
              strokeWidth="0.5"
            />

            {/* Капот */}
            <path
              d="M10 8 Q16 6 22 8 L24 16 L8 16 Z"
              fill="#2a2a2a"
              stroke="#444"
              strokeWidth="0.5"
            />

            {/* Крыша */}
            <rect
              x="9"
              y="18"
              width="14"
              height="20"
              rx="3"
              fill="#1f1f1f"
              stroke="#555"
              strokeWidth="0.5"
            />

            {/* Лобовое стекло */}
            <path
              d="M10 16 L22 16 L21 20 L11 20 Z"
              fill="#0ea5e9"
              opacity="0.7"
              stroke="#0369a1"
              strokeWidth="0.3"
            />

            {/* Заднее стекло */}
            <path
              d="M11 36 L21 36 L22 40 L10 40 Z"
              fill="#0ea5e9"
              opacity="0.5"
              stroke="#0369a1"
              strokeWidth="0.3"
            />

            {/* Боковые стекла */}
            <rect
              x="10"
              y="20"
              width="3"
              height="16"
              rx="1"
              fill="#0ea5e9"
              opacity="0.6"
            />
            <rect
              x="19"
              y="20"
              width="3"
              height="16"
              rx="1"
              fill="#0ea5e9"
              opacity="0.6"
            />

            {/* Передние фары */}
            <ellipse
              cx="12"
              cy="8"
              rx="2.5"
              ry="1.5"
              fill="#3b82f6"
              opacity="0.9"
            />
            <ellipse
              cx="20"
              cy="8"
              rx="2.5"
              ry="1.5"
              fill="#3b82f6"
              opacity="0.9"
            />

            {/* Задние фонари */}
            <ellipse
              cx="12"
              cy="48"
              rx="2"
              ry="1.2"
              fill="#dc2626"
              opacity="0.8"
            />
            <ellipse
              cx="20"
              cy="48"
              rx="2"
              ry="1.2"
              fill="#dc2626"
              opacity="0.8"
            />

            {/* Боковые зеркала */}
            <ellipse
              cx="6"
              cy="22"
              rx="1.5"
              ry="1"
              fill="#333"
              stroke="#555"
              strokeWidth="0.3"
            />
            <ellipse
              cx="26"
              cy="22"
              rx="1.5"
              ry="1"
              fill="#333"
              stroke="#555"
              strokeWidth="0.3"
            />

            {/* Колеса */}
            <circle
              cx="10"
              cy="14"
              r="4"
              fill="#1f2937"
              stroke="#374151"
              strokeWidth="0.8"
            />
            <circle
              cx="22"
              cy="14"
              r="4"
              fill="#1f2937"
              stroke="#374151"
              strokeWidth="0.8"
            />
            <circle
              cx="10"
              cy="42"
              r="4"
              fill="#1f2937"
              stroke="#374151"
              strokeWidth="0.8"
            />
            <circle
              cx="22"
              cy="42"
              r="4"
              fill="#1f2937"
              stroke="#374151"
              strokeWidth="0.8"
            />

            {/* Диски колес */}
            <circle
              cx="10"
              cy="14"
              r="2.5"
              fill="#4b5563"
              stroke="#6b7280"
              strokeWidth="0.5"
            />
            <circle
              cx="22"
              cy="14"
              r="2.5"
              fill="#4b5563"
              stroke="#6b7280"
              strokeWidth="0.5"
            />
            <circle
              cx="10"
              cy="42"
              r="2.5"
              fill="#4b5563"
              stroke="#6b7280"
              strokeWidth="0.5"
            />
            <circle
              cx="22"
              cy="42"
              r="2.5"
              fill="#4b5563"
              stroke="#6b7280"
              strokeWidth="0.5"
            />

            {/* Спицы дисков */}
            <g stroke="#9ca3af" strokeWidth="0.3">
              <line x1="8" y1="14" x2="12" y2="14" />
              <line x1="10" y1="12" x2="10" y2="16" />
              <line x1="20" y1="14" x2="24" y2="14" />
              <line x1="22" y1="12" x2="22" y2="16" />
              <line x1="8" y1="42" x2="12" y2="42" />
              <line x1="10" y1="40" x2="10" y2="44" />
              <line x1="20" y1="42" x2="24" y2="42" />
              <line x1="22" y1="40" x2="22" y2="44" />
            </g>

            {/* Дверные ручки */}
            <rect x="8" y="26" width="0.8" height="4" rx="0.4" fill="#555" />
            <rect x="23.2" y="26" width="0.8" height="4" rx="0.4" fill="#555" />

            {/* Антенна */}
            <circle cx="16" cy="25" r="0.5" fill="#666" />

            {/* Детали кузова */}
            <path
              d="M12 44 Q16 46 20 44"
              stroke="#444"
              strokeWidth="0.5"
              fill="none"
            />

            {/* Номерной знак (передний) */}
            <rect
              x="14"
              y="10"
              width="4"
              height="1.5"
              rx="0.2"
              fill="#fff"
              stroke="#ccc"
              strokeWidth="0.2"
            />

            {/* Номерной знак (задний) */}
            <rect
              x="14"
              y="44.5"
              width="4"
              height="1.5"
              rx="0.2"
              fill="#fff"
              stroke="#ccc"
              strokeWidth="0.2"
            />
          </svg>

          {/* Выхлопной дым */}
          {scrollProgress > 0.1 && (
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-1 h-1 bg-gray-500 rounded-full animate-ping"></div>
            </motion.div>
          )}
        </div>

        {/* Индикатор прогресса */}
      </motion.div>

      {/* Финишная линия */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-checkered-flag bg-white">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(45deg, #000 25%, transparent 25%), 
            linear-gradient(-45deg, #000 25%, transparent 25%), 
            linear-gradient(45deg, transparent 75%, #000 75%), 
            linear-gradient(-45deg, transparent 75%, #000 75%)
          `,
            backgroundSize: '4px 4px',
            backgroundPosition: '0 0, 0 2px, 2px -2px, -2px 0px',
          }}
        ></div>
      </div>
    </div>
  );
}
