import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { STORE_INFO } from '../data/products';

export const BrandStory: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-florence-900 text-cream-50 relative overflow-hidden max-w-full">
      {/* Background delicate glow */}
      <div className="absolute top-1/2 left-0 -translate-x-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-florence-700/30 blur-3xl pointer-events-none max-w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Photo Collage */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden border border-florence-700/50 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=85"
                  alt="Флорист Florence Dushanbe за созданием букета"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Inset Badge */}
              <div className="absolute -bottom-6 -right-6 hidden sm:block bg-cream-50 text-charcoal-900 p-5 rounded-lg border border-cream-200 shadow-xl max-w-xs">
                <span className="text-[10px] uppercase tracking-luxury text-florence-700 font-semibold block mb-1">
                  Философия Florence
                </span>
                <p className="font-serif text-sm italic font-normal leading-snug">
                  «Каждый букет создается так, будто предназначается самому дорогому человеку на свете.»
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Store Details */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-wider-luxury text-gold-400 font-medium block mb-3">
                О цветочном доме Florence
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-cream-50 leading-[1.15]">
                Европейские традиции флористики в сердце Душанбе
              </h2>
            </div>

            <p className="text-sm sm:text-base text-cream-200/90 font-light leading-relaxed">
              Florence — это не просто салон цветов, а пространство эстетики и вдохновения. Мы объединяем изысканный европейский подход к флористике, бережно отобранные сорта роз из Эквадора и пионов из Голландии с искренним восточным гостеприимством Таджикистана.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="border-l-2 border-gold-500 pl-4 space-y-1">
                <h4 className="font-serif text-lg text-cream-50 font-normal">Прямые поставки</h4>
                <p className="text-xs text-cream-300 font-light leading-relaxed">
                  Мы получаем свежие цветы регулярными авиарейсами из лучших питомников Европы и Южной Америки.
                </p>
              </div>

              <div className="border-l-2 border-gold-500 pl-4 space-y-1">
                <h4 className="font-serif text-lg text-cream-50 font-normal">Индивидуальный почерк</h4>
                <p className="text-xs text-cream-300 font-light leading-relaxed">
                  Каждая композиция собирается по авторской концепции — от деликатной упаковки до оттенка шелковой ленты.
                </p>
              </div>
            </div>

            {/* Address & Working Hours Card */}
            <div className="bg-florence-800/80 border border-florence-700/60 rounded-xl p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-florence-700/40 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-florence-700 flex items-center justify-center text-gold-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-luxury text-gold-400 block font-medium">
                      Наш бутик в Душанбе
                    </span>
                    <span className="text-sm font-medium text-cream-50">
                      {STORE_INFO.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-florence-700 flex items-center justify-center text-gold-400 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-luxury text-gold-400 block font-medium">
                      Часы работы
                    </span>
                    <span className="text-sm font-medium text-cream-50">
                      {STORE_INFO.hours}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
                <a
                  href={`tel:${STORE_INFO.phoneClean}`}
                  className="flex items-center gap-2 text-xs text-cream-100 hover:text-gold-400 transition-colors font-medium"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Телефон: {STORE_INFO.phone}</span>
                </a>

                <a
                  href={STORE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury font-medium text-gold-400 hover:text-gold-300 transition-colors group"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Подписаться на @{STORE_INFO.instagram}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
