import React, { useState, useMemo } from 'react';
import { Product, CATEGORIES } from '../data/products';
import { Heart, ShoppingBag, SlidersHorizontal, Info, Sparkles, LayoutGrid, Square } from 'lucide-react';

interface CatalogProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, sizeName?: string) => void;
  favorites: string[];
  onToggleFavorite: (productId: string) => void;
  selectedOccasion: string | null;
  onClearOccasion: () => void;
  searchQuery: string;
}

export const Catalog: React.FC<CatalogProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  favorites,
  onToggleFavorite,
  selectedOccasion,
  onClearOccasion,
  searchQuery,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  // Mobile layout mode: 'grid' (2 columns) or 'feed' (1 column magazine view)
  const [mobileLayout, setMobileLayout] = useState<'grid' | 'feed'>('grid');

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (activeCategory !== 'all' && product.category !== activeCategory) {
          return false;
        }
        if (selectedOccasion && !product.occasion.includes(selectedOccasion)) {
          return false;
        }
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          const matchName = product.name.toLowerCase().includes(q);
          const matchDesc = product.shortDescription.toLowerCase().includes(q);
          const matchComp = product.composition.some((c) => c.toLowerCase().includes(q));
          return matchName || matchDesc || matchComp;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
      });
  }, [products, activeCategory, selectedOccasion, searchQuery, sortBy]);

  return (
    <section id="catalog" className="py-12 sm:py-24 bg-cream-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header & Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200/60 text-charcoal-700 text-[10px] sm:text-xs uppercase tracking-luxury mb-2.5 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Коллекция букетов 2026</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-florence-900 font-light tracking-tight">
            Каталог букетов & композиций
          </h2>
          <div className="w-16 h-0.5 bg-florence-700 mx-auto mt-3 mb-3" />
          <p className="text-xs sm:text-sm text-charcoal-600 font-light max-w-xl mx-auto px-4">
            Каждый букет создается вручную флористами Florence из свежих цветов премиального импорта.
          </p>

          {/* Prototype Price Disclaimer Notice */}
          <div className="mt-3.5 mx-2 inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200/70 rounded-full text-amber-900 text-[10px] sm:text-[11px]">
            <Info className="w-3.5 h-3.5 flex-shrink-0 text-amber-700" />
            <span>Демонстрационный прототип для Jomi Studio • Цены иллюстративные (TJS)</span>
          </div>
        </div>

        {/* Occasion Active Indicator */}
        {selectedOccasion && (
          <div className="mb-6 p-3 bg-florence-50 border border-florence-200 rounded-xl flex items-center justify-between text-xs">
            <span className="text-florence-900 font-medium">
              Показана подборка для выбранного повода
            </span>
            <button
              onClick={onClearOccasion}
              className="text-florence-800 underline font-semibold hover:text-florence-950 ml-2"
            >
              Сбросить
            </button>
          </div>
        )}

        {/* Filter & Sorting Controls */}
        <div className="flex flex-col gap-3 pb-6 border-b border-cream-200">
          
          {/* Category Horizontal Scroll Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none overscroll-x-contain -mx-3 px-3 sm:mx-0 sm:px-0">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`min-h-[40px] px-4 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all active:scale-95 flex-shrink-0 ${
                    isActive
                      ? 'bg-florence-800 text-cream-50 shadow-sm font-semibold'
                      : 'bg-white hover:bg-cream-100 text-charcoal-700 border border-cream-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Sub-bar: Layout Switcher & Sort for Mobile */}
          <div className="flex items-center justify-between pt-1">
            {/* Results Count & Mobile View Toggle */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-charcoal-500 font-light">
                {filteredProducts.length} букетов
              </span>

              {/* Mobile 2-col vs 1-col Toggle */}
              <div className="flex items-center sm:hidden bg-cream-100 p-0.5 rounded-lg border border-cream-200">
                <button
                  onClick={() => setMobileLayout('grid')}
                  className={`p-1.5 rounded-md ${
                    mobileLayout === 'grid' ? 'bg-white text-florence-900 shadow-xs' : 'text-charcoal-400'
                  }`}
                  aria-label="Сетка 2 колонки"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setMobileLayout('feed')}
                  className={`p-1.5 rounded-md ${
                    mobileLayout === 'feed' ? 'bg-white text-florence-900 shadow-xs' : 'text-charcoal-400'
                  }`}
                  aria-label="Крупный вид"
                >
                  <Square className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-charcoal-400 hidden sm:inline" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-cream-200 rounded-lg px-2.5 py-1.5 text-xs text-charcoal-800 focus:outline-none focus:border-florence-700 font-medium"
              >
                <option value="featured">Популярные</option>
                <option value="price-asc">Сначала недорогие</option>
                <option value="price-desc">Сначала премиум</option>
              </select>
            </div>
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-cream-200 my-8">
            <p className="font-serif text-xl text-charcoal-700">Букеты не найдены</p>
            <p className="text-xs text-charcoal-500 mt-1">Попробуйте изменить категорию или поисковый запрос</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                onClearOccasion();
              }}
              className="mt-4 px-5 py-2.5 bg-florence-800 text-cream-50 rounded-xl text-xs uppercase tracking-wider font-medium"
            >
              Показать все
            </button>
          </div>
        ) : (
          <div
            className={`pt-6 ${
              mobileLayout === 'grid'
                ? 'grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8'
                : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            }`}
          >
            {filteredProducts.map((product) => {
              const isFav = favorites.includes(product.id);

              return (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-cream-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer active:scale-[0.985]"
                >
                  {/* Image Container with Inset Outline (better-ui principle) */}
                  <div className="relative aspect-[4/5] bg-cream-100 overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Subtle Outline */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />

                    {/* Badges Overlay */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1 z-10">
                      {product.isBestseller && (
                        <span className="px-2 py-0.5 rounded-full bg-florence-900/90 text-cream-50 text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase backdrop-blur-xs shadow-xs">
                          Хит
                        </span>
                      )}
                      {product.isSeasonal && (
                        <span className="px-2 py-0.5 rounded-full bg-gold-600/90 text-cream-50 text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase backdrop-blur-xs shadow-xs">
                          Сезон
                        </span>
                      )}
                      {product.isNew && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-700/90 text-cream-50 text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase backdrop-blur-xs shadow-xs">
                          New
                        </span>
                      )}
                    </div>

                    {/* Favorite Heart (Touch Target min 44px) */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(product.id);
                      }}
                      className="absolute top-2 right-2 sm:top-3 sm:right-3 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-charcoal-700 shadow-md flex items-center justify-center transition-transform active:scale-90 z-10"
                      aria-label="В избранное"
                    >
                      <Heart
                        className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${
                          isFav ? 'fill-rose-500 text-rose-500' : 'text-charcoal-700'
                        }`}
                      />
                    </button>

                    {/* Quick View Pill (Always visible touch hint on mobile, hover on desktop) */}
                    <div className="absolute inset-x-2 bottom-2 sm:hidden">
                      <div className="py-1.5 px-2 bg-white/95 backdrop-blur-sm rounded-lg text-center text-[10px] font-semibold uppercase tracking-wider text-florence-900 shadow-sm border border-cream-200">
                        Подробнее
                      </div>
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-charcoal-500 uppercase tracking-luxury font-medium mb-1">
                        <span className="truncate">{product.categoryLabel}</span>
                        <span className="text-florence-700 font-semibold flex-shrink-0">60 мин</span>
                      </div>

                      <h3 className="font-serif text-sm sm:text-lg lg:text-xl font-normal text-florence-900 group-hover:text-florence-700 transition-colors leading-snug line-clamp-1">
                        {product.name}
                      </h3>

                      <p className="text-[11px] sm:text-xs text-charcoal-500 font-light mt-0.5 line-clamp-2 leading-relaxed hidden sm:block">
                        {product.shortDescription}
                      </p>
                    </div>

                    {/* Price and Action Bar */}
                    <div className="mt-2.5 sm:mt-4 pt-2.5 sm:pt-3 border-t border-cream-100 flex items-center justify-between">
                      <div>
                        <span className="font-serif text-base sm:text-2xl font-bold text-florence-900 block leading-tight">
                          {product.price} <span className="text-xs sm:text-sm font-sans font-normal text-charcoal-700">TJS</span>
                        </span>
                        {product.originalPrice && (
                          <span className="text-[10px] text-charcoal-400 line-through">
                            {product.originalPrice} TJS
                          </span>
                        )}
                      </div>

                      {/* Add to Cart Quick Button (Min 40px touch target) */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart(product);
                        }}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-florence-50 hover:bg-florence-700 text-florence-800 hover:text-cream-50 flex items-center justify-center border border-florence-200 active:scale-90 transition-all shadow-xs"
                        aria-label="В корзину"
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
