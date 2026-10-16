import React from 'react';
import { ShoppingBag, Flower2, CalendarHeart, MessageCircle } from 'lucide-react';
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
    <nav className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-cream-200/90 px-2 py-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-[calc(0.4rem+env(safe-area-inset-bottom,0px))] w-full max-w-full">
      <div className="max-w-md mx-auto grid grid-cols-4 gap-1 items-center">
        
        {/* Catalog */}
        <a
          href="#catalog"
          className="flex flex-col items-center justify-center py-1.5 px-1 text-charcoal-700 hover:text-florence-800 active:scale-95 transition-transform"
        >
          <Flower2 className="w-5 h-5 text-florence-800" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5 text-charcoal-800">Каталог</span>
        </a>

        {/* Occasions */}
        <a
          href="#occasions"
          className="flex flex-col items-center justify-center py-1.5 px-1 text-charcoal-700 hover:text-florence-800 active:scale-95 transition-transform"
        >
          <CalendarHeart className="w-5 h-5 text-charcoal-600" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5 text-charcoal-800">Поводы</span>
        </a>

        {/* Concierge Florist */}
        <a
          href={`${STORE_INFO.whatsappUrl}${encodeURIComponent('Здравствуйте, Florence Dushanbe! Хочу проконсультироваться с флористом по поводу букета.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 text-charcoal-700 hover:text-florence-800 active:scale-95 transition-transform relative"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 text-florence-800" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white"></span>
          </div>
          <span className="text-[10px] font-medium tracking-tight mt-0.5 text-charcoal-800">Консьерж</span>
        </a>

        {/* Cart Drawer Trigger */}
        <button
          onClick={onOpenCart}
          className="relative flex flex-col items-center justify-center py-1.5 px-1 text-charcoal-700 hover:text-florence-800 active:scale-95 transition-transform"
          aria-label="Корзина"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-charcoal-800" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 min-w-[18px] h-[18px] px-1 bg-florence-800 text-cream-50 rounded-full text-[10px] font-bold flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-medium tracking-tight mt-0.5 text-charcoal-800">Корзина</span>
        </button>

      </div>
    </nav>
  );
};
