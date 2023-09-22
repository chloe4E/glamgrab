import React, { useEffect } from "react";
import { Product } from "../../Types/types";
import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useGlamGrabStore from "../../store/store";
import { ContainerWithTitle } from "../../components/PageLayout";
import ButtonAppBar from "../../components/Header";
import { MarginMediumPx, MarginSmallPx } from "../../utils/styles";
import ActionBar from "../../components/ProductCard/productActionBar";
import pricePerUnitWithCurrency from "../../utils/helper";

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams();
  const { products, fetchAllProducts, productsInBag } = useGlamGrabStore();
  const product = products.filter((p: Product) => p.id == Number(productId))[0];
  const productInBag = productsInBag.filter(
    (p: Product) => p.id == Number(productId)
  )[0];
  const addToBag = useGlamGrabStore((state) => state.addOneToBag);
  const removeFromBag = useGlamGrabStore((state) => state.removeOneFromBag);
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
                position: "relative",
                overflow: "hidden",
                "&:hover img": {
                  transform: "scale(1.8)",
                },
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                width="300px"
                loading="lazy"
                style={{
                  transition: "transform 0.5s ease",
                }}
              />
            </Grid>
            <Grid
              item
              sx={{
                width: "300px",
                m: MarginMediumPx,
              }}
            >
              <Typography
                variant="h5"
                style={{
                  fontFamily: "monospace",
                  marginBottom: MarginSmallPx,
                }}
              >
                {product.title}
              </Typography>
              <Typography
                variant="h5"
                style={{ marginBottom: MarginSmallPx, fontWeight: "bold" }}
              >
                {product.category}
              </Typography>
              <Typography variant="h6" style={{ marginBottom: MarginSmallPx }}>
                {pricePerUnitWithCurrency(Number(product.price), "€")}
              </Typography>
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: MarginSmallPx,
                }}
              >
                <ActionBar
                  quantity={productInBag?.quantity || 0}
                  onAdd={() => addToBag(product)}
                  onRemove={() => removeFromBag(product.id)}
                />
              </Grid>
              <Typography variant="body1">{product.description}</Typography>
            </Grid>
          </Grid>
        )}
      </ContainerWithTitle>
    </>
  );
};

export default ProductDetailPage;
