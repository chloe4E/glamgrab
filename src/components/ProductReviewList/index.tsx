import React, { useEffect, useState } from "react";
import getAllProducts from "../../api/productsApi";
import type { Product } from "../../Types/types";

import Grid from "@mui/material/Grid";
import ProductReviewCard from "../ProductReviewCard";

const ProductReviewList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.log(`error this will be a toast: ${error}`));
  }, []);

  return (
    <Grid container spacing={2}>
      {products.map((product: Product) => (
        <Grid item lg={12} key={product.id}>
          <ProductReviewCard item={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductReviewList;
