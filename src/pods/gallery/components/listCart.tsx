import React, { useContext, useState } from 'react';
import { ImageContext } from '@/core/picture';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import classes from '../image.styles.css';

interface Props {
    imageCart: []
}

export const ListCart = (Props) => {
const { imageList, setImageList } = useContext(ImageContext);
const { imageCart } = Props;

const handleDelete = (image) => {
    const { id } = image;
    const filterList = imageList.filter((item) => item.id !== id); 
    setImageList ([...filterList].sort((a, b) => a.title.localeCompare(b.title)));
};

  return (
        <>
        {imageCart.map((image)=>{
                return <h4 key={image.id}>
                    <span className={classes.btnRemove}>
                        <Button onClick={()=>handleDelete(image)} variant="outlined" startIcon={<DeleteIcon />}></Button>
                    </span>Id: {image.id} - {image.title}</h4>
            })}
        </>
  )
}
