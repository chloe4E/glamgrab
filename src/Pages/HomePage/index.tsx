import React, { useState } from "react";
import ButtonAppBar from "../../components/Header";
import { ContainerWithTitle } from "../../components/PageLayout";
import ProductList from "../../components/ProductList";

const HomePage = () => {
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0);
  const handleAddToCart = () => {
    setNumberOfItemsInCart(numberOfItemsInCart + 1);
  };
  const handleRemoveFromCart = () => {
    setNumberOfItemsInCart(numberOfItemsInCart - 1);
  };

  return (
    <>
      <ButtonAppBar numberOfItemsInCart={numberOfItemsInCart} />
      <ContainerWithTitle title="Articles available">
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
