import React from 'react';
import { OCCASIONS } from '../data/products';
import { getOptimizedImageUrl } from '../utils/image';

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
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.24em] text-florence-800 font-semibold block mb-2">
            ПОДБОРКА ПО НАСТРОЕНИЮ
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-florence-900 font-light text-balance">
            Цветы для ваших особенных событий
          </h2>
          <div className="w-12 h-0.5 bg-gold-500/80 mx-auto mt-3 mb-3" />
          <p className="text-xs sm:text-sm text-charcoal-600 font-light text-pretty">
            Индивидуальные палитры под характер встречи: от камерных свиданий до представительских торжеств
          </p>
        </div>

        {/* Occasions Grid: 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {OCCASION_CARDS.map((card) => {
            const isSelected = selectedOccasion === card.tag;

            return (
              <div
                key={card.tag}
                onClick={() => {
                  onSelectOccasion(isSelected ? null : card.tag);
                }}
                className={`group relative aspect-[3/4] sm:aspect-auto sm:h-80 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 transform active:scale-[0.98] ${
                  isSelected ? 'ring-2 ring-florence-700 ring-offset-2' : ''
                }`}
              >
                {/* Background Image */}
                <img
                  src={getOptimizedImageUrl(card.image, 500, 70)}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />

                {/* Refined Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-florence-950/90 via-florence-950/35 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-3.5 sm:p-6 flex flex-col justify-end text-cream-50">
                  <span className="text-[8px] sm:text-[10px] tracking-luxury uppercase text-gold-400 font-medium mb-1">
                    КОЛЛЕКЦИЯ
                  </span>
                  <h3 className="font-serif text-sm sm:text-2xl font-normal leading-snug group-hover:text-gold-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-cream-200/90 font-light mt-1 line-clamp-2 hidden sm:block">
                    {card.subtitle}
                  </p>

                  <div className="mt-2 sm:mt-4 pt-2 sm:pt-3 border-t border-white/20 flex items-center justify-between text-[10px] sm:text-xs text-gold-300 font-medium">
                    <span className="truncate">{isSelected ? 'Выбрано' : 'Смотреть'}</span>
                    <span className="transform group-hover:translate-x-1 transition-transform ml-1">→</span>
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
