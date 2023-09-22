import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Product } from "../../Types/types";
import ActionBar from "./productActionBar";
import { MarginSmallPx, MarginMediumPx } from "../../utils/styles";
import { Chip } from "@mui/material";
import CardContentWithReadMore from "./CardContentWithReadMore";
import useGlamGrabStore from "../../store/store";
import { useNavigate } from "react-router-dom";
import pricePerUnitWithCurrency from "../../utils/helper";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const addToBag = useGlamGrabStore((state) => state.addToBag);
  const removeFromBag = useGlamGrabStore((state) => state.removeFromBag);
  const currentlyInBag = useGlamGrabStore((state) =>
    state.productsInBag.find((p) => p.id == product.id)
  );
  return (
    <Card sx={{ minHeight: 450, p: MarginSmallPx }}>
      <CardMedia
        sx={{
          height: 140,
          marginBottom: MarginSmallPx,
        }}
        image={product.image}
        title={product.title}
        onClick={() => {
          navigate(`productDetailPage/${product.id}`);
        }}
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
            quantity={currentlyInBag ? currentlyInBag?.quantity || 0 : 0}
            onAdd={() => addToBag(product)}
            onRemove={() => removeFromBag(product.id)}
          />
        </CardActions>

        {currentlyInBag?.quantity ? (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textAlign: "right" }}
          >
            You have currently {currentlyInBag.quantity} piece(s) of this item
            in your bag: <br />
            {Number(product.price) * Number(currentlyInBag.quantity)}€
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
