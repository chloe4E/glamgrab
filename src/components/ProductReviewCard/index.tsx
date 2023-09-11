import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ProductInBag } from "../../Types/types";
import useGlamGrabStore from "../../store/store";
import ActionBar from "../ProductCard/productActionBar";

interface ProductReviewCardProps {
  item: ProductInBag;
}

const ProductReviewCard: React.FC<ProductReviewCardProps> = ({
  item,
}: ProductReviewCardProps) => {
  const addToBag = useGlamGrabStore((state) => state.addToBag);
  const removeFromBag = useGlamGrabStore((state) => state.removeFromBag);
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        maxWidth: "100%",
        padding: "8px",
      }}
    >
      <CardMedia
        component="img"
        alt="item-miniature"
        sx={{ width: 151 }}
        image={item.image}
      />
      <CardContent sx={{ flex: "1" }}>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          flex: "0 0 auto",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <ActionBar
          quantity={item.quantity || 0}
          onAdd={() => addToBag(item)}
          onRemove={() => removeFromBag(item.id)}
        />
      </CardActions>
    </Card>
  );
};

export default ProductReviewCard;
