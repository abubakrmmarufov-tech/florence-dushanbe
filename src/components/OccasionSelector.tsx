import React from 'react';
import { OCCASIONS } from '../data/products';

interface OccasionSelectorProps {
  selectedOccasion: string | null;
  onSelectOccasion: (occasionTag: string | null) => void;
}

const OCCASION_CARDS = [
  {
    tag: 'romantic',
    title: 'Романтика & Свидание',
    subtitle: 'Пионовидные розы, нежные оттенки и признания',
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80',
  },
  {
    tag: 'birthday',
    title: 'День рождения',
    subtitle: 'Пышные авторские композиции для яркого праздника',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=600&q=80',
  },
  {
    tag: 'anniversary',
    title: 'Юбилей & Торжество',
    subtitle: 'Величественные монобукеты и гранд-композиции',
    image: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=600&q=80',
  },
  {
    tag: 'luxury',
    title: 'Премиум коллекция',
    subtitle: 'Редкие сорта роз, бархатные боксы и подарки',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=600&q=80',
  },
];

export const OccasionSelector: React.FC<OccasionSelectorProps> = ({
  selectedOccasion,
  onSelectOccasion,
}) => {
  return (
    <section id="occasions" className="py-16 sm:py-20 bg-cream-100/60 border-y border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] uppercase tracking-luxury text-florence-700 font-medium block mb-2">
            Идеальный выбор для каждого события
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-florence-900 font-normal">
            Цветы по поводу
          </h2>
          <div className="w-12 h-0.5 bg-gold-500 mx-auto mt-4 mb-4" />
          <p className="text-xs sm:text-sm text-charcoal-600 font-light">
            Наши флористы подбирают палитру и характер букета специально под настроение вашего события
          </p>
        </div>

        {/* Occasions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OCCASION_CARDS.map((card) => {
            const isSelected = selectedOccasion === card.tag;

            return (
              <div
                key={card.tag}
                onClick={() => {
                  onSelectOccasion(isSelected ? null : card.tag);
                  const el = document.getElementById('catalog');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group relative h-80 rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
                  isSelected ? 'ring-2 ring-florence-700 ring-offset-2' : ''
                }`}
              >
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-florence-950/90 via-florence-950/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-cream-50">
                  <span className="text-[10px] tracking-luxury uppercase text-gold-400 font-medium mb-1">
                    Повод
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal leading-snug group-hover:text-gold-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-cream-200/90 font-light mt-1.5 line-clamp-2">
                    {card.subtitle}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs text-gold-300 font-medium">
                    <span>{isSelected ? 'Выбрано (показаны букеты)' : 'Смотреть подборку'}</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reset filter button if active */}
        {selectedOccasion && (
          <div className="text-center mt-6">
            <button
              onClick={() => onSelectOccasion(null)}
              className="text-xs uppercase tracking-wider text-florence-800 underline hover:text-florence-600 font-medium"
            >
              Сбросить фильтр по поводам и показать все букеты
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
