import Link from 'next/link';
import { Skull, Camera, Hash, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-skull-dark border-t border-skull-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Skull className="w-6 h-6 text-skull-neon-pink" />
              <span className="font-display text-2xl gradient-skull">SKULLDROP</span>
            </div>
            <p className="text-skull-muted text-sm leading-relaxed max-w-xs">
              Born from late-night sessions, neon screens, and a love for the dead.
              Premium gaming lifestyle gear for those who play until dawn.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Twitter/X" className="text-skull-muted hover:text-skull-neon-pink transition-colors duration-200">
                <Hash className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-skull-muted hover:text-skull-neon-pink transition-colors duration-200">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Discord" className="text-skull-muted hover:text-skull-neon-purple transition-colors duration-200">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-display text-lg text-skull-text tracking-wider mb-4">SHOP</h3>
            <ul className="space-y-2">
              {[
                { label: 'All Products', href: '/shop' },
                { label: 'Apparel', href: '/shop?category=apparel' },
                { label: 'Peripherals', href: '/shop?category=peripherals' },
                { label: 'Accessories', href: '/shop?category=accessories' },
                { label: 'Decor', href: '/shop?category=decor' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-skull-muted text-sm hover:text-skull-neon-pink transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-display text-lg text-skull-text tracking-wider mb-4">INFO</h3>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Cart', href: '/cart' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-skull-muted text-sm hover:text-skull-neon-pink transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-skull-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-skull-muted text-xs">© 2025 SkullDrop. All rights reserved.</p>
          <p className="text-skull-muted text-xs flex items-center gap-1">
            <Skull className="w-3 h-3 text-skull-neon-pink" />
            Born to Play. Built to Die.
          </p>
        </div>
      </div>
    </footer>
  );
}
