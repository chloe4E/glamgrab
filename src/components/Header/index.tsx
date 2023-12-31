import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import useGlamGrabStore from "../../store/store";
import { useEffect, useState } from "react";

const ButtonAppBar: React.FC = () => {
  const { productsInBag } = useGlamGrabStore();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const result = productsInBag.reduce(
      (total, product) => total + (product.quantity || 0),
      0
    );
    setTotal(result);
  }, [productsInBag]);

  const navigate = useNavigate();
  const handleLoginClick = () => {
    console.log("navigates");
    navigate("/login");
  };
  const handleGoToBagReviewClick = () => {
    navigate("/bagReview");
  };
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <AppBar position="static">
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            <CheckroomIcon />

            <Typography variant="h6" m={1}>
              Welcome to Glamgrab
            </Typography>
          </Box>
          <IconButton onClick={handleLoginClick}>
            <PersonIcon />
          </IconButton>

          <IconButton onClick={handleGoToBagReviewClick}>
            <ShoppingBasketIcon />
            <Typography variant="h6" component="div" sx={{ ml: 1 }}>
              {total}
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
