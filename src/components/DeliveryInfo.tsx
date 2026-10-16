import React from 'react';
import { STORE_INFO } from '../data/products';
import { Truck, Camera, Droplets, Gift, CheckCircle2, ShieldCheck } from 'lucide-react';

export const DeliveryInfo: React.FC = () => {
  const steps = [
    {
      icon: CheckCircle2,
      number: '01',
      title: 'Выбор букета',
      desc: 'Выберите готовый букет из каталога или опишите ваши пожелания нашему флористу в Instagram.',
    },
    {
      icon: Camera,
      number: '02',
      title: 'Фото перед отправкой',
      desc: 'После сборки флорист присылает вам реальное фото и видео букета в мессенджер для утверждения.',
    },
    {
      icon: Droplets,
      number: '03',
      title: 'Аквабокс и защита',
      desc: 'Цветы доставляются во временной емкости с водой (аквапаке) в термобоксе с климат-контролем.',
    },
    {
      icon: Gift,
      number: '04',
      title: 'Вручение получателю',
      desc: 'Вежливый курьер вручает букет точно в срок вместе с вашей авторской открыткой.',
    },
  ];

  return (
    <section id="delivery" className="py-16 sm:py-24 bg-cream-100/70 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-luxury text-florence-700 font-semibold block mb-2">
            Безупречный сервис в Душанбе
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-florence-900 font-light">
            Как работает доставка Florence
          </h2>
          <div className="w-12 h-0.5 bg-gold-500 mx-auto mt-4 mb-4" />
          <p className="text-xs sm:text-sm text-charcoal-600 font-light">
            Мы позаботились о том, чтобы заказ цветов был легким, а вручение — незабываемым
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-xl border border-cream-200 shadow-xs hover:shadow-lg transition-all duration-300 relative group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-florence-50 flex items-center justify-center text-florence-800 group-hover:bg-florence-800 group-hover:text-cream-50 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-3xl font-light text-cream-300 group-hover:text-gold-500 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-normal text-florence-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlights banner */}
        <div className="mt-12 bg-white rounded-xl border border-cream-200 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <Truck className="w-6 h-6 text-florence-700 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal-900">
                  Зона доставки
                </h4>
                <p className="text-xs text-charcoal-600 font-light mt-1">
                  Доставляем по всему Душанбе и пригороду (Вахдат, Гиссар по согласованию).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-florence-700 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal-900">
                  Анонимная доставка
                </h4>
                <p className="text-xs text-charcoal-600 font-light mt-1">
                  Сохраним инкогнито отправителя, если вы хотите сделать сюрприз.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Gift className="w-6 h-6 text-florence-700 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal-900">
                  Комплимент к букету
                </h4>
                <p className="text-xs text-charcoal-600 font-light mt-1">
                  В комплекте: фирменная открытка с вашим текстом, пакетик Chrysal и инструкция.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
