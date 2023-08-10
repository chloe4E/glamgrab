import React, { useEffect, useState } from "react";
import getAllProducts from "../../api/productsApi";
import type { Product } from "../../Types/types";
import ProductCard from "../ProductCard";
import Grid from "@mui/material/Grid";

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
      <Grid container spacing={2}>
        {products.map((product: Product) => (
          <Grid item xs={4}>
            <ProductCard product={product} key={product.id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
