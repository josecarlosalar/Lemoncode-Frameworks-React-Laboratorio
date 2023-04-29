import React, { useContext, useEffect, useState } from 'react';
import { ImageContext } from '@/core/picture';
import { HiddenCartContext } from '@/core/hiddenCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { Badge, Box, Button, Grid } from '@mui/material';
import classes from '../image.styles.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {hiddenCart} from '@/core/hiddenCart';

export const CartComponent = () => {
const { imageList, setImageList } = useContext(ImageContext);
const { visible, setVisible } = useContext(HiddenCartContext);
const [ imageCart, setImageCart ] = useState([]);

const handleDelete = (image) => {
    const { id, title, picUrl } = image;
    const filterList = imageList.filter((item) => item.id !== id); 
    setImageList ([...filterList, { id, title, picUrl, selected:false }].sort((a, b) => a.title.localeCompare(b.title)));
};

const handleHidden = () => {
    const newStateVisible:hiddenCart = {visible: !visible};
    setVisible(newStateVisible);
}

useEffect(()=>{
    const img = imageList.filter((img) => img.selected === true);
    setImageCart(img);
},[imageList]);

  return (
    <>
        <Badge onClick={()=>handleHidden()} className={classes.headBadge} badgeContent={imageCart.length} color="primary">
            <ShoppingCartIcon color="action" />
        </Badge>
        <Box className={classes.box}
            sx={{
                width: 370,
                height: 400,
                backgroundColor: 'white'
            }}
            >
        <Grid container item xs={12} md={12}>
            <Grid  className={classes.listCart} item xs={12} sm={12} md={12} lg={12}>
            {imageCart.map((image)=>{
                return <h4 key={image.id}>
                    <span className={classes.btnRemove}>
                        <Button onClick={()=>handleDelete(image)} variant="outlined" startIcon={<DeleteIcon />}></Button>
                    </span>Id: {image.id} - Artículo: {image.title}</h4>
            })}
            </Grid>
            <Grid  className={classes.checkout} item xs={12} sm={12} md={12} lg={12}>
                <Button variant="contained" color="success">
                    Checkout
                </Button>
            </Grid>
        </Grid>

        </Box>
    </>
  )
}
