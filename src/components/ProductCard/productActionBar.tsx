import {
  Box,
  IconButton,
  Typography,
} from "../../../node_modules/@mui/material/index";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { MarginSmallPx } from "../../utils/styles";

interface ActionBarProps {
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}

const ActionBar: React.FC<ActionBarProps> = ({ quantity, onAdd, onRemove }) => {
  if (quantity == 0) {
    return (
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "text.secondary",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "primary.dark",
            opacity: [0.9, 0.8, 0.7],
          },

          width: "100%",
        }}
      >
        <IconButton aria-label="addToCart" onClick={onAdd}>
          <Typography
            variant="overline"
            display="block"
            color="white"
            sx={{ fontWeight: "bold", marginRight: MarginSmallPx }}
          >
            Add to bag
          </Typography>
          <ArrowForwardOutlinedIcon sx={{ color: "white" }} />
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
