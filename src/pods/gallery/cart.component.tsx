import React, { useContext, useEffect, useState } from 'react';
import { ImageContext } from '@/core/picture';
import { TicketBuyContext } from '@/core/ticketBuy';
import { Box, Button, Grid } from '@mui/material';
import classes from './image.styles.css';
import { CartLengthContext } from '@/core/cartLength';
import { ListCart } from './components';
import { useNavigate } from 'react-router-dom';
import { routes } from '@/router';

export const CartComponent = () => {
const { imageList } = useContext(ImageContext);
const { ticketBuy, setTicketBuy } = useContext(TicketBuyContext);
const { setCartLength } = useContext(CartLengthContext);
const [ imageCart, setImageCart ] = useState([]);
const navigate = useNavigate();

useEffect(()=>{
    const img = imageList.filter((img) => img.selected === true);
    setImageCart(img);
    setCartLength(img.length);
    setTicketBuy(img);
},[imageList]);

  return (
    <>
        <div className={classes.headCart}>
            <span className={classes.titleTicket}>Ticket</span>
        </div>
        <Box className={classes.box}
            sx={{
                height: 400,
                backgroundColor: 'white'
            }}
            >
            <Grid container item xs={12} md={12}>
                <Grid  className={classes.listCart} item xs={12} sm={12} md={12} lg={12}>
                    <ListCart imageCart={imageCart}/>
                </Grid>
                <Grid  className={classes.checkout} item xs={12} sm={12} md={12} lg={12}>
                    <Button disabled={ticketBuy.length === 0} onClick={()=>navigate(routes.checkoutpay)} variant="contained" color="success">
                        Checkout
                    </Button>
                </Grid>
            </Grid>
        </Box>
    </>
  )
}
