// src/types/Products.ts
export interface Bean {
  name: string;
  price: number;
  img: string;
  description: string;
}

export interface Beans {
  [key: string]: Bean;
}

export interface Products {
  beans: Beans;
  cerial: Record<string, Bean>;
  oilSeeds: Record<string, Bean>;
  spices: Record<string, Bean>;
}
