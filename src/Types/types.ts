type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

interface Item {
  quantity?: number;
  unitPrice?: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export type { Product, Item };
