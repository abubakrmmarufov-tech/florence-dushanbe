import { X, Trash2, Phone, ShoppingBag } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { Product, STORE_INFO } from '../data/products';
import { getOptimizedImageUrl } from '../utils/image';

export interface CartItem {
  product: Product;
  sizeName: string;
  sizeLabel: string;
  pricePerUnit: number;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const totalPrice = items.reduce((sum, item) => sum + item.pricePerUnit * item.quantity, 0);

  // Pre-filled WhatsApp message with list of items
  const itemsText = items
    .map(
      (item, idx) =>
        `${idx + 1}. ${item.product.name} (${item.sizeLabel}) x ${item.quantity} шт. = ${
          item.pricePerUnit * item.quantity
        } сомони`
    )
    .join('\n');

  const whatsappMessage = encodeURIComponent(
    `Здравствуйте, Florence Dushanbe! Хочу оформить заказ из бутика:\n\n${itemsText}\n\nИтого к оплате: ${totalPrice} сомони.\nАдрес доставки: [укажите ваш адрес в Душанбе]\nДата и время доставки: [укажите время]`
  );

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-cream-50 h-full flex flex-col shadow-2xl border-l border-cream-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-cream-200 bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-florence-800" />
            <h3 className="font-serif text-xl font-normal text-florence-900">
              Ваш выбор ({items.reduce((acc, i) => acc + i.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Закрыть корзину"
            className="p-2 text-charcoal-500 hover:text-charcoal-900 rounded-full hover:bg-cream-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Concierge Delivery Assurance */}
        <div className="bg-florence-50/80 px-4 py-2.5 text-[11px] text-florence-900 border-b border-florence-100/80 flex items-center justify-between font-medium">
          <span>Доставка по г. Душанбе от 60 минут</span>
          <span className="text-florence-800">Фотоотчет до выезда</span>
        </div>

        {/* Item list */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-20 space-y-3">
              <ShoppingBag className="w-12 h-12 text-cream-300 mx-auto" />
              <p className="font-serif text-xl text-charcoal-700">В корзине пока пусто</p>
              <p className="text-xs text-charcoal-500 max-w-xs mx-auto">
                Выберите один из наших авторских букетов в каталоге, чтобы оформить доставку.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 bg-florence-800 text-cream-50 text-xs font-medium uppercase tracking-wider rounded"
              >
                Перейти в каталог
              </button>
            </div>
          ) : (
            items.map((item, idx) => (
              <div
                key={`${item.product.id}-${item.sizeName}-${idx}`}
                className="flex gap-4 p-3.5 bg-white rounded-lg border border-cream-200 shadow-xs"
              >
                {/* Thumb */}
                <div className="w-20 h-24 rounded-md overflow-hidden bg-cream-100 flex-shrink-0">
                  <img
                    src={getOptimizedImageUrl(item.product.images[0], 200, 65)}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <h4 className="font-serif text-base text-florence-900 font-medium leading-snug">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(idx)}
                        className="text-charcoal-400 hover:text-rose-600 transition-colors p-1"
                        title="Удалить"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-[11px] text-charcoal-500 block mt-0.5">
                      Размер: {item.sizeLabel}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border border-cream-200 rounded bg-cream-50 text-xs">
                      <button
                        onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                        className="px-2.5 py-1 text-charcoal-600 hover:bg-cream-200 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-2 py-1 font-semibold text-charcoal-800">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                        className="px-2.5 py-1 text-charcoal-600 hover:bg-cream-200 transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-serif text-base font-semibold text-florence-900">
                      {item.pricePerUnit * item.quantity} сомони
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with checkout actions */}
        {items.length > 0 && (
          <div className="p-5 bg-white border-t border-cream-200 space-y-4">
            <div className="flex items-baseline justify-between">
              <span className="text-xs uppercase tracking-luxury text-charcoal-600 font-medium">
                Итого к оплате:
              </span>
              <span className="font-serif text-2xl font-bold text-florence-900 tabular-nums">
                {totalPrice} <span className="text-sm font-sans font-normal text-charcoal-700">TJS</span>
              </span>
            </div>

            {/* Payment & Concierge Info */}
            <div className="bg-cream-100/60 p-2.5 rounded-lg border border-cream-200/80 text-[10px] text-charcoal-600 space-y-0.5">
              <div className="font-semibold text-charcoal-800">Способы оплаты:</div>
              <div>Корти Милли • Alif Mobile • DC City • перевод или курьеру</div>
            </div>

            <div className="space-y-2">
              <a
                href={`${STORE_INFO.whatsappUrl}${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-98"
              >
                <Phone className="w-4 h-4" />
                <span>Заказать через WhatsApp</span>
              </a>

              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-florence-800 hover:bg-florence-700 text-cream-50 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-98"
              >
                <InstagramIcon className="w-4 h-4 text-gold-400" />
                <span>Заказать через Instagram</span>
              </a>
            </div>

            <button
              onClick={onClearCart}
              className="w-full text-center text-[11px] text-charcoal-400 hover:text-rose-600 pt-1"
            >
              Очистить корзину
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
