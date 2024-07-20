// src/types/Beans.ts
export interface Bean {
  name: string;
  price: number;
  img: string;
  description: string;
}

export interface Beans {
  "black kidney": Bean;
  "cream beans": Bean;
  "green mung": Bean;
  "red kidney": Bean;
  "fave beans": Bean;
  "light speckled kidney": Bean;
  "pinto beans": Bean;
  "red speckled kidney": Bean;
}
