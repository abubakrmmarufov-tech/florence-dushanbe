import React from 'react';
import { ArrowRight, Sparkles, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import { STORE_INFO } from '../data/products';
import { getOptimizedImageUrl } from '../utils/image';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden max-w-full bg-cream-50 pt-3 pb-8 sm:pt-8 sm:pb-16">
      {/* Background glow safely contained */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-florence-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-6 text-center lg:text-left z-10">
            {/* Understated Location Stamp */}
            <div className="inline-flex items-center gap-2 text-florence-800 text-[10px] sm:text-xs tracking-[0.22em] uppercase font-medium">
              <span>ДУШАНБЕ • УЛ. МИРЗО ТУРСУНЗАДЕ, 11</span>
            </div>

            {/* Editorial Heading */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-florence-900 tracking-tight leading-[1.12] text-balance">
                Авторские букеты <br />
                <span className="italic font-normal text-florence-700">с доставкой за 60 минут</span>
              </h1>
              <p className="text-xs sm:text-base text-charcoal-600 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed text-pretty">
                Свежие поставки роз O’Hara и голландских пионов. Собираем в день вручения в аквапаке с водой.
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href="#catalog"
                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-florence-800 active:bg-florence-900 text-cream-50 text-xs uppercase tracking-luxury font-medium rounded-xl transition-all shadow-sm active:scale-98 group"
              >
                <span>Выбрать букет</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={`${STORE_INFO.whatsappUrl}${encodeURIComponent('Здравствуйте, Florence Dushanbe! Хочу проконсультироваться с флористом по выбору букета.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex w-auto min-h-[46px] items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-cream-100 text-florence-900 border border-cream-300 text-xs uppercase tracking-luxury font-medium rounded-xl transition-all active:scale-98"
              >
                <span>Консультация флориста</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Hero Bouquet */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-cream-200">
                <img
                  src={getOptimizedImageUrl('https://images.unsplash.com/photo-1561181286-d3fee7d55364', 800, 75)}
                  alt="Букет французских роз White O'Hara Florence Dushanbe"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                />

                {/* Subtle, elegant caption */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-florence-950/75 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10 text-cream-50 flex items-center justify-between shadow-md">
                  <div>
                    <span className="text-[9px] uppercase tracking-luxury text-gold-300 block font-medium">Сорт недели</span>
                    <span className="font-serif text-xs sm:text-sm text-cream-50">White O’Hara Romance</span>
                  </div>
                  <span className="font-serif text-xs sm:text-sm font-semibold text-cream-50 tabular-nums">от 680 TJS</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Value Propositions Strip: Desktop clean 4-col */}
        <div className="hidden sm:block mt-12 bg-white/90 border border-cream-200/90 rounded-2xl p-5 lg:p-6 shadow-2xs">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-cream-200">
            <div className="flex items-start gap-3 sm:px-3 first:pl-0">
              <div className="w-2 h-2 rounded-full bg-florence-700 mt-1.5 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-semibold text-charcoal-900 tracking-wide uppercase">60 минут</h4>
                <p className="text-[11px] text-charcoal-600 font-light mt-0.5 leading-relaxed">
                  Доставка по г. Душанбе в климатическом аквапаке
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:px-3">
              <div className="w-2 h-2 rounded-full bg-florence-700 mt-1.5 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-semibold text-charcoal-900 tracking-wide uppercase">Фотоотчет</h4>
                <p className="text-[11px] text-charcoal-600 font-light mt-0.5 leading-relaxed">
                  Фото и видео готового букета в WhatsApp до выезда курьера
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:px-3">
              <div className="w-2 h-2 rounded-full bg-gold-600 mt-1.5 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-semibold text-charcoal-900 tracking-wide uppercase">Авиапоставки</h4>
                <p className="text-[11px] text-charcoal-600 font-light mt-0.5 leading-relaxed">
                  Прямые рейсы роз O’Hara и пионов из Европы дважды в неделю
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:px-3">
              <div className="w-2 h-2 rounded-full bg-gold-600 mt-1.5 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-semibold text-charcoal-900 tracking-wide uppercase">Комплимент</h4>
                <p className="text-[11px] text-charcoal-600 font-light mt-0.5 leading-relaxed">
                  Открытка и питательный порошок Chrysal к каждому заказу
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
