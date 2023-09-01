import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CheckroomIcon from "@mui/icons-material/Checkroom";

interface ButtonAppBarProps {
  numberOfItemsInCart: number;
}

const ButtonAppBar: React.FC<ButtonAppBarProps> = ({ numberOfItemsInCart }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
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

          <IconButton>
            <ShoppingBasketIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ ml: 1 }}>
            {numberOfItemsInCart}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
