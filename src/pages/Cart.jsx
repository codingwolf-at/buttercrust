import { Card, CardContent, CardMedia, Container, Grid, Typography, Button, ButtonGroup } from "@mui/material"
import { ArrowForward } from "@mui/icons-material";
import { useStore } from "../contexts"

export const Cart = () => {
  const { cart, dispatch } = useStore();

  const totalCartValue = cart.reduce((acc, value) => acc + (value.price * value.quantity), 0);

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
                  <Typography variant="h6" component="div" gutterBottom>
                    ₹{pizza.price} x {pizza.quantity}
                  </Typography>
                  <ButtonGroup variant="contained" aria-label="outlined button group">
                    <Button onClick={() => dispatch({ type: "DECR_QTY", payload: pizza.id })}>-</Button>
                    <Button disabled>{pizza.quantity}</Button>
                    <Button onClick={() => dispatch({ type: "INCR_QTY", payload: pizza.id })}>+</Button>
                  </ButtonGroup>
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