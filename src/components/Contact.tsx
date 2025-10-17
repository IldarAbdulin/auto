import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { PhoneInput } from './ui/phoneInput';
import { moveToContact } from '../utils/move-to-contact';
import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  showErrorToast,
  showInfoToast,
  showSuccessToast,
} from '../utils/toast-utilts';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    model: '',
    message: '',
  });

  const [fieldErrors, setFieldErrors] = useState({
    name: false,
    phone: false,
    model: false,
  });

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const sanitizeInput = (input: string): string => {
    return input.replace(/<[^>]*>/g, '').trim();
  };

  const validateEmail = (email: string): boolean => {
    if (!email) return true;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const regex = /^\+?[\d\s-()]{9,}$/;
    return regex.test(phone);
  };

  async function sendMessageToTelegramGroup() {
    const currentTime = Date.now();
    if (currentTime - lastSubmitTime < 20000) return;

    setFieldErrors({
      name: false,
      phone: false,
      model: false,
    });

    let hasErrors = false;
    const newErrors = {
      name: !formData.name,
      phone: !formData.phone || !validatePhone(formData.phone),
      model: !formData.model,
    };

    if (Object.values(newErrors).some((error) => error)) {
      setFieldErrors(newErrors);
      showInfoToast('Пожалуйста, заполните все обязательные поля.');
      return;
    }

    if (!validateEmail(formData.email)) {
      showInfoToast('Пожалуйста, введите корректный email.');
      return;
    }

    if (!validatePhone(formData.phone)) {
      showInfoToast('Пожалуйста, введите корректный номер телефона.');
      return;
    }

    if (hasErrors) return;

    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      showInfoToast('Пожалуйста, подтвердите что вы не робот');
      return;
    }

    const botToken = import.meta.env.VITE_TOKEN;
    const chatId = import.meta.env.VITE_CHAT_ID;
    const url = `${import.meta.env.VITE_API_URL}/bot${botToken}/sendMessage`;

    const sanitizedData = {
      name: sanitizeInput(formData.name),
      phone: sanitizeInput(formData.phone),
      email: sanitizeInput(formData.email),
      model: sanitizeInput(formData.model),
      message: sanitizeInput(formData.message),
    };

    const messageText = `
      <b>📩 Новая заявка с сайта DilAuto:</b>\n
👤 <b>Имя:</b> ${sanitizedData.name}\n
📞 <b>Телефон:</b> ${sanitizedData.phone}\n
📧 <b>Email:</b> ${sanitizedData.email || '—'}\n
🚗 <b>Модель авто:</b> ${sanitizedData.model}\n
💬 <b>Сообщение:</b> ${sanitizedData.message || '—'}
`;

    setIsSending(true);
    setIsSent(false);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          message_thread_id: 1494,
          text: messageText,
          parse_mode: 'HTML',
        }),
      });

      const result = await response.json();

      if (result.ok) {
        setIsSent(true);
        setLastSubmitTime(currentTime);
        setFormData({
          name: '',
          phone: '',
          email: '',
          model: '',
          message: '',
        });
        recaptchaRef.current?.reset();
        showSuccessToast('Сообщение успешно отправлено!');
      } else {
        console.error('Ошибка Telegram:', result);
        showErrorToast('Ошибка при отправке сообщения. Попробуйте еще раз.');
      }
    } catch (error) {
      console.error('Ошибка сети:', error);
      showErrorToast('Ошибка при отправке сообщения. Попробуйте еще раз.');
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-3 sm:mb-4 uppercase tracking-wider">
            СВЯЖИТЕСЬ{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
              С НАМИ
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto font-medium px-4">
            Готовы <span className="text-blue-400 font-bold">ПОКОРИТЬ</span> ваш
            автомобиль? Свяжитесь с нами любым удобным способом для получения
            консультации и расчета стоимости атаки
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <div>
            <Card className="h-full bg-gray-800/50 border-2 border-gray-700 hover:border-blue-600/50 transition-colors">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center text-white font-black uppercase tracking-wide text-base sm:text-lg">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400" />
                  ОТПРАВИТЬ СООБЩЕНИЕ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm text-blue-400 mb-1 sm:mb-2 font-bold uppercase">
                      Имя *
                    </label>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => {
                        handleChange('name', e.target.value);
                        setFieldErrors((prev) => ({ ...prev, name: false }));
                      }}
                      className={`bg-gray-700/50 border-gray-600 text-white ${
                        fieldErrors.name
                          ? 'placeholder-red-500 border-red-500 focus:border-red-500'
                          : 'placeholder-gray-400 focus:border-blue-600'
                      } text-sm sm:text-base`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm text-blue-400 mb-1 sm:mb-2 font-bold uppercase">
                      Телефон *
                    </label>
                    <PhoneInput
                      value={formData.phone}
                      onChange={(e) => {
                        handleChange('phone', e.target.value);
                        setFieldErrors((prev) => ({ ...prev, phone: false }));
                      }}
                      className={`w-full ${
                        fieldErrors.phone
                          ? '!border-red-500 [&_input]:placeholder-red-500'
                          : ''
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-blue-400 mb-1 sm:mb-2 font-bold uppercase">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-600 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-blue-400 mb-1 sm:mb-2 font-bold uppercase">
                    Марка и модель машины *
                  </label>
                  <Input
                    placeholder="CHANGAN X5"
                    value={formData.model}
                    onChange={(e) => {
                      handleChange('model', e.target.value);
                      setFieldErrors((prev) => ({ ...prev, model: false }));
                    }}
                    className={`bg-gray-700/50 border-gray-600 text-white ${
                      fieldErrors.model
                        ? 'placeholder-red-500 border-red-500 focus:border-red-500'
                        : 'placeholder-gray-400 focus:border-blue-600'
                    } text-sm sm:text-base`}
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-blue-400 mb-1 sm:mb-2 font-bold uppercase">
                    Сообщение
                  </label>
                  <Textarea
                    placeholder="Расскажите, какой тип атаки вас интересует..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-600 text-sm sm:text-base"
                  />
                </div>

                <div className="mb-4">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                    theme="dark"
                  />
                </div>

                <Button
                  disabled={isSending}
                  className="w-full bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white font-black border-0 shadow-lg shadow-blue-600/25 uppercase tracking-wider py-4 sm:py-6 cursor-pointer"
                  onClick={sendMessageToTelegramGroup}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSending
                    ? 'Отправка...'
                    : isSent
                    ? 'Заявка отправлена ✅'
                    : 'НАЧАТЬ АТАКУ'}
                </Button>

                <p className="text-xs sm:text-sm text-gray-400 text-center font-medium">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных
                  данных
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <Card className="bg-gray-800/50 border-2 border-gray-700 hover:border-blue-600/50 transition-colors">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-blue-400 mb-1 uppercase tracking-wide">
                      ТЕЛЕФОН
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 font-medium">
                      +996 553 241 204
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-2 border-gray-700 hover:border-blue-600/50 transition-colors">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-blue-400 mb-1 uppercase tracking-wide">
                      АДРЕС БАЗЫ
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 font-medium">
                      г. Бишкек, ул. Анкара 10Б, 40 бутик
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-2 border-gray-700 hover:border-blue-600/50 transition-colors">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-blue-400 mb-1 uppercase tracking-wide">
                      РЕЖИМ РАБОТЫ
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 font-medium">
                      Каждый день без выходных с 10:00 до 00:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16 bg-gradient-to-r from-red-900/50 to-orange-900/50 border-2 border-red-500/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center backdrop-blur-sm">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-3 sm:mb-4 uppercase tracking-wide">
            🚨 <span className="text-red-400">ЭКСТРЕННАЯ</span> РУСИФИКАЦИЯ 🚨
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto font-medium px-2">
            Нужно{' '}
            <span className="text-red-400 font-bold">СРОЧНО ПОКОРИТЬ</span>{' '}
            автомобиль? Предлагаем услугу экстренной русификации в течение{' '}
            <span className="text-orange-400 font-bold">12 ЧАСОВ</span> с
            доплатой 50%
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-red-500 text-red-400 hover:bg-red-500/10 font-black uppercase tracking-wider w-full sm:w-auto py-4 sm:py-6"
          >
            <Phone className="w-4 h-4 mr-2" />
            <span
              onClick={moveToContact}
              className="hidden sm:inline cursor-pointer"
            >
              ВЫЗВАТЬ ЭКСТРЕННУЮ СЛУЖБУ
            </span>
            <span className="sm:hidden cursor-pointer">ЭКСТРЕННАЯ СЛУЖБА</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
