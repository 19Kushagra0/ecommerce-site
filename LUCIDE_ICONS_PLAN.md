# Lucide Icons Implementation Plan

This document outlines the plan for replacing existing emojis with **Lucide Icons** (`lucide-react`) across the e-commerce website. 

## 1. Installation
We will need to install the Lucide React package, which provides all the icons as React components.
**Command to run (when ready):**
```bash
npm install lucide-react
```

## 2. Folder Structure
Lucide icons are provided as ready-to-use React components, so we don't need to download or store individual SVG files in our repository. 

We will follow this structure:

### Approach: Direct Imports & UI Components
We will import icons directly from `lucide-react` wherever they are needed. If we find that we are reusing the exact same icon configuration heavily, we can create a centralized wrapper, but direct imports are the standard Next.js approach.

```text
src/
├── app/                  # Pages where icons might be used directly
├── components/
│   ├── Header.tsx        # Will import <ShoppingCart />, <Menu />, etc.
│   ├── ProductCard.tsx   # Will import <Star /> for ratings
│   └── Footer.tsx        # Will import <Mail />, <Phone />, etc.
```

*Note: No dedicated "icons" folder is needed! The library handles it all.*

## 3. How We Will Use It (Usage Example)

Currently, the site uses emojis like this:
```tsx
// Before
<button className="cart-btn">
  🛒 Cart
</button>
```

We will replace them with Lucide components. Lucide icons inherit the current text color by default and can be styled using Tailwind CSS classes or CSS Modules.

```tsx
// After
import { ShoppingCart } from 'lucide-react';

<button className="flex items-center gap-2 text-gray-800 hover:text-blue-600">
  <ShoppingCart className="w-5 h-5" /> 
  Cart
</button>
```

### Common Icon Replacements:
- 🛒 (Cart) ➡️ `<ShoppingCart />`
- 👤 (User) ➡️ `<User />`
- 🔍 (Search) ➡️ `<Search />`
- ⭐ (Rating) ➡️ `<Star />` or `<StarHalf />`
- ❌ (Close) ➡️ `<X />`
- ☰ (Menu) ➡️ `<Menu />`

## 4. Execution Steps (Next Steps)
When you give the go-ahead, we will do the following:
1. **Install** the `lucide-react` dependency.
2. **Scan** the codebase for all existing emojis.
3. **Import & Replace** each emoji with the appropriate Lucide icon component.
4. **Adjust Styling** to ensure the new icons are perfectly aligned with the text and have the correct sizing.
