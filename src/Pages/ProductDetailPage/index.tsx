import React, { useEffect } from "react";
import { Product } from "../../Types/types";
import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useGlamGrabStore from "../../store/store";
import { ContainerWithTitle } from "../../components/PageLayout";
import ButtonAppBar from "../../components/Header";
import { MarginMediumPx } from "../../utils/styles";

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams();
  const { products, fetchAllProducts } = useGlamGrabStore();
  const product = products.filter((p: Product) => p.id == Number(productId))[0];

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);
  console.log(products);
  console.log(product);
  return (
    <>
      <ButtonAppBar />
      <ContainerWithTitle title="Product Detail">
        {product && (
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Grid
              item
              sx={{
                m: MarginMediumPx,
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                width="300px"
                loading="lazy"
              />
            </Grid>
            <Grid
              item
              sx={{
                width: "300px",
                m: MarginMediumPx,
              }}
            >
              <Typography variant="h4">{product.title}</Typography>
              <Typography variant="h5">{product.category}</Typography>
              <Typography variant="button">{product.price}</Typography>
              <Typography variant="body1">{product.description}</Typography>
            </Grid>
          </Grid>
        )}
      </ContainerWithTitle>
    </>
  );
};

export default ProductDetailPage;
