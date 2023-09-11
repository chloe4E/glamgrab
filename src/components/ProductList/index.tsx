import React, { useEffect } from "react";
import type { Product } from "../../Types/types";
import ProductCard from "../ProductCard";
import Grid from "@mui/material/Grid";
import useGlamGrabStore from "../../store/store";

const ProductList: React.FC = () => {
  const { products, fetchAllProducts } = useGlamGrabStore();
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  return (
    <Grid container spacing={2}>
      {products.map((product: Product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
