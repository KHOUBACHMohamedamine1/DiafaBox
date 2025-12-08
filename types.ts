export enum Category {
  FRUITS_SECS = 'Fruits Secs & Thé',
  CAFE = 'Café & Douceurs',
  BIEN_ETRE = 'Bien-être & Spa',
  SOUVENIRS = 'Souvenirs & Artisanat',
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  imageUrl: string;
  isPack?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Pack {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  imageUrl: string;
  tag: string;
}