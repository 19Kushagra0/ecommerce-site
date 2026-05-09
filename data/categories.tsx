import type { Category } from "@/lib/types";
import { 
  Skull, 
  Shirt, 
  Mouse, 
  Gamepad2, 
  Frame, 
  Ghost, 
  Keyboard, 
  Gem, 
  Image as ImageIcon 
} from "lucide-react";

export interface CategoryWithIcon extends Omit<Category, 'icon'> {
  icon: React.ElementType;
}

export const categories: CategoryWithIcon[] = [
  { id: "all", label: "All Products", icon: Skull },
  { id: "apparel", label: "Apparel", icon: Shirt },
  { id: "peripherals", label: "Peripherals", icon: Mouse },
  { id: "accessories", label: "Accessories", icon: Gamepad2 },
  { id: "decor", label: "Decor", icon: Frame },
  { id: "headwear", label: "Headwear", icon: Ghost },
  { id: "keyboards", label: "Keyboards", icon: Keyboard },
  { id: "jewelry", label: "Jewelry", icon: Gem },
  { id: "prints", label: "Prints", icon: ImageIcon },
];
