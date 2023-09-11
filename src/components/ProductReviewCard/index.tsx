import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ProductInBag } from "../../Types/types";

interface ProductReviewCardProps {
  item: ProductInBag;
}

const ProductReviewCard: React.FC<ProductReviewCardProps> = ({
  item,
}: ProductReviewCardProps) => {
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
        <Button size="small">-</Button>
        <Typography
          variant="body2"
          sx={{ margin: "0", padding: "0", minWidth: "1em" }}
        >
          0 {/* Total amount */}
        </Typography>
        <Button size="small">+</Button>
      </CardActions>
    </Card>
  );
};

export default ProductReviewCard;
