import React, { useState, useMemo } from 'react';
import { Product, CATEGORIES } from '../data/products';
import { Heart, ShoppingBag, SlidersHorizontal, Info, Sparkles, LayoutGrid, Square } from 'lucide-react';
import { getOptimizedImageUrl } from '../utils/image';

interface CatalogProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, sizeName?: string) => void;
  favorites: string[];
  onToggleFavorite: (productId: string) => void;
  selectedOccasion: string | null;
  onClearOccasion: () => void;
  searchQuery: string;
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
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
  activeCategory: propActiveCategory,
  onSelectCategory,
}) => {
  const [localCategory, setLocalCategory] = useState<string>('all');
  const activeCategory = propActiveCategory !== undefined ? propActiveCategory : localCategory;

  const handleCategoryChange = (catId: string) => {
    setLocalCategory(catId);
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
  };

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
    <section id="catalog" className="py-8 sm:py-20 bg-cream-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header & Title */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200/60 text-charcoal-700 text-[10px] sm:text-xs uppercase tracking-luxury mb-2 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Коллекция букетов 2026</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-5xl text-florence-900 font-light tracking-tight">
            Каталог букетов & композиций
          </h2>
          <div className="w-12 sm:w-16 h-0.5 bg-florence-700 mx-auto mt-2 sm:mt-3 mb-2 sm:mb-3" />
          <p className="text-[11px] sm:text-sm text-charcoal-600 font-light max-w-xl mx-auto px-2">
            Каждый букет создается вручную флористами Florence из свежих цветов премиального импорта.
          </p>

          {/* Prototype Price Disclaimer Notice */}
          <div className="mt-2.5 mx-1 inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200/70 rounded-full text-amber-900 text-[10px] sm:text-[11px]">
            <Info className="w-3.5 h-3.5 flex-shrink-0 text-amber-700" />
            <span>Демонстрационный прототип для Jomi Studio • Цены иллюстративные (TJS)</span>
          </div>
        </div>

        {/* Occasion Active Indicator */}
        {selectedOccasion && (
          <div className="mb-4 sm:mb-6 p-2.5 sm:p-3 bg-florence-50 border border-florence-200 rounded-xl flex items-center justify-between text-xs animate-fade-in">
            <span className="text-florence-900 font-medium text-[11px] sm:text-xs">
              Показана подборка для выбранного повода
            </span>
            <button
              onClick={onClearOccasion}
              className="text-florence-800 underline font-semibold hover:text-florence-950 ml-2 text-xs"
            >
              Сбросить
            </button>
          </div>
        )}

        {/* Filter & Sorting Controls */}
        <div className="flex flex-col gap-2.5 sm:gap-3 pb-4 sm:pb-6 border-b border-cream-200">
          
          {/* Category Horizontal Scroll Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none overscroll-x-contain -mx-3 px-3 sm:mx-0 sm:px-0">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`min-h-[38px] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all active:scale-95 flex-shrink-0 ${
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
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] sm:text-xs text-charcoal-500 font-light">
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
            <div className="flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-charcoal-400 hidden sm:inline" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-cream-200 rounded-lg px-2 py-1 sm:px-2.5 sm:py-1.5 text-[11px] sm:text-xs text-charcoal-800 focus:outline-none focus:border-florence-700 font-medium"
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
          <div className="text-center py-12 sm:py-16 bg-white rounded-2xl border border-cream-200 my-6">
            <p className="font-serif text-lg sm:text-xl text-charcoal-700">Букеты не найдены</p>
            <p className="text-xs text-charcoal-500 mt-1">Попробуйте изменить категорию или поисковый запрос</p>
            <button
              onClick={() => {
                handleCategoryChange('all');
                onClearOccasion();
              }}
              className="mt-3 px-4 py-2 bg-florence-800 text-cream-50 rounded-xl text-xs uppercase tracking-wider font-medium"
            >
              Показать все
            </button>
          </div>
        ) : (
          <div
            className={`pt-4 sm:pt-6 ${
              mobileLayout === 'grid'
                ? 'grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-6 lg:gap-8'
                : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'
            }`}
          >
            {filteredProducts.map((product) => {
              const isFav = favorites.includes(product.id);

              return (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-cream-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col cursor-pointer active:scale-[0.985]"
                >
                  {/* Image Container: Compact aspect-square on mobile 2-col, aspect-[4/5] on desktop */}
                  <div className={`relative ${mobileLayout === 'grid' ? 'aspect-square sm:aspect-[4/5]' : 'aspect-[4/5]'} bg-cream-100 overflow-hidden`}>
                    <img
                      src={getOptimizedImageUrl(product.images[0], 440, 68)}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.fallback) {
                          target.dataset.fallback = 'true';
                          target.src = 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=440&q=68';
                        }
                      }}
                    />

                    {/* Subtle Outline */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />

                    {/* Badges Overlay */}
                    <div className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 flex flex-col gap-1 z-10">
                      {product.isBestseller && (
                        <span className="px-1.5 py-0.5 rounded-full bg-florence-900/90 text-cream-50 text-[8px] sm:text-[10px] font-semibold tracking-wider uppercase backdrop-blur-xs shadow-xs">
                          Хит
                        </span>
                      )}
                      {product.isSeasonal && (
                        <span className="px-1.5 py-0.5 rounded-full bg-gold-600/90 text-cream-50 text-[8px] sm:text-[10px] font-semibold tracking-wider uppercase backdrop-blur-xs shadow-xs">
                          Сезон
                        </span>
                      )}
                      {product.isNew && (
                        <span className="px-1.5 py-0.5 rounded-full bg-emerald-700/90 text-cream-50 text-[8px] sm:text-[10px] font-semibold tracking-wider uppercase backdrop-blur-xs shadow-xs">
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
                      className="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-charcoal-700 shadow-sm flex items-center justify-center transition-transform active:scale-90 z-10"
                      aria-label="В избранное"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                          isFav ? 'fill-rose-500 text-rose-500' : 'text-charcoal-700'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Card Content Details: Compact and elegant on phone */}
                  <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[9px] sm:text-[11px] text-charcoal-500 uppercase tracking-luxury font-medium mb-0.5">
                        <span className="truncate">{product.categoryLabel}</span>
                        <span className="text-florence-700 font-semibold flex-shrink-0">60 мин</span>
                      </div>

                      <h3 className="font-serif text-xs sm:text-base lg:text-lg font-normal text-florence-900 group-hover:text-florence-700 transition-colors leading-tight line-clamp-1">
                        {product.name}
                      </h3>

                      <p className="text-[11px] sm:text-xs text-charcoal-500 font-light mt-0.5 line-clamp-2 leading-relaxed hidden sm:block">
                        {product.shortDescription}
                      </p>
                    </div>

                    {/* Price and Cart Quick Button */}
                    <div className="mt-2 pt-2 border-t border-cream-100 flex items-center justify-between">
                      <div>
                        <span className="font-serif text-sm sm:text-xl font-bold text-florence-900 block leading-tight">
                          {product.price} <span className="text-[10px] sm:text-xs font-sans font-normal text-charcoal-700">TJS</span>
                        </span>
                        {product.originalPrice && (
                          <span className="text-[9px] text-charcoal-400 line-through">
                            {product.originalPrice} TJS
                          </span>
                        )}
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart(product);
                        }}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-cream-100 hover:bg-florence-800 hover:text-cream-50 text-florence-900 flex items-center justify-center transition-all active:scale-90 border border-cream-200"
                        title="Добавить в корзину"
                        aria-label={`Добавить ${product.name} в корзину`}
                      >
                        <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
