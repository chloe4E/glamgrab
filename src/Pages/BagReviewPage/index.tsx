import React from "react";
import ButtonAppBar from "../../components/Header";
import { ContainerWithTitle } from "../../components/PageLayout";

import ProductReviewList from "../../components/ProductReviewList";
import { Item } from "../../Types/types";

interface BagReviewPageProps {
  items: Item[];
}

const BagReviewPage: React.FC<BagReviewPageProps> = ({
  items,
}: BagReviewPageProps) => {
  // const totalAmount: number = items?.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue.unitPrice,
  //   0
  // );

  return (
    <>
      <ButtonAppBar numberOfItemsInCart={12} />
      <ContainerWithTitle title="Bag Review:">
        <ProductReviewList />
      </ContainerWithTitle>
    </>
  );
};

export default BagReviewPage;
