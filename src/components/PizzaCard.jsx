import { AddShoppingCart } from "@mui/icons-material"
import { Card, CardContent, Rating, CardMedia, CardActions, Button, Typography, Grid, Chip, Box } from "@mui/material"

export const PizzaCard = ({ pizza }) => {
  return (
    <Grid item xs={12} lg={4}> 
      <Card>
        <CardMedia 
          component="img"
          height="200"
          image={pizza.img_url}
          alt="dish image"
        />
        <CardContent sx = {{ position: 'relative' }}>
          <Typography gutterBottom variant="h5" component="h2">
              { pizza.name } 
          </Typography>
          <Box 
            sx = {{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem"
            }}
          >
            <Rating name="pizza-rating" precision={0.5} value={pizza.rating} readOnly />
            <Chip label={pizza.isVeg ? "Veg" : "Non-Veg"} size="small" sx = {{ marginLeft: "0.5rem" }} />
          </Box>
          <Typography variant="body1" color="text.secondary">
            { pizza.description }
          </Typography>
          <Typography variant="h6" component="h3">
            ₹{ pizza.price }
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='large' color="primary" variant="contained" fullWidth startIcon={<AddShoppingCart />}>
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
} 