import { Typography } from "@mui/material";
import React, { useState } from "react";
import ButtonAppBar from "../../components/Header";
import { ContainerWithTitle } from "../../components/PageLayout";
import ProductList from "../../components/ProductList";
import useGlamGrabStore from "../../store/store";

const HomePage = () => {
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0);
  const handleAddToCart = () => {
    setNumberOfItemsInCart(numberOfItemsInCart + 1);
  };
  const handleRemoveFromCart = () => {
    setNumberOfItemsInCart(numberOfItemsInCart - 1);
  };

  function BearCounter() {
    const bears = useGlamGrabStore((state) => state.bears);
    return <h1>{bears} around here ...</h1>;
  }

  return (
    <>
      <ButtonAppBar numberOfItemsInCart={numberOfItemsInCart} />
      <ContainerWithTitle title="Articles available">
        <Typography>{BearCounter()}</Typography>
        <ProductList
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      </ContainerWithTitle>
    </>
  );
};
``;

export default HomePage;
