import React, { useState } from "react";
import ButtonAppBar from "../../components/Header";
import { ContainerWithTitle } from "../../components/PageLayout";
import ProductList from "../../components/ProductList";

const HomePage = () => {
  return (
    <>
      <ButtonAppBar />
      <ContainerWithTitle title="Articles available">
        <ProductList />
      </ContainerWithTitle>
    </>
  );
};
``;

export default HomePage;
