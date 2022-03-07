import { AddShoppingCart } from "@mui/icons-material"
import { Card, CardContent, Rating, CardMedia, CardActions, Button, Typography, Grid, Chip, Modal, Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material"
import { useState } from "react"
import { useStore } from "../contexts"

export const PizzaCard = ({ pizza }) => {
  const [modalOpen, modalSetOpen] = useState(false);
  const [size, setSize] = useState('regular');
  const { dispatch } = useStore();

  const handleOpen = () => modalSetOpen(true);

  const handleClose = () => {
    dispatch({ type: "ADD_TO_CART", payload: { ...pizza, sizeChosen: size} })
    modalSetOpen(false);
  };
  
  const handleRadioChange = (event) => {
    setSize(event.target.value);
  };
 
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column"
  };

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
          <Button onClick={handleOpen} size='large' color="primary" variant="contained" fullWidth startIcon={<AddShoppingCart />}>
            Add to cart
          </Button>
          <Modal
            open={modalOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
                Confirm Order Item
              </Typography>
              <FormControl>
                <FormLabel>Size</FormLabel>
                <RadioGroup
                  name="radio-buttons-group"
                  value={size}
                  onChange={handleRadioChange}
                  row
                >
                  <FormControlLabel value="regular" control={<Radio />} label="Regular" />
                  <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                  <FormControlLabel value="large" control={<Radio />} label="Large" />
                </RadioGroup>
              </FormControl>
              <FormControl>
                {/* <FormLabel>Toppings</FormLabel> */}
                {/* <FormControlLabel onChange={(e) => handleCheckboxChange(e)} control={<Checkbox />} label="Label" />
                <FormControlLabel onChange={(e) => handleCheckboxChange(e)} control={<Checkbox />} label="Disabled" /> */}
              </FormControl>
              <Button onClick={handleClose} variant="container">
                Done
              </Button>
            </Box>
          </Modal>
        </CardActions>
      </Card>
    </Grid>
  )
} 