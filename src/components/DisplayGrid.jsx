import { Container, Grid } from "@mui/material";
import { useStore } from "../contexts/";
import { PizzaCard } from "./PizzaCard";

export const DisplayGrid = () => {
  const { menu } = useStore();
  return (
    <Container maxWidth='lg'>
      <Grid container spacing={5}>
        {
          menu.length > 0
          ? menu.map(pizza => (<PizzaCard pizza={pizza} />))
          : "Loading..."
        }
      </Grid>
    </Container>
  )
}