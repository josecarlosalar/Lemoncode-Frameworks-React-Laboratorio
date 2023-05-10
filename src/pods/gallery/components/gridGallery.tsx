import React, { useContext } from 'react';
import { ImageContext } from '@/core/picture';
import { Grid, Card, CardActionArea, CardContent, Typography, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import classes from '../image.styles.css';

interface Props {
    imageGallery: [];
    handleChange: () => void;
}

export const GridGallery = (Props) => {
const {imageGallery, handleChange} = Props;
const { imageList } = useContext(ImageContext);

const isImageSelected = (image) =>{
    return !!imageList.find(item => item.id === image.id && item.selected);
}

  return (
    <>
        {imageGallery.map((image) => (
            <Grid key={image.id} className={classes.gridCard} item xs={12} sm={12} md={4} lg={3}>
                <Card  sx={{ maxWidth: 245 }} className={classes.card} >
                    <CardActionArea>
                    <img
                        src={`${image.picUrl}?w=248&fit=crop&auto=format`}
                        srcSet={`${image.picUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={image.title}
                        loading="lazy"
                        height= "180"
                        
                    />
                        <CardContent>
                        <h3>{image.title}</h3>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox checked={isImageSelected(image)} onChange={(e)=>handleChange(e,image)} />} label="Comprar" />
                        </FormGroup>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            ))
        }
                    
    </>
  )
}
