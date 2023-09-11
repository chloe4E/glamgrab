import React from "react";
import type { ProductInBag } from "../../Types/types";

import Grid from "@mui/material/Grid";
import ProductReviewCard from "../ProductReviewCard";
import useGlamGrabStore from "../../store/store";

const ProductReviewList: React.FC = () => {
  const productsInBag = useGlamGrabStore((state) => state.productsInBag);

  return (
    <Grid container spacing={2}>
      {productsInBag.map((product: ProductInBag) => (
        <Grid item lg={12} key={product.id}>
          <ProductReviewCard item={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductReviewList;
