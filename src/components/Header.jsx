import { ShoppingCart } from "@mui/icons-material";
import { Typography, AppBar, Toolbar, Button } from "@mui/material";

export const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar sx = {{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Typography variant="h4" component="h1">
          Buttercrust
        </Typography>
        <Button href="/cart" startIcon={<ShoppingCart />} variant="outlined" sx={{ color: "white", border: "2px solid white" }}>
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  )
}