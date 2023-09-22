import { create } from "zustand";
import getAllProducts from "../api/productsApi";
import type { Product, ProductInBag } from "../Types/types";

interface GlamGrabState {
  products: Product[];
  productsInBag: ProductInBag[];
  fetchAllProducts: () => Promise<void>;
  addOneToBag: (product: Product) => void;
  removeOneFromBag: (productId: number) => void;
  removeItemFromBag: (productId: number) => void;
  totalQuantityInBag: () => number;
}

const useGlamGrabStore = create<GlamGrabState>((set, get) => ({
  products: [],
  productsInBag: [],
  fetchAllProducts: async () => {
    getAllProducts()
      .then((data) => set({ products: data }))
      .catch((error) => console.log(`error this will be a toast: ${error}`));
  },
  addOneToBag: (product: Product) => {
    set((state) => {
      // Check if the product is already in the bag
      const existingProduct = state.productsInBag.find(
        (p) => p.id === product.id
      );

      if (existingProduct) {
        // If the product exists, update its quantity
        const updatedProduct = {
          ...existingProduct,
          quantity: existingProduct.quantity + 1,
        };

        return {
          productsInBag: state.productsInBag.map((p) =>
            p.id === updatedProduct.id ? updatedProduct : p
          ),
        };
      } else {
        // If the product doesn't exist, add it to the bag with quantity 1
        const newProduct: ProductInBag = {
          ...product,
          quantity: 1,
        };

        return {
          productsInBag: [...state.productsInBag, newProduct],
        };
      }
    });
  },
  removeOneFromBag: (productId: number) => {
    set((state) => ({
      productsInBag: state.productsInBag
        .map((product) => {
          if (product.id === productId && product.quantity > 1) {
            // If the product quantity is greater than 1, decrement it
            return { ...product, quantity: product.quantity - 1 };
          } else if (product.id === productId && product.quantity === 1) {
            // If the product quantity is 1, remove it from the bag
            return null;
          }
          return product;
        })
        .filter(Boolean) as ProductInBag[],
    }));
  },
  removeItemFromBag: (productId: number) => {
    set((state) => ({
      productsInBag: state.productsInBag.filter(
        (product) => product.id !== productId
      ),
    }));
  },
  totalQuantityInBag: () =>
    get().productsInBag.reduce(
      (total, product) => total + (product.quantity || 0),
      0
    ) as number,
}));

export default useGlamGrabStore;
