import {
  Box,
  IconButton,
  Typography,
} from "../../../node_modules/@mui/material/index";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

interface ActionBarProps {
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}

const ActionBar: React.FC<ActionBarProps> = ({ quantity, onAdd, onRemove }) => {
  if (quantity == 0) {
    return (
      <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
        <IconButton aria-label="addToCart" onClick={onAdd}>
          <AddShoppingCartIcon />
        </IconButton>
      </Box>
    );
  } else {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton aria-label="previous" onClick={onRemove}>
          <IndeterminateCheckBoxIcon color="warning" />
        </IconButton>

        <Typography gutterBottom variant="h5" component="div">
          {quantity}
        </Typography>

        <IconButton aria-label="next" onClick={onAdd}>
          <AddBoxIcon />
        </IconButton>
      </Box>
    );
  }
};

export default ActionBar;
