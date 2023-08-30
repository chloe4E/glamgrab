import React, { useEffect, useState } from "react";
import getAllProducts from "../../api/productsApi";
import type { Product } from "../../Types/types";
import ProductCard from "../ProductCard";
import Grid from "@mui/material/Grid";

interface ProductListProps {
  handleAddToCart: () => void;
  handleRemoveFromCart: () => void;
}

const ProductList: React.FC<ProductListProps> = ({
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.log(`error this will be a toast: ${error}`));
  }, []);

  return (
    <Grid container spacing={2}>
      {products.map((product: Product) => (
        <Grid item xs={4} key={product.id}>
          <ProductCard
            product={product}
            onAddProductToCart={handleAddToCart}
            onRemoveProductFromCart={handleRemoveFromCart}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
