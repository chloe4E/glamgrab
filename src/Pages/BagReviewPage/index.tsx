import React from "react";
import ButtonAppBar from "../../components/Header";
import { ContainerWithTitle } from "../../components/PageLayout";

import ProductReviewList from "../../components/ProductReviewList";

import { Grid } from "@mui/material";
import { TotalCard } from "./TotalCard";

const BagReviewPage: React.FC = () => {
  return (
    <>
      <ButtonAppBar />
      <ContainerWithTitle title="Bag Review:">
        <Grid container spacing={2} sx={{ display: "flex" }}>
          <Grid item lg={8}>
            <ProductReviewList />
          </Grid>
          <Grid item lg={4}>
            <TotalCard />
          </Grid>
        </Grid>
      </ContainerWithTitle>
    </>
  );
};

export default BagReviewPage;
