import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ProductInBag } from "../../Types/types";
import useGlamGrabStore from "../../store/store";
import ActionBar from "../ProductCard/productActionBar";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface ProductReviewCardProps {
  item: ProductInBag;
}

const ProductReviewCard: React.FC<ProductReviewCardProps> = ({
  item,
}: ProductReviewCardProps) => {
  const addToBag = useGlamGrabStore((state) => state.addOneToBag);
  const removeFromBag = useGlamGrabStore((state) => state.removeOneFromBag);
  const removeItemFromBag = useGlamGrabStore(
    (state) => state.removeItemFromBag
  );
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
        <IconButton onClick={() => removeItemFromBag(item.id)}>
          <DeleteIcon />
        </IconButton>
        Remove
      </CardContent>
      <CardActions
        sx={{
          flex: "0 0 auto",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ActionBar
          quantity={item.quantity || 0}
          onAdd={() => addToBag(item)}
          onRemove={() => removeFromBag(item.id)}
        />
        <Typography gutterBottom variant="h5" component="div">
          Total: {item.price * item.quantity}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default ProductReviewCard;
