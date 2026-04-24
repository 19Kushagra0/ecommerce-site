export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  tag: string;
  image: string;
  rating?: number ;
  reviews?: number;
  stock: number;
  colors: string[];
  sizes: string[];
  description: string;
  slug: string;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}

