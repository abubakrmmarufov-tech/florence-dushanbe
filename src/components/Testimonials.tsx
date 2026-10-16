import React from 'react';

const REVIEWS = [
  {
    name: 'Мадина С.',
    location: 'Доставка на пр. Рудаки',
    occasion: 'Букет на день рождения',
    text: 'Заказывала букет роз White O’Hara с утренней доставкой. Невероятный аромат заполнил всю квартиру, цветы стояли больше 9 дней! Флорист прислала видео букета до выезда курьера — сервис безупречный.',
  },
  {
    name: 'Фаррух Д.',
    location: 'Доставка в Serena Hotel Dushanbe',
    occasion: 'Годовщина свадьбы',
    text: 'Лучший флористический сервис в Душанбе. Бархатная шляпная коробка Florence выглядит статусно и дорого. Курьер вручил точно к 10:00 утра, открытка была подписана аккуратным почерком.',
  },
  {
    name: 'Нигина Р.',
    location: 'Самовывоз из салона (ул. Турсунзаде)',
    occasion: 'Сезонные пионы',
    text: 'Пионы Coral Sunset — это настоящее чудо. Бутоны раскрывались постепенно, меняя оттенок с кораллового на кремово-сливочный. Спасибо флористам Florence за бережное отношение к деталям.',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-cream-100/50 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-florence-800 font-medium block mb-1.5">
            ОТЗЫВЫ КЛИЕНТОВ
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-florence-900 font-light text-balance">
            Нам доверяют особенные моменты
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-7 sm:p-8 rounded-2xl border border-cream-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase tracking-[0.16em] text-gold-600 font-semibold block mb-3">
                  {review.occasion}
                </span>

                <p className="font-serif text-base sm:text-lg text-charcoal-800 font-normal leading-relaxed italic">
                  «{review.text}»
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-cream-100 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-semibold text-florence-900">
                    {review.name}
                  </h4>
                  <span className="text-[11px] text-charcoal-500 block font-light">
                    {review.location}
                  </span>
                </div>
                <span className="text-[10px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                  Проверенная доставка
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
