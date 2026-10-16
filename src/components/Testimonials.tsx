import React from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Мадина С.',
    occasion: 'Заказ на день рождения мамы',
    text: 'Заказывала букет White O’Hara с доставкой на Рудаки. Цветы стояли больше недели, а аромат заполнил всю квартиру! Очень порадовало, что флорист прислала фото букета перед отправкой.',
    rating: 5,
  },
  {
    name: 'Фаррух Д.',
    occasion: 'Свадебный юбилей',
    text: 'Лучший цветочный сервис в Душанбе. Бархатная коробка Florence выглядит невероятно статусно. Доставили точно к 10:00 утра, открытка подписана безупречным почерком.',
    rating: 5,
  },
  {
    name: 'Нигина Р.',
    occasion: 'Пионы Coral Sunset',
    text: 'Пионы-хамелеоны — это нечто волшебное! Меняли цвет с кораллового на нежно-сливочный с каждым днем. Спасибо Florence за такое бережное отношение к деталям и эстетике.',
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-cream-100/50 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] uppercase tracking-luxury text-florence-700 font-semibold block mb-2">
            Отзывы гостей бутика
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-florence-900 font-light">
            Нам доверяют важные моменты
          </h2>
          <div className="w-12 h-0.5 bg-gold-500 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-xl border border-cream-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-gold-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-charcoal-700 font-light italic leading-relaxed">
                  «{review.text}»
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-cream-100">
                <h4 className="font-serif text-base font-semibold text-florence-900">
                  {review.name}
                </h4>
                <span className="text-[11px] text-charcoal-500 block">
                  {review.occasion}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
