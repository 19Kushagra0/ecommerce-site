'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Skull } from 'lucide-react';
import clsx from 'clsx';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'backdrop-blur-md bg-skull-black/90 border-b border-skull-border shadow-lg shadow-skull-neon-purple/5'
            : 'bg-skull-black/60 backdrop-blur-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <Skull className="w-7 h-7 text-skull-neon-pink group-hover:text-skull-neon-purple transition-colors duration-300" />
            <span className="font-display text-2xl tracking-wider gradient-skull">
              SKULLDROP
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    'text-sm font-medium tracking-wide transition-colors duration-200 relative pb-0.5',
                    pathname === link.href
                      ? 'text-skull-neon-pink after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-skull-neon-pink'
                      : 'text-skull-muted hover:text-skull-text'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 text-skull-muted hover:text-skull-text transition-colors"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={clsx(
          'fixed inset-0 z-[60] lg:hidden transition-all duration-300',
          drawerOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className={clsx(
            'absolute inset-0 bg-skull-black/80 backdrop-blur-sm transition-opacity duration-300',
            drawerOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setDrawerOpen(false)}
        />
        {/* Panel */}
        <div
          className={clsx(
            'absolute right-0 top-0 bottom-0 w-72 bg-skull-dark border-l border-skull-border flex flex-col p-8 transition-transform duration-300',
            drawerOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <button
            className="absolute top-4 right-4 text-skull-muted hover:text-skull-neon-pink transition-colors"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-2 mb-10">
            <Skull className="w-6 h-6 text-skull-neon-pink" />
            <span className="font-display text-xl gradient-skull">SKULLDROP</span>
          </div>

          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className={clsx(
                    'font-display text-3xl tracking-wider transition-colors duration-200',
                    pathname === link.href
                      ? 'text-skull-neon-pink'
                      : 'text-skull-text hover:text-skull-neon-purple'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8 border-t border-skull-border">
            <p className="text-skull-muted text-xs">© 2025 SkullDrop</p>
            <p className="text-skull-muted text-xs mt-1">Born to Play. Built to Die.</p>
          </div>
        </div>
      </div>
    </>
  );
}
