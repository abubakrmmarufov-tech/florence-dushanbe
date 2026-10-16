import React, { useState, useEffect } from 'react';
import { X, Phone, ShoppingBag, Check, ShieldCheck, Clock, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { Product, STORE_INFO } from '../data/products';
import { getOptimizedImageUrl } from '../utils/image';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, sizeName: string, quantity: number) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isFavorite,
  onToggleFavorite,
}) => {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [copied, setCopied] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Safe lock background scroll on mobile without breaking momentum
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow || '';
    };
  }, []);

  const selectedSize = product.sizes[selectedSizeIndex] || product.sizes[0];
  const calculatedPrice = Math.round(product.price * (selectedSize?.priceMultiplier || 1));

  // WhatsApp order message
  const whatsappMessage = encodeURIComponent(
    `Здравствуйте, Florence Dushanbe! Хочу заказать букет «${product.name}» (Размер: ${selectedSize.label}, Количество: ${quantity} шт., Сумма: ${calculatedPrice * quantity} сомони). Подскажите, пожалуйста, доступна ли доставка в Душанбе?`
  );

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `${product.name} — бутик цветов Florence Dushanbe`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex items-end md:items-center justify-center p-0 md:p-6 animate-fade-in"
      onClick={onClose}
    >
      {/* Modal / Bottom Sheet Container */}
      <div
        className="relative bg-cream-50 w-full max-w-4xl rounded-t-3xl md:rounded-2xl shadow-2xl overflow-hidden border-t md:border border-cream-200 h-[82vh] md:h-auto md:max-h-[88vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile iOS Drag Handle Indicator */}
        <div className="md:hidden pt-2.5 pb-1 flex justify-center bg-white border-b border-cream-100 flex-shrink-0 cursor-pointer" onClick={onClose}>
          <div className="w-10 h-1 rounded-full bg-charcoal-400/50" />
        </div>

        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white text-charcoal-700 shadow-md flex items-center justify-center transition-transform active:scale-90"
          aria-label="Закрыть"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Scrollable Content Container */}
        <div className="overflow-y-auto flex-1 overscroll-contain">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Left Column: Image Gallery (Compact on Mobile, Editorial on Desktop) */}
            <div className="p-3 sm:p-6 md:p-8 bg-white flex flex-col justify-between border-b md:border-b-0 md:border-r border-cream-200">
              
              {/* Photo Box: Compact h-44 to h-52 on mobile, aspect-[4/5] on desktop */}
              <div className="relative h-44 sm:h-56 md:h-auto md:aspect-[4/5] rounded-xl overflow-hidden bg-cream-100 shadow-xs">
                <img
                  src={getOptimizedImageUrl(product.images[activeImageIndex] || product.images[0], 720, 75)}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-300"
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.fallback) {
                      target.dataset.fallback = 'true';
                      target.src = 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=720&q=75';
                    }
                  }}
                />

                {/* Favorite Heart */}
                <button
                  onClick={() => onToggleFavorite(product.id)}
                  className="absolute top-2.5 left-2.5 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-charcoal-700 shadow-md flex items-center justify-center active:scale-90 transition-transform"
                  aria-label="В избранное"
                >
                  <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isFavorite ? 'fill-rose-500 text-rose-500' : 'text-charcoal-700'}`} />
                </button>

                {/* Left/Right image arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-xs active:scale-90"
                      aria-label="Предыдущее фото"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-xs active:scale-90"
                      aria-label="Следующее фото"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </>
                )}

                {/* Mobile Dots Indicator */}
                {product.images.length > 1 && (
                  <div className="absolute bottom-2.5 inset-x-0 flex justify-center gap-1.5 md:hidden">
                    {product.images.map((_, idx) => (
                      <span
                        key={idx}
                        className={`h-1.5 rounded-full transition-all ${
                          activeImageIndex === idx ? 'w-4 bg-white' : 'w-1.5 bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Desktop Thumbnail Row */}
              {product.images.length > 1 && (
                <div className="hidden md:flex items-center gap-2 mt-3 overflow-x-auto pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-14 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                        activeImageIndex === idx ? 'border-florence-700 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={getOptimizedImageUrl(img, 140, 60)} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Delivery Assurance */}
              <div className="hidden sm:grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-cream-200 text-[11px] text-charcoal-600">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-florence-700 flex-shrink-0" />
                  <span>Доставка от 60 мин</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-florence-700 flex-shrink-0" />
                  <span>Фото перед отправкой</span>
                </div>
              </div>
            </div>

            {/* Right Column: Bouquet Information & Compact Buying Options */}
            <div className="p-3.5 sm:p-6 md:p-8 flex flex-col justify-between space-y-3.5 sm:space-y-5">
              <div>
                {/* Category & Shop Name */}
                <div className="flex items-center justify-between text-[10px] sm:text-xs uppercase tracking-luxury text-charcoal-500 mb-1">
                  <span className="font-semibold text-florence-800">{product.categoryLabel}</span>
                  <span className="text-charcoal-400">Florence Dushanbe</span>
                </div>

                {/* Title */}
                <h2 className="font-serif text-lg sm:text-2xl md:text-3xl text-florence-900 font-normal leading-tight">
                  {product.name}
                </h2>
                <p className="text-[11px] sm:text-xs text-charcoal-500 italic mt-0.5 font-light">
                  {product.subtitle}
                </p>

                {/* Price Display */}
                <div className="mt-2.5 flex items-baseline gap-2">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-florence-900">
                    {calculatedPrice * quantity} <span className="text-sm font-sans font-normal text-charcoal-700">сомони</span>
                  </span>
                  {quantity > 1 && (
                    <span className="text-[11px] text-charcoal-400">
                      ({calculatedPrice} сомони / букет)
                    </span>
                  )}
                </div>

                {/* Compact Size Selector with Explicit Prices */}
                {product.sizes && product.sizes.length > 0 && (
                  <div className="mt-3.5">
                    <label className="block text-[10px] sm:text-[11px] uppercase tracking-luxury text-charcoal-700 font-semibold mb-1.5">
                      Размер букета:
                    </label>
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                      {product.sizes.map((size, idx) => {
                        const isSelected = selectedSizeIndex === idx;
                        const sizePrice = Math.round(product.price * size.priceMultiplier);

                        return (
                          <button
                            key={size.name}
                            onClick={() => setSelectedSizeIndex(idx)}
                            className={`py-2 px-1.5 rounded-xl text-center border transition-all active:scale-95 ${
                              isSelected
                                ? 'border-florence-800 bg-florence-100 text-florence-950 shadow-xs ring-1 ring-florence-800 font-bold'
                                : 'border-cream-200 bg-white hover:border-cream-300 text-charcoal-700'
                            }`}
                          >
                            <span className="block text-[11px] font-bold leading-tight">{size.label.split('(')[0].trim()}</span>
                            <span className="block text-[9px] text-charcoal-500 mt-0.5">{size.stems}</span>
                            <span className="block text-[10px] font-semibold text-florence-800 mt-0.5">{sizePrice} TJS</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Quantity Selector */}
                <div className="mt-3 flex items-center justify-between py-1.5 border-y border-cream-200">
                  <span className="text-[11px] sm:text-xs uppercase tracking-wider text-charcoal-700 font-semibold">
                    Количество букетов:
                  </span>
                  <div className="flex items-center border border-cream-300 rounded-lg bg-white overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 flex items-center justify-center text-sm font-bold text-charcoal-700 hover:bg-cream-100 active:bg-cream-200"
                      aria-label="Уменьшить"
                    >
                      -
                    </button>
                    <span className="w-8 h-8 flex items-center justify-center text-xs font-bold text-charcoal-900 border-x border-cream-200">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center text-sm font-bold text-charcoal-700 hover:bg-cream-100 active:bg-cream-200"
                      aria-label="Увеличить"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Description & Composition */}
                <div className="mt-3 space-y-2">
                  <p className="text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
                    {product.fullDescription}
                  </p>

                  <div className="p-3 bg-white rounded-xl border border-cream-200 space-y-1.5">
                    <h4 className="text-[10px] uppercase tracking-luxury text-florence-800 font-bold">
                      Состав букета:
                    </h4>
                    <ul className="grid grid-cols-1 gap-1 text-[11px] text-charcoal-700">
                      {product.composition.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="w-3 h-3 text-florence-700 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-1.5 text-[10px] text-charcoal-500 border-t border-cream-100">
                      Габариты: {product.dimensions}
                    </div>
                  </div>
                </div>

                {/* Share / Address */}
                <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-charcoal-500 pt-2.5">
                  <span>Салон: ул. Мирзо Турсунзаде, 11</span>
                  <button
                    onClick={handleShare}
                    className="hover:text-florence-700 flex items-center gap-1 active:scale-95"
                  >
                    <Share2 className="w-3 h-3" />
                    <span>{copied ? 'Скопировано!' : 'Поделиться'}</span>
                  </button>
                </div>
              </div>

              {/* Desktop Action Buttons */}
              <div className="hidden md:block pt-3 border-t border-cream-200 space-y-2">
                <a
                  href={STORE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-florence-800 hover:bg-florence-700 text-cream-50 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all shadow-md active:scale-98"
                >
                  <InstagramIcon className="w-4 h-4 text-gold-400" />
                  <span>Заказать в Instagram @florence.dushanbe</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`${STORE_INFO.whatsappUrl}${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-semibold tracking-wide transition-all active:scale-98"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Заказать в WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      onAddToCart(product, selectedSize.name, quantity);
                      onClose();
                    }}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white hover:bg-cream-100 text-charcoal-900 border border-cream-300 rounded-xl text-xs font-semibold tracking-wide transition-all active:scale-98"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-florence-700" />
                    <span>В корзину сайта</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Mobile Sleek 1-Row Bottom Action Bar (Thumb-Friendly, Height ~54px, Never Bloats Screen) */}
        <div className="md:hidden sticky bottom-0 inset-x-0 bg-white/95 backdrop-blur-md px-3 py-2.5 border-t border-cream-200 shadow-lg flex items-center gap-2 z-30">
          <button
            onClick={() => {
              onAddToCart(product, selectedSize.name, quantity);
              onClose();
            }}
            className="flex-1 min-h-[46px] flex items-center justify-center gap-1.5 py-2.5 px-3 bg-florence-800 active:bg-florence-900 text-cream-50 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-transform active:scale-95"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-gold-400" />
            <span className="truncate">В корзину • {calculatedPrice * quantity} TJS</span>
          </button>

          <a
            href={`${STORE_INFO.whatsappUrl}${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-[46px] flex items-center justify-center bg-emerald-700 active:bg-emerald-800 text-white rounded-xl active:scale-95 transition-transform flex-shrink-0"
            title="Заказать в WhatsApp"
            aria-label="Заказать в WhatsApp"
          >
            <Phone className="w-4 h-4" />
          </a>

          <a
            href={STORE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-[46px] flex items-center justify-center bg-florence-900 active:bg-black text-gold-400 border border-gold-500/30 rounded-xl active:scale-95 transition-transform flex-shrink-0"
            title="Заказать в Instagram"
            aria-label="Заказать в Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
