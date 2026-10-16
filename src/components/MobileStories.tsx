import React from 'react';

interface StoryItem {
  id: string;
  categoryId: string;
  title: string;
  image: string;
  badge?: string;
}

const STORIES: StoryItem[] = [
  {
    id: 'roses',
    categoryId: 'roses',
    title: 'Розы O’Hara',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=300&q=80',
    badge: 'Хит',
  },
  {
    id: 'peonies',
    categoryId: 'peonies',
    title: 'Пионы',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=300&q=80',
    badge: 'Сезон',
  },
  {
    id: 'signature',
    categoryId: 'signature',
    title: 'Авторские',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'compositions',
    categoryId: 'compositions',
    title: 'В коробках',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'gifts',
    categoryId: 'gifts',
    title: 'Подарки',
    image: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'all',
    categoryId: 'all',
    title: 'Все букеты',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=300&q=80',
  },
];

interface MobileStoriesProps {
  activeCategory: string;
  onSelectCategory: (catId: string) => void;
}

export const MobileStories: React.FC<MobileStoriesProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="lg:hidden bg-cream-50 pt-2 pb-4 border-b border-cream-200">
      <div className="flex items-center gap-3.5 overflow-x-auto px-4 scrollbar-none overscroll-x-contain py-1">
        {STORIES.map((story) => {
          const isActive = activeCategory === story.categoryId;

          return (
            <button
              key={story.id}
              onClick={() => {
                onSelectCategory(story.categoryId);
                const el = document.getElementById('catalog');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex flex-col items-center flex-shrink-0 group focus:outline-none"
            >
              {/* Circular Avatar with Luxury Ring */}
              <div className="relative">
                <div
                  className={`w-16 h-16 rounded-full p-0.5 transition-all duration-300 ${
                    isActive
                      ? 'ring-2 ring-florence-700 ring-offset-2 bg-gradient-to-tr from-gold-500 to-florence-700'
                      : 'ring-1 ring-cream-300 hover:ring-gold-500'
                  }`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-cream-100">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transform group-active:scale-95 transition-transform"
                    />
                  </div>
                </div>

                {story.badge && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-1.5 py-0.2 bg-florence-900 text-gold-300 text-[9px] font-semibold uppercase tracking-wider rounded-full shadow-xs whitespace-nowrap">
                    {story.badge}
                  </span>
                )}
              </div>

              {/* Title label */}
              <span
                className={`text-[11px] mt-1.5 font-medium tracking-tight text-center truncate max-w-[70px] ${
                  isActive ? 'text-florence-900 font-semibold' : 'text-charcoal-700'
                }`}
              >
                {story.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
