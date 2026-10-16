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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1 sm:gap-4 mb-4 sm:mb-8">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-florence-800 font-medium block mb-1">
              КАТАЛОГ БУКЕТОВ
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-florence-900 font-light tracking-tight text-balance">
              Коллекция бутика
            </h2>
          </div>
          <p className="text-xs text-charcoal-500 font-light hidden sm:block max-w-xs text-right">
            Прямые поставки роз O’Hara и пионов. Собираем в день вручения в аквапаке.
          </p>
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

        {/* Category Controls */}
        <div className="flex flex-col gap-2 pb-3 sm:pb-6 border-b border-cream-200 w-full max-w-full overflow-hidden">
          
          {/* Mobile Categories: Visual Horizontal Pills */}
          <div className="sm:hidden w-full overflow-hidden">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none overscroll-x-contain w-full py-0.5">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`min-h-[36px] px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all active:scale-95 flex-shrink-0 ${
                      isActive
                        ? 'bg-florence-800 text-cream-50 shadow-xs font-semibold'
                        : 'bg-white text-charcoal-700 border border-cream-200/90'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop Category Horizontal Scroll Pills */}
          <div className="hidden sm:flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none overscroll-x-contain w-full px-0.5">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`min-h-[38px] px-4 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all active:scale-95 flex-shrink-0 ${
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
            {filteredProducts.map((product, idx) => {
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
                      loading={idx < 4 ? 'eager' : 'lazy'}
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

                    {/* Favorite Heart */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(product.id);
                      }}
                      className="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-charcoal-700 shadow-sm flex items-center justify-center transition-transform active:scale-90 z-10"
                      aria-label="В избранное"
                    >
                      <Heart
                        className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${
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
                        <span className="font-serif text-sm sm:text-xl font-bold text-florence-900 block leading-tight tabular-nums">
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
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cream-100 hover:bg-florence-800 hover:text-cream-50 text-florence-900 flex items-center justify-center transition-all active:scale-90 border border-cream-200 shadow-2xs"
                        title="Добавить в корзину"
                        aria-label={`Добавить ${product.name} в корзину`}
                      >
                        <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
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
