import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

interface ButtonAppBarProps {
  numberOfItemsInCart: number;
}

const ButtonAppBar: React.FC<ButtonAppBarProps> = ({ numberOfItemsInCart }) => {
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
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton onClick={handleLoginClick}>
            <LoginIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <CheckroomIcon />
            <Typography variant="h6" m={1}>
              Welcome to Glamgrab
            </Typography>
          </Box>
          <Box onClick={handleGoToBagReviewClick}>
            <IconButton>
              <ShoppingBasketIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ ml: 1 }}>
              {numberOfItemsInCart}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
