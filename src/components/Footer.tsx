import { MapPin, Phone, Send } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { STORE_INFO } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer id="contacts" className="bg-florence-950 text-cream-50 pt-16 pb-12 border-t border-florence-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-florence-800/60">
          
          {/* Col 1: Brand Wordmark (lg:span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="inline-block">
              <span className="font-brand text-2xl sm:text-3xl tracking-[0.24em] text-cream-50 block">
                FLORENCE
              </span>
              <span className="block text-[9px] tracking-[0.38em] uppercase text-gold-400 font-sans mt-0.5">
                DUSHANBE • FLEURS & CADEAUX
              </span>
            </a>
            <p className="text-xs text-cream-300/80 font-light leading-relaxed max-w-sm">
              Премиальный дом флористики в Душанбе. Авторские букеты, французские садовые розы и цветочные композиции с бережной курьерской доставкой.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-florence-800 hover:bg-florence-700 flex items-center justify-center text-gold-400 transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`tel:${STORE_INFO.phoneClean}`}
                className="w-9 h-9 rounded-full bg-florence-800 hover:bg-florence-700 flex items-center justify-center text-gold-400 transition-colors"
                title="Позвонить"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={STORE_INFO.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-florence-800 hover:bg-florence-700 flex items-center justify-center text-gold-400 transition-colors"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (lg:span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] uppercase tracking-luxury text-gold-400 font-semibold">
              Коллекции
            </h4>
            <ul className="space-y-2 text-xs text-cream-200/90 font-light">
              <li><a href="#catalog" className="hover:text-cream-50 transition-colors">Все букеты</a></li>
              <li><a href="#catalog" className="hover:text-cream-50 transition-colors">Французские розы</a></li>
              <li><a href="#catalog" className="hover:text-cream-50 transition-colors">Сезонные пионы</a></li>
              <li><a href="#catalog" className="hover:text-cream-50 transition-colors">Шляпные коробки</a></li>
              <li><a href="#catalog" className="hover:text-cream-50 transition-colors">Подарочные сеты</a></li>
            </ul>
          </div>

          {/* Col 3: Occasions (lg:span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] uppercase tracking-luxury text-gold-400 font-semibold">
              Поводы
            </h4>
            <ul className="space-y-2 text-xs text-cream-200/90 font-light">
              <li><a href="#occasions" className="hover:text-cream-50 transition-colors">День рождения</a></li>
              <li><a href="#occasions" className="hover:text-cream-50 transition-colors">Романтика & Свидание</a></li>
              <li><a href="#occasions" className="hover:text-cream-50 transition-colors">Свадебная флористика</a></li>
              <li><a href="#occasions" className="hover:text-cream-50 transition-colors">Юбилей & Торжество</a></li>
              <li><a href="#occasions" className="hover:text-cream-50 transition-colors">Бизнес-букеты</a></li>
            </ul>
          </div>

          {/* Col 4: Store Contacts (lg:span 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-[11px] uppercase tracking-luxury text-gold-400 font-semibold">
              Бутик в Душанбе
            </h4>
            <div className="space-y-2.5 text-xs text-cream-200/90 font-light">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span>{STORE_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href={`tel:${STORE_INFO.phoneClean}`} className="hover:text-gold-400 transition-colors">
                  {STORE_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a
                  href={STORE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors"
                >
                  @{STORE_INFO.instagram}
                </a>
              </p>
              <p className="text-[11px] text-cream-400 pt-1">
                Часы работы: {STORE_INFO.hours}
              </p>
            </div>
          </div>

        </div>

        {/* Prototype Pitch Disclaimer & Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-cream-400 font-light">
          <div>
            © {new Date().getFullYear()} Florence Dushanbe. Все права защищены.
          </div>

          <div className="flex items-center gap-1.5 text-center text-gold-400/90">
            <span>Интерактивный концепт-прототип разработан</span>
            <span className="font-semibold text-cream-50 tracking-wider">JOMI STUDIO</span>
          </div>

          <div className="text-center md:text-right text-[10px] text-cream-500">
            Презентационная демо-версия для согласования дизайна
          </div>
        </div>

      </div>
    </footer>
  );
};
