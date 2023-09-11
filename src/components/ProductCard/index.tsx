import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Product } from "../../Types/types";
import { useState } from "react";
import ActionBar from "./productActionBar";
import { MarginSmallPx, MarginMediumPx } from "../../utils/styles";
import { Chip } from "@mui/material";
import CardContentWithReadMore from "./CardContentWithReadMore";

interface ProductCardProps {
  product: Product;
  onAddProductToCart: () => void;
  onRemoveProductFromCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddProductToCart,
  onRemoveProductFromCart,
}) => {
  const [quantity, setQuantity] = useState(0);

  const pricePerUnitWithCurrency = (price: number, currency: string) => {
    return `${price.toFixed(2)}${currency}`;
  };

  const handleAdd = () => {
    setQuantity(quantity + 1);
    onAddProductToCart();
  };
  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      onRemoveProductFromCart();
    }
  };

  return (
    <Card sx={{ minHeight: 450, p: MarginSmallPx }}>
      <CardMedia
        sx={{
          height: 140,
          marginBottom: MarginSmallPx,
        }}
        image={product.image}
        title={product.title}
      />
      <Chip label={product.category} size="small" />

      <CardContent
        sx={{
          p: 0,
        }}
      >
        <Typography
          gutterBottom
          variant="subtitle1"
          noWrap
          style={{
            overflow: "hidden", // Hides overflow text
            textOverflow: "ellipsis", // Displays ellipsis for overflow text
            whiteSpace: "nowrap", // Prevents line breaks
            marginTop: MarginMediumPx,
            marginBottom: MarginSmallPx,
            textAlign: "left",
          }}
        >
          {product.title}
        </Typography>
        <Typography
          variant="subtitle1"
          color="warning.main"
          sx={{
            textAlign: "left",
            fontWeight: "bold",
            marginBottom: MarginMediumPx,
          }}
        >
          {pricePerUnitWithCurrency(Number(product.price), "€")}
        </Typography>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 0,
            marginBottom: MarginMediumPx,
          }}
        >
          <ActionBar
            quantity={quantity}
            onAdd={handleAdd}
            onRemove={handleRemove}
          />
        </CardActions>

        {quantity ? (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textAlign: "right" }}
          >
            You have currently {quantity} piece(s) of this item in your bag:{" "}
            <br />
            {Number(product.price) * Number(quantity)}€
          </Typography>
        ) : (
          ""
        )}
        <CardContentWithReadMore text={product.description} />
      </CardContent>
    </Card>
  );
};
export default ProductCard;
