import React, { useState } from 'react';
import { PRODUCTS, Product } from './data/products';
import { Navbar } from './components/Navbar';
import { MobileStories } from './components/MobileStories';
import { Hero } from './components/Hero';
import { OccasionSelector } from './components/OccasionSelector';
import { Catalog } from './components/Catalog';
import { BrandStory } from './components/BrandStory';
import { DeliveryInfo } from './components/DeliveryInfo';
import { Testimonials } from './components/Testimonials';
import { InstagramFeed } from './components/InstagramFeed';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { CheckCircle2 } from 'lucide-react';

export function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      sizeName: 'classic',
      sizeLabel: 'Классический (17 роз)',
      pricePerUnit: 680,
      quantity: 1,
    },
  ]);
  const [favorites, setFavorites] = useState<string[]>([PRODUCTS[0].id, PRODUCTS[1].id]);
  const [selectedOccasion, setSelectedOccasion] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleAddToCart = (product: Product, sizeName = 'classic', quantity = 1) => {
    const sizeObj = product.sizes.find((s) => s.name === sizeName) || product.sizes[0];
    const pricePerUnit = Math.round(product.price * (sizeObj?.priceMultiplier || 1));

    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (i) => i.product.id === product.id && i.sizeName === sizeName
      );

      if (existingIdx >= 0) {
        const next = [...prev];
        next[existingIdx].quantity += quantity;
        return next;
      } else {
        return [
          ...prev,
          {
            product,
            sizeName,
            sizeLabel: sizeObj.label,
            pricePerUnit,
            quantity,
          },
        ];
      }
    });

    showToast(`«${product.name}» добавлен в корзину`);
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const next = [...prev];
      next[index].quantity = quantity;
      return next;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
    showToast('Букет удален из корзины');
  };

  const handleClearCart = () => {
    setCartItems([]);
    showToast('Корзина очищена');
  };

  const handleToggleFavorite = (productId: string) => {
    setFavorites((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Удалено из избранного');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Добавлено в избранное');
        return [...prev, productId];
      }
    });
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col text-charcoal-900 selection:bg-florence-800 selection:text-cream-50">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 left-4 sm:left-auto z-50 bg-florence-900 text-cream-50 px-4 py-3 rounded-xl shadow-2xl border border-florence-700 flex items-center gap-2.5 animate-fade-in text-xs font-medium max-w-sm">
          <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        favoritesCount={favorites.length}
        onSearchChange={setSearchQuery}
        searchQuery={searchQuery}
      />

      {/* Mobile Instagram Stories floral category circles */}
      <MobileStories
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* Main Content with bottom padding to avoid bottom-bar collision */}
      <main className="flex-1 pb-20 lg:pb-0">
        <Hero />

        {/* Occasion Selector */}
        <OccasionSelector
          selectedOccasion={selectedOccasion}
          onSelectOccasion={setSelectedOccasion}
        />

        {/* Catalog */}
        <Catalog
          products={PRODUCTS}
          onSelectProduct={setSelectedProduct}
          onAddToCart={(prod) => handleAddToCart(prod)}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          selectedOccasion={selectedOccasion}
          onClearOccasion={() => setSelectedOccasion(null)}
          searchQuery={searchQuery}
        />

        {/* Editorial Story */}
        <BrandStory />

        {/* Delivery Process & Guarantees */}
        <DeliveryInfo />

        {/* Social Proof */}
        <Testimonials />

        {/* Instagram Grid */}
        <InstagramFeed />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Detail Modal (Bottom Sheet on phone) */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        isFavorite={selectedProduct ? favorites.includes(selectedProduct.id) : false}
        onToggleFavorite={handleToggleFavorite}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Mobile Bottom Navigation Bar */}
      <MobileBottomNav
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

    </div>
  );
}

export default App;
