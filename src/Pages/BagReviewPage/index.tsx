import React, { useState } from "react";
import ButtonAppBar from "../../components/Header";
import { ContainerWithTitle } from "../../components/PageLayout";
import ProductReviewCard from "../../components/ProductReviewCard";
import { Item } from "../../Types/types";

interface BagReviewPageProps {
  items: Item[];
}

const BagReviewPage: React.FC<BagReviewPageProps> = ({
  items,
}: BagReviewPageProps) => {
  const totalAmount: number = items?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.unitPrice,
    0
  );

  return (
    <>
      <ButtonAppBar numberOfItemsInCart={totalAmount} />
      <ContainerWithTitle title="Bag Review:">
        {items?.map((item) => {
          return <ProductReviewCard item={item} />;
        })}
      </ContainerWithTitle>
    </>
  );
};

export default BagReviewPage;
