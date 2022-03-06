import { Typography, AppBar, Toolbar } from "@mui/material";

export const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h4">
          Buttercrust
        </Typography>
      </Toolbar>
    </AppBar>
  )
}