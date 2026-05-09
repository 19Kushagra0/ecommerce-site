# Styling Migration Plan (Tailwind + CSS Modules)

## Verification of Choices

**Is this the right choice?**
Yes, combining CSS Modules with Tailwind is a proven, highly effective pattern for Next.js applications, especially for a project with complex, cyberpunk-themed aesthetics (neon glows, complex borders, animations).

- **Why it's right:** Tailwind is incredibly fast for structural layout (flex, grid, padding) and typography. However, heavy stylistic elements (multi-layered shadows, complex pseudo-elements for neon effects, keyframe animations) can quickly make JSX unreadable and bloated. CSS Modules solve this by abstracting the complex parts into scoped CSS without risking class name collisions.
- **The Modern Approach:** Since you are using Tailwind v4, we will rely on standard CSS variables inside the modules instead of overusing `@apply`. This keeps the CSS performant and fully leverages your `globals.css` theme variables.

## Strategy Breakdown

### When to use Tailwind (Inline in JSX)

Keep these inline to build the "skeleton" and structure rapidly:

- **Layout:** `flex`, `grid`, `items-center`, `justify-between`, `gap-4`
- **Spacing & Sizing:** `p-4`, `w-full`, `max-w-7xl`, `h-16`
- **Typography:** `text-xl`, `font-display`, `tracking-wider`
- **Responsive Tweaks:** `md:flex-row`, `lg:hidden`
- **Simple States:** `hover:text-skull-neon-pink`

### When to use CSS Modules (`styles.myClass`)

Extract these into the module to keep JSX clean and maintainable:

- **Complex UI Elements:** When a component's `className` exceeds 10-15 utility classes and becomes a giant block of text (e.g., highly stylized cards or buttons).
- **Advanced Animations:** Multi-step keyframes and complex transition choreography.
- **Pseudo-elements:** Styling `::before` and `::after` for layered glowing borders or decorative backgrounds.
- **Dynamic Theming Overrides:** When dealing with complex state-based styling that is hard to manage cleanly with `clsx` and Tailwind alone.

---

## Migration Checklist

### Phase 1: Setup & Core Components

- [ ] `src/components/Navbar.tsx` ➔ Create `Navbar.module.css` and refactor
- [ ] `src/components/Footer.tsx` ➔ Create `Footer.module.css` and refactor
- [ ] `src/components/HeroSection.tsx` ➔ Create `HeroSection.module.css` and refactor
- [ ] `src/components/ProductCard.tsx` ➔ Create `ProductCard.module.css` and refactor
- [ ] `src/components/CategoryFilter.tsx` ➔ Create `CategoryFilter.module.css` and refactor
- [ ] `src/components/SearchBar.tsx` ➔ Create `SearchBar.module.css` and refactor

### Phase 2: Core Layouts & Pages

- [ ] `src/app/layout.tsx` ➔ Create `layout.module.css` and refactor
- [ ] `src/app/page.tsx` ➔ Create `page.module.css` and refactor

### Phase 3: Secondary Pages

- [ ] `src/app/about/page.tsx` ➔ Create `page.module.css` and refactor
- [ ] `src/app/contact/page.tsx` ➔ Create `page.module.css` and refactor
- [ ] `src/app/shop/page.tsx` ➔ Create `page.module.css` and refactor
- [ ] `src/app/product/[slug]/page.tsx` ➔ Create `page.module.css` and refactor

### Phase 4: Auth Pages

- [ ] `src/app/sign-in/page.tsx` ➔ Create `page.module.css` and refactor
- [ ] `src/app/sign-up/page.tsx` ➔ Create `page.module.css` and refactor

### Phase 5: Final Review

- [ ] Verify no styling regressions across all breakpoints.
- [ ] Ensure all hover effects and animations are intact.
- [ ] Confirm no orphaned (unused) Tailwind classes are left in the JSX.
