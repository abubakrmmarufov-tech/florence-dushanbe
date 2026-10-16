import { ArrowUpRight, Heart } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { STORE_INFO } from '../data/products';
import { getOptimizedImageUrl } from '../utils/image';

const INSTA_POSTS = [
  {
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364',
    likes: 342,
    tag: '#WhiteOHara',
  },
  {
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4',
    likes: 489,
    tag: '#CoralSunset',
  },
  {
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321',
    likes: 512,
    tag: '#FlorenceBoxes',
  },
  {
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11',
    likes: 278,
    tag: '#DushanbeFlowers',
  },
  {
    image: 'https://images.unsplash.com/photo-1559563458-527698bf5295',
    likes: 620,
    tag: '#SarahBernhardt',
  },
  {
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9',
    likes: 415,
    tag: '#BespokeBouquets',
  },
];

export const InstagramFeed: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-cream-50 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.24em] text-florence-800 font-semibold block mb-1">
              ГАЛЕРЕЯ АТЕЛЬЕ
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-florence-900 font-light text-balance">
              Кадры из жизни бутика в Душанбе
            </h2>
          </div>

          <a
            href={STORE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-florence-800 hover:bg-florence-700 text-cream-50 rounded-lg text-xs font-medium uppercase tracking-luxury transition-all shadow-sm group"
          >
            <InstagramIcon className="w-4 h-4 text-gold-400" />
            <span>@{STORE_INFO.instagram}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTA_POSTS.map((post, idx) => (
            <a
              key={idx}
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-lg overflow-hidden bg-cream-100 shadow-xs block"
            >
              <img
                src={getOptimizedImageUrl(post.image, 320, 65)}
                alt="Florence Dushanbe Instagram"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-florence-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-cream-50 p-2 text-center">
                <InstagramIcon className="w-6 h-6 mb-2 text-gold-400" />
                <div className="flex items-center gap-1 text-xs">
                  <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
                  <span>{post.likes}</span>
                </div>
                <span className="text-[10px] text-cream-200 mt-1">{post.tag}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 text-center text-xs text-charcoal-500 font-light">
          Отмечайте нас <span className="font-medium text-florence-800">#florencedushanbe</span> в ваших публикациях и историях
        </div>

      </div>
    </section>
  );
};
