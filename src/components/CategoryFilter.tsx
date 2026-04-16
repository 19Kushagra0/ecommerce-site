'use client';

import clsx from 'clsx';
import type { Category } from '@/lib/types';

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onSelect: (id: string) => void;
  productCounts: Record<string, number>;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onSelect,
  productCounts,
}: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={clsx(
            'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 border shrink-0',
            activeCategory === cat.id
              ? 'bg-skull-neon-pink text-white border-skull-neon-pink shadow-lg shadow-skull-neon-pink/20'
              : 'bg-skull-dark text-skull-muted border-skull-border hover:border-skull-neon-pink/40 hover:text-skull-text hover:shadow-md hover:shadow-skull-neon-pink/10'
          )}
        >
          <span>{cat.icon}</span>
          <span>{cat.label}</span>
          {productCounts[cat.id] !== undefined && (
            <span
              className={clsx(
                'text-[10px] px-1.5 py-0.5 rounded-full font-bold',
                activeCategory === cat.id
                  ? 'bg-white/20 text-white'
                  : 'bg-skull-border text-skull-muted'
              )}
            >
              {productCounts[cat.id]}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
