type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

interface ProductInBag {
  quantity?: number;
  unitPrice?: number;
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export type { Product, ProductInBag };
