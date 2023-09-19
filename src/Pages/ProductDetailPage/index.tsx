import React, { useEffect } from "react";
import { Product } from "../../Types/types";
import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useGlamGrabStore from "../../store/store";

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams();
  const { products, fetchAllProducts } = useGlamGrabStore();
  const product = products.filter((p: Product) => (p.id = Number(productId)));
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  return (
    <Grid>
      <Grid>
        <img src={product.image} alt={product.title} loading="lazy" />
      </Grid>
      <Grid>
        <Typography>{product.title}</Typography>
        <Typography>{product.category}</Typography>
        <Typography>{product.price}</Typography>
        <Typography>{product.description}</Typography>
      </Grid>
    </Grid>
  );
};

export default ProductDetailPage;
