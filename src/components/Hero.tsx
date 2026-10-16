import React from 'react';
import { ArrowRight, Sparkles, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-cream-50 pt-4 pb-10 sm:pt-8 sm:pb-20">
      {/* Delicate background blur */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-80 h-80 rounded-full bg-florence-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-28 -mb-28 w-72 h-72 rounded-full bg-gold-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left z-10">
            {/* Tagline pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-florence-100/80 border border-florence-200/70 text-florence-800 text-[10px] sm:text-xs tracking-luxury uppercase font-medium">
              <Sparkles className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
              <span>Премиальная флористика в Душанбе</span>
            </div>

            {/* Editorial Heading */}
            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-florence-900 tracking-tight leading-[1.15]">
                Цветы, которые <br />
                <span className="italic font-normal text-florence-700">говорят за вас</span>
              </h1>
              <p className="text-xs sm:text-base text-charcoal-700 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed px-1">
                Авторские букеты, французские садовые розы и сезонные пионы с бережной доставкой по Душанбе за 60 минут.
              </p>
            </div>

            {/* Call to Actions (Mobile optimized 48px height) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 pt-1">
              <a
                href="#catalog"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-florence-800 active:bg-florence-900 text-cream-50 text-xs uppercase tracking-luxury font-medium rounded-xl transition-all shadow-md active:scale-98 group"
              >
                <span>Смотреть букеты</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-cream-100 text-florence-900 border border-cream-300 text-xs uppercase tracking-luxury font-medium rounded-xl transition-all active:scale-98"
              >
                <span>Написать флористу</span>
              </a>
            </div>

            {/* Mini Trust Note */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-4 text-[11px] text-charcoal-500">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span>Доставка сегодня от 60 мин</span>
              </div>
              <span className="text-cream-300">•</span>
              <div>Фото перед выездом</div>
            </div>
          </div>

          {/* Right Column: Editorial Hero Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Image */}
              <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-cream-200">
                <img
                  src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=85"
                  alt="Букет французских роз White O'Hara Florence Dushanbe"
                  className="w-full h-full object-cover object-center"
                />

                {/* Floating Badge */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-cream-200 text-right shadow-sm">
                  <span className="text-[9px] tracking-wider uppercase text-charcoal-500 block font-semibold">Хит сезона</span>
                  <span className="font-serif text-xs font-semibold text-florence-900">White O’Hara Romance</span>
                </div>

                {/* Bottom Overlay Gradient */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-florence-950/85 via-florence-950/30 to-transparent p-4 sm:p-6 text-cream-50 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] tracking-luxury uppercase text-gold-400 font-semibold">Florence Dushanbe</p>
                    <p className="font-serif text-base sm:text-xl font-light">Французская эстетика</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-cream-300 block">Демо-цена</span>
                    <span className="font-serif text-base sm:text-lg font-bold text-cream-50">680 сомони</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Value Propositions Strip (Mobile 2x2 grid with rounded surfaces) */}
        <div className="mt-8 sm:mt-14 pt-6 border-t border-cream-200 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-left">
          <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-cream-200/80 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-florence-50 flex items-center justify-center text-florence-800 flex-shrink-0">
              <Clock className="w-4 h-4 text-florence-700" />
            </div>
            <div>
              <h4 className="text-[11px] font-bold text-charcoal-900 leading-tight">60 минут</h4>
              <p className="text-[10px] text-charcoal-500">Доставка по Душанбе</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-cream-200/80 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-florence-50 flex items-center justify-center text-florence-800 flex-shrink-0">
              <ShieldCheck className="w-4 h-4 text-florence-700" />
            </div>
            <div>
              <h4 className="text-[11px] font-bold text-charcoal-900 leading-tight">Фотоотчет</h4>
              <p className="text-[10px] text-charcoal-500">Согласуем до выезда</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-cream-200/80 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-florence-50 flex items-center justify-center text-florence-800 flex-shrink-0">
              <Sparkles className="w-4 h-4 text-florence-700" />
            </div>
            <div>
              <h4 className="text-[11px] font-bold text-charcoal-900 leading-tight">Свежесть</h4>
              <p className="text-[10px] text-charcoal-500">Прямые авиапоставки</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-cream-200/80 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-florence-50 flex items-center justify-center text-florence-800 flex-shrink-0">
              <HeartHandshake className="w-4 h-4 text-florence-700" />
            </div>
            <div>
              <h4 className="text-[11px] font-bold text-charcoal-900 leading-tight">Открытка</h4>
              <p className="text-[10px] text-charcoal-500">С вашим текстом в подарок</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
