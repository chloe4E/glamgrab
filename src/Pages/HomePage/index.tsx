import React, { useState } from "react";
import ButtonAppBar from "../../components/Header";
import ProductList from "../../components/ProductList";

const HomePage = () => {
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0);
  const handleAddToCart = () => {
    setNumberOfItemsInCart(numberOfItemsInCart + 1);
  };
  const handleRemoveFromCart = () => {
    console.log("handleRemoveFromCart rtigger");
    setNumberOfItemsInCart(numberOfItemsInCart - 1);
  };

  return (
    <>
      <ButtonAppBar numberOfItemsInCart={numberOfItemsInCart} />
      <ProductList
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
      />
    </>
  );
};

export default HomePage;
