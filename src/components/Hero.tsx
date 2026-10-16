import React from 'react';
import { ArrowRight, Sparkles, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import { STORE_INFO } from '../data/products';
import { getOptimizedImageUrl } from '../utils/image';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden max-w-full bg-cream-50 pt-4 pb-10 sm:pt-8 sm:pb-20">
      {/* Delicate background blur safely contained */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-florence-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left z-10">
            {/* Architectural Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-100 border border-cream-200/90 text-florence-900 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-600"></span>
              <span>АТЕЛЬЕ ФЛОРИСТИКИ • ДУШАНБЕ</span>
            </div>

            {/* Editorial Heading */}
            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-florence-900 tracking-tight leading-[1.15] text-balance">
                Французская эстетика <br />
                <span className="italic font-normal text-florence-700">в каждом букете</span>
              </h1>
              <p className="text-xs sm:text-base text-charcoal-700 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed px-1 text-pretty">
                Прямые еженедельные авиапоставки садовых роз O’Hara и голландских пионов. Собираем авторские композиции в салоне на ул. Мирзо Турсунзаде, 11 и доставляем в аквапаке за 60 минут.
              </p>
            </div>

            {/* Call to Actions (Mobile optimized 48px height) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 pt-1">
              <a
                href="#catalog"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-florence-800 active:bg-florence-900 text-cream-50 text-xs uppercase tracking-luxury font-medium rounded-xl transition-all shadow-md active:scale-98 group"
              >
                <span>Смотреть коллекцию</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={`${STORE_INFO.whatsappUrl}${encodeURIComponent('Здравствуйте, Florence Dushanbe! Хочу проконсультироваться с флористом по выбору букета.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-cream-100 text-florence-900 border border-cream-300 text-xs uppercase tracking-luxury font-medium rounded-xl transition-all active:scale-98"
              >
                <span>Написать флористу в WhatsApp</span>
              </a>
            </div>

            {/* Quiet Boutique Fact Line */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-3 text-[11px] text-charcoal-600">
              <div className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span>Доставка по г. Душанбе от 60 мин</span>
              </div>
              <span className="text-cream-300">•</span>
              <div>Фотоотчет до выезда курьера</div>
            </div>
          </div>

          {/* Right Column: Editorial Hero Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Image */}
              <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-cream-200">
                <img
                  src={getOptimizedImageUrl('https://images.unsplash.com/photo-1561181286-d3fee7d55364', 800, 75)}
                  alt="Букет французских роз White O'Hara Florence Dushanbe"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                />

                {/* Floating Tag */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-cream-200 text-right shadow-sm">
                  <span className="text-[9px] tracking-wider uppercase text-florence-800 block font-bold">Флагманский сорт</span>
                  <span className="font-serif text-xs font-semibold text-charcoal-900">White O’Hara Romance</span>
                </div>

                {/* Bottom Overlay Gradient */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-florence-950/85 via-florence-950/30 to-transparent p-4 sm:p-6 text-cream-50 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] tracking-luxury uppercase text-gold-400 font-semibold">Florence Dushanbe</p>
                    <p className="font-serif text-base sm:text-xl font-light">Садовые розы с пьянящим ароматом</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-cream-300 block uppercase tracking-wider">От</span>
                    <span className="font-serif text-base sm:text-lg font-bold text-cream-50 tabular-nums">680 TJS</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Value Propositions Strip (Refined Atelier Manifesto) */}
        <div className="mt-8 sm:mt-12 bg-white/90 border border-cream-200/90 rounded-2xl p-4 sm:p-6 shadow-2xs">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-cream-200">
            <div className="flex items-start gap-3 pt-2 sm:pt-0 sm:px-3 first:pl-0">
              <div className="w-2 h-2 rounded-full bg-florence-700 mt-1.5 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-semibold text-charcoal-900 tracking-wide uppercase">60 минут</h4>
                <p className="text-[11px] text-charcoal-600 font-light mt-0.5 leading-relaxed">
                  Бережная доставка по г. Душанбе в климатическом аквапаке
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 sm:pt-0 sm:px-3">
              <div className="w-2 h-2 rounded-full bg-florence-700 mt-1.5 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-semibold text-charcoal-900 tracking-wide uppercase">Фотоотчет</h4>
                <p className="text-[11px] text-charcoal-600 font-light mt-0.5 leading-relaxed">
                  Видео и фото собранного букета в WhatsApp до выезда курьера
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 sm:pt-0 sm:px-3">
              <div className="w-2 h-2 rounded-full bg-gold-600 mt-1.5 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-semibold text-charcoal-900 tracking-wide uppercase">Авиапоставки</h4>
                <p className="text-[11px] text-charcoal-600 font-light mt-0.5 leading-relaxed">
                  Прямые рейсы роз O’Hara и пионов из Европы дважды в неделю
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 sm:pt-0 sm:px-3">
              <div className="w-2 h-2 rounded-full bg-gold-600 mt-1.5 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-semibold text-charcoal-900 tracking-wide uppercase">Комплимент</h4>
                <p className="text-[11px] text-charcoal-600 font-light mt-0.5 leading-relaxed">
                  Каллиграфическая открытка и питательный порошок Chrysal к каждому букету
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
