import React, { useEffect, useState } from "react";
import getAllProducts from "../../api/productsApi";
import type { Product } from "../../Types/types";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.log(`error this will be a toast: ${error}`));
  }, []);

  return (
    <div>
      <h1>Articles available</h1>
      {products.map((product: Product) => (
        <p>{product.title}</p>
      ))}
    </div>
  );
};

export default ProductList;
