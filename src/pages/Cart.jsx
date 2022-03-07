import { Card, CardContent, CardMedia, Container, Grid, Typography, Button } from "@mui/material"
import { ArrowForward } from "@mui/icons-material";
import { useStore } from "../contexts"

export const Cart = () => {
  const { cart } = useStore();

  const totalCartValue = cart.reduce((acc, value) => acc + value.price, 0);

  console.log(totalCartValue);

  return (
    <Container maxWidth="md">
      <Grid container spacing={5} my={3}>
        <Grid item xs={12} lg={6}>
          {
            cart.length > 0
            ? cart.map((pizza) => (
              <Card sx={{ display: "flex", margin: "1rem" }} >
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={pizza.img_url}
                  alt="pizza image"
                />
                <CardContent>
                  <Typography component="div" variant="h5">
                    {pizza.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {pizza.sizeChosen}
                  </Typography>
                  <Typography variant="h6" component="div">
                    ₹{pizza.price}
                  </Typography>
                </CardContent>
              </Card>
            ))
            : "Cart Empty!"
          }
        </Grid>
        <Grid item xs={12} lg={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Container>
            <Typography variant="h4" component="h2" gutterBottom>
              Total cart value: ₹{totalCartValue}
            </Typography>
            <Button variant="contained" startIcon={<ArrowForward />}>
              Checkout
            </Button>
          </Container>
        </Grid>
      </Grid>
    </Container>
  )
}