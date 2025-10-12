import { useState } from 'react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { Menu, Phone, Zap } from 'lucide-react';
import { moveToContact } from '../utils/move-to-contact';

export function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#services', label: 'Услуги' },
    { href: '#process', label: 'Процесс' },
    { href: '#portfolio', label: 'Портфолио' },
    { href: '#contact', label: 'Контакты' },
  ];

  const handleNavClick = () => {
    setOpen(false);
    moveToContact();
  };

  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-blue-600/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <div className="flex-shrink-0 flex items-center space-x-1.5 sm:space-x-2">
              <div className="relative flex-shrink-0">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-500" />
                <div className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-500 animate-pulse opacity-50">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                </div>
              </div>
              <div className="min-w-0">
                <h1 className="text-base sm:text-lg md:text-2xl font-black text-white tracking-tight">
                  DIL AUTO
                </h1>
                <p className="text-[9px] sm:text-[10px] md:text-xs text-blue-400 font-semibold uppercase tracking-wider sm:tracking-widest truncate">
                  РУСИФИКАЦИЯ АВТО
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 transition-colors font-semibold uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="hidden xl:flex items-center text-sm text-gray-300 bg-gray-800/50 px-3 py-2 rounded-lg border border-blue-600/30">
              <Phone className="w-4 h-4 mr-2 text-blue-400" />
              +996 553 241 204
            </div>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white font-bold border-0 shadow-lg shadow-blue-600/25 cursor-pointer"
              onClick={moveToContact}
            >
              ЗАКАЗАТЬ ЗВОНОК
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex-shrink-0">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-400 hover:text-blue-300 hover:bg-blue-600/10 h-10 w-10 p-0"
                >
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-gray-900 border-blue-600/30 w-[280px] sm:w-[300px] md:w-[400px] pl-6 pr-6"
              >
                <SheetHeader>
                  <SheetTitle className="flex items-center space-x-2 text-white">
                    <Zap className="w-6 h-6 text-blue-500" />
                    <span className="font-black">DIL AUTO</span>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col space-y-6 mt-8">
                  {/* Navigation Links */}
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={handleNavClick}
                        className="text-gray-300 hover:text-blue-400 transition-colors font-bold uppercase tracking-wider text-lg border-b border-gray-700 pb-3"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>

                  {/* Contact Info */}
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-blue-600/30">
                    <div className="flex items-center space-x-3 mb-3">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase">
                          Телефон
                        </p>
                        <p className="text-white font-bold">+996 553 241 204</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white font-black border-0 shadow-lg shadow-blue-600/25 uppercase tracking-wider py-6 cursor-pointer"
                    onClick={handleNavClick}
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    ЗАКАЗАТЬ ЗВОНОК
                  </Button>

                  {/* Additional Info */}
                  <div className="text-center pt-4 border-t border-gray-700">
                    <p className="text-gray-400 text-sm font-medium">
                      Работаем с{' '}
                      <span className="text-blue-400 font-bold">2022 года</span>
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      300+ успешно русифицированных автомобилей
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
