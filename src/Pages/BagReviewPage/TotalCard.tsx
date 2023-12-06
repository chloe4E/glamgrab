import { Card, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import useGlamGrabStore from "../../store/store";
import { MarginMediumPx } from "../../utils/styles";

export const TotalCard = () => {
  const { productsInBag } = useGlamGrabStore();
  const [amountToPay, setAmountToPay] = useState(0);

  useEffect(() => {
    const result = productsInBag.reduce(
      (total, product) =>
        total + (product.quantity || 0) * Number(product.price),
      0
    ) as number;

    setAmountToPay(result);
  }, [productsInBag]);
  return (
    <Card
      className="total-card"
      style={{
        height: "200px",
        display: "flex",
        flexDirection: "column",
        padding: MarginMediumPx,
        gap: MarginMediumPx,
      }}
    >
      <Typography variant="h6" component="div">
        Total Amount:
      </Typography>
      <Typography variant="h6" component="div">
        {amountToPay}
      </Typography>
      <Button variant="contained">Click To Pay</Button>
    </Card>
  );
};
