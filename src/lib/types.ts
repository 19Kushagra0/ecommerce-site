export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number | null;
  category: string;
  tag: string | null;
  image: string;
  rating: number;
  reviews: number;
  stock: number;
  colors: string[];
  sizes: string[];
  description: string;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}

