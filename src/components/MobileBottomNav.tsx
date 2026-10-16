import React from 'react';
import { ShoppingBag, Flower2, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { STORE_INFO } from '../data/products';

interface MobileBottomNavProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  cartCount,
  onOpenCart,
}) => {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-cream-200 px-2 py-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-[calc(0.4rem+env(safe-area-inset-bottom,0px))]">
      <div className="max-w-md mx-auto grid grid-cols-5 gap-1 items-center">
        
        {/* Catalog */}
        <a
          href="#catalog"
          className="flex flex-col items-center justify-center py-1 px-1 text-charcoal-700 hover:text-florence-800 active:scale-95 transition-transform"
        >
          <Flower2 className="w-5 h-5" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">Букеты</span>
        </a>

        {/* Occasions */}
        <a
          href="#occasions"
          className="flex flex-col items-center justify-center py-1 px-1 text-charcoal-700 hover:text-florence-800 active:scale-95 transition-transform"
        >
          <Sparkles className="w-5 h-5 text-gold-600" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">Поводы</span>
        </a>

        {/* WhatsApp Florist (Highlight Center Button) */}
        <a
          href={`${STORE_INFO.whatsappUrl}${encodeURIComponent('Здравствуйте, Florence Dushanbe! Хочу проконсультироваться с флористом по поводу букета.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center -mt-3.5 group"
        >
          <div className="w-12 h-12 rounded-full bg-emerald-700 text-white flex items-center justify-center shadow-lg group-active:scale-90 transition-transform border-2 border-white">
            <MessageCircle className="w-6 h-6 fill-white text-emerald-700" />
          </div>
          <span className="text-[10px] font-semibold text-emerald-800 tracking-tight mt-0.5">Чат</span>
        </a>

        {/* Phone Call */}
        <a
          href={`tel:${STORE_INFO.phoneClean}`}
          className="flex flex-col items-center justify-center py-1 px-1 text-charcoal-700 hover:text-florence-800 active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">Звонок</span>
        </a>

        {/* Cart Drawer Trigger */}
        <button
          onClick={onOpenCart}
          className="relative flex flex-col items-center justify-center py-1 px-1 text-charcoal-700 hover:text-florence-800 active:scale-95 transition-transform"
          aria-label="Корзина"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 min-w-[18px] h-[18px] px-1 bg-florence-800 text-cream-50 rounded-full text-[10px] font-bold flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-medium tracking-tight mt-0.5">Корзина</span>
        </button>

      </div>
    </nav>
  );
};
