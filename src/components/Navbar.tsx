import React, { useState } from 'react';
import { ShoppingBag, Phone, MapPin, Search, Menu, X, Heart } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { STORE_INFO } from '../data/products';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  favoritesCount: number;
  onSearchChange: (query: string) => void;
  searchQuery: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  favoritesCount,
  onSearchChange,
  searchQuery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream-50/95 backdrop-blur-md border-b border-cream-200 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-florence-900 text-cream-50 text-xs py-2 px-4 tracking-wider uppercase">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center space-x-6 text-[11px] text-cream-200">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              Душанбе, ул. Мирзо Турсунзаде, 11
            </span>
            <span className="text-cream-400">|</span>
            <span>Ежедневно 09:00 — 23:00</span>
          </div>

          <div className="w-full md:w-auto text-center font-medium tracking-luxury text-[11px] sm:text-xs text-gold-400">
            Доставка по Душанбе за 60 минут • Фото букета перед отправкой
          </div>

          <div className="hidden lg:flex items-center space-x-4 text-[11px]">
            <a
              href={`tel:${STORE_INFO.phoneClean}`}
              className="flex items-center gap-1.5 text-cream-100 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              {STORE_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-24">
          {/* Mobile Menu & Search Buttons */}
          <div className="flex items-center lg:hidden flex-shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-charcoal-800 hover:text-florence-800 focus:outline-none"
              aria-label="Открыть меню"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-1.5 text-charcoal-800 hover:text-florence-800"
              aria-label="Поиск"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Desktop Left Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-medium uppercase tracking-wider text-charcoal-700">
            <a href="#catalog" className="hover:text-florence-700 transition-colors py-2 relative group">
              Каталог
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-florence-700 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#occasions" className="hover:text-florence-700 transition-colors py-2 relative group">
              Поводы
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-florence-700 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="hover:text-florence-700 transition-colors py-2 relative group">
              О бутике
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-florence-700 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#delivery" className="hover:text-florence-700 transition-colors py-2 relative group">
              Доставка
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-florence-700 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Center Brand Logo */}
          <div className="flex-1 lg:flex-none text-center px-1 min-w-0">
            <a href="#" className="inline-block group">
              <span className="font-brand text-xl sm:text-3xl lg:text-4xl font-normal tracking-[0.16em] sm:tracking-[0.24em] text-florence-900 group-hover:text-florence-700 transition-colors block truncate">
                FLORENCE
              </span>
              <span className="block text-[8px] sm:text-[10px] tracking-[0.22em] sm:tracking-[0.38em] uppercase text-charcoal-500 font-sans">
                DUSHANBE • FLEURS
              </span>
            </a>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-1 sm:space-x-5 flex-shrink-0">
            {/* Search Toggle (Desktop) */}
            <div className="hidden lg:block relative">
              {showSearch ? (
                <div className="flex items-center bg-white border border-cream-200 rounded-full px-3 py-1.5 shadow-sm">
                  <Search className="w-4 h-4 text-charcoal-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Найти букет..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-40 text-xs bg-transparent focus:outline-none text-charcoal-800"
                    autoFocus
                  />
                  <button onClick={() => setShowSearch(false)} className="text-charcoal-400 hover:text-charcoal-700 ml-1">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className="p-2 text-charcoal-700 hover:text-florence-700 transition-colors"
                  title="Поиск букета"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Instagram Link */}
            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:px-3 sm:py-1.5 text-xs text-florence-800 hover:text-florence-600 bg-florence-50 hover:bg-florence-100 border border-florence-200/60 rounded-full transition-all shadow-xs flex items-center gap-1.5"
              title="Перейти в Instagram Florence"
            >
              <InstagramIcon className="w-4 h-4 text-florence-700" />
              <span className="hidden sm:inline font-medium tracking-wide">@florence.dushanbe</span>
            </a>

            {/* Favorites Icon */}
            {favoritesCount > 0 && (
              <a
                href="#catalog"
                className="relative p-1.5 sm:p-2 text-charcoal-700 hover:text-rose-600 transition-colors"
                title="Избранные букеты"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-rose-500 text-rose-500" />
                <span className="absolute top-0 right-0 sm:top-1 sm:right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-rose-500 text-white rounded-full text-[9px] sm:text-[10px] flex items-center justify-center font-bold">
                  {favoritesCount}
                </span>
              </a>
            )}

            {/* Shopping Bag Drawer Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-1.5 sm:p-2 text-charcoal-800 hover:text-florence-700 transition-colors flex items-center"
              aria-label="Корзина букетов"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 bg-florence-700 text-cream-50 rounded-full text-[9px] sm:text-[11px] font-medium flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Expand */}
        {showSearch && (
          <div className="lg:hidden pb-3 pt-1">
            <div className="relative">
              <Search className="w-4 h-4 text-charcoal-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Поиск по букетам, розам, пионам..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-white border border-cream-200 rounded-lg pl-9 pr-9 py-2 text-sm text-charcoal-800 focus:outline-none focus:border-florence-600"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream-50 border-b border-cream-200 px-6 py-6 space-y-4 animate-fade-in shadow-lg">
          <div className="flex flex-col space-y-4 text-sm font-medium uppercase tracking-wider text-charcoal-800">
            <a
              href="#catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-cream-100 hover:text-florence-700"
            >
              Каталог букетов
            </a>
            <a
              href="#occasions"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-cream-100 hover:text-florence-700"
            >
              Поводы и праздники
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-cream-100 hover:text-florence-700"
            >
              О бутике Florence
            </a>
            <a
              href="#delivery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-cream-100 hover:text-florence-700"
            >
              Условия доставки по Душанбе
            </a>
            <a
              href="#contacts"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-florence-700"
            >
              Контакты и адрес
            </a>
          </div>

          <div className="pt-4 border-t border-cream-200 space-y-3 text-xs text-charcoal-600">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-florence-700 flex-shrink-0" />
              ул. Мирзо Турсунзаде, 11, Душанбе
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-florence-700 flex-shrink-0" />
              {STORE_INFO.phone}
            </p>
            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-florence-800 text-cream-50 py-3 rounded-lg font-medium text-xs tracking-wider uppercase mt-4"
            >
              <InstagramIcon className="w-4 h-4" />
              Написать в Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
