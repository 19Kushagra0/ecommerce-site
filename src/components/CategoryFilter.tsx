"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Filter, Check } from "lucide-react";
import clsx from "clsx";
import type { CategoryWithIcon } from "@/../data/categories";

interface CategoryFilterProps {
  categories: CategoryWithIcon[];
  activeCategory: string;
  onSelect: (id: string) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onSelect,
}: CategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedCategory = categories.find((c) => c.id === activeCategory) ?? categories[0];
  const SelectedIcon = selectedCategory.icon;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full sm:w-56" ref={containerRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "w-full flex items-center justify-between bg-skull-dark border border-skull-border rounded-xl px-4 py-1.5 text-sm transition-all duration-200 outline-none",
          isOpen ? "border-skull-neon-pink ring-2 ring-skull-neon-pink/20" : "hover:border-skull-neon-pink/50"
        )}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <SelectedIcon className={clsx("w-4 h-4", activeCategory === 'all' ? "text-skull-muted" : "text-skull-neon-pink")} />
          <span className="text-skull-text font-medium">{selectedCategory.label}</span>
        </div>
        <ChevronDown className={clsx("w-4 h-4 text-skull-muted transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#0a0a0a] border border-skull-border rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-h-64 overflow-y-auto py-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    onSelect(cat.id);
                    setIsOpen(false);
                  }}
                  className={clsx(
                    "w-full flex items-center justify-between px-4 py-1.5 text-sm transition-colors",
                    isActive ? "bg-skull-neon-pink/10 text-white" : "text-skull-muted hover:bg-white/5 hover:text-white"
                  )}
                  role="option"
                  aria-selected={isActive}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={clsx("w-4 h-4", isActive ? "text-skull-neon-pink" : "text-skull-muted")} />
                    <span>{cat.label}</span>
                  </div>
                  {isActive && <Check className="w-4 h-4 text-skull-neon-pink" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
