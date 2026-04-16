'use client';

import { Search, X } from 'lucide-react';
import clsx from 'clsx';

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = 'Search drops...' }: SearchBarProps) {
  return (
    <div className="relative flex-1 min-w-0">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-skull-muted pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={clsx(
          'w-full bg-skull-dark border border-skull-border rounded-xl',
          'pl-9 pr-9 py-2.5 text-sm text-skull-text placeholder:text-skull-muted',
          'outline-none transition-all duration-200',
          'focus:border-skull-neon-purple focus:ring-2 focus:ring-skull-neon-purple/20'
        )}
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-skull-muted hover:text-skull-neon-pink transition-colors"
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
