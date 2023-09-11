import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Item } from "../../Types/types";

interface ProductReviewCardProps {
  item: Item;
}

const ProductReviewCard: React.FC<ProductReviewCardProps> = ({
  item,
}: ProductReviewCardProps) => {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        component="img"
        alt="item-miniature"
        height="140"
        image={item.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ProductReviewCard;
