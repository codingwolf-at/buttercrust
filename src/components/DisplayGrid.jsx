import { Container, Grid } from "@mui/material";
import { PizzaCard } from "./PizzaCard";

export const DisplayGrid = () => {
  const pizza = {
    "id": 1,
    "name": "Margherita",
    "description": "A classic delight with 100% Real mozzarella cheese",
    "isVeg": true,
    "rating": 3.5,
    "price": 239,
    "img_url": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Pizza_on_stone.jpg",
    "size": [{
      "isRadio": true,
      "title": "choose size",
      "items": [{
          "size": "Regular"
        },
        {
          "size": "Medium"
        },
        {
          "size": "Large"
        }
      ]
    }],
    "toppings": [{
      "isRadio": false,
      "title": "choose topping(s)",
      "items": [{
          "name": "Red Pepper"
        },
        {
          "name": "Onion"
        },
        {
          "name": "Grilled Mushroom"
        },
        {
          "name": "Extra Cheese"
        },
        {
          "name": "Black Olive"
        }
      ]
    }]
  }
  return (
    <Container maxWidth='lg'>
      <Grid container spacing={5}>
        <PizzaCard pizza={pizza} />
        <PizzaCard pizza={pizza} />
        <PizzaCard pizza={pizza} />
        <PizzaCard pizza={pizza} />
        <PizzaCard pizza={pizza} />
        <PizzaCard pizza={pizza} />
        <PizzaCard pizza={pizza} />
        <PizzaCard pizza={pizza} />
        <PizzaCard pizza={pizza} />
        <PizzaCard pizza={pizza} />

      </Grid>
    </Container>
  )
}