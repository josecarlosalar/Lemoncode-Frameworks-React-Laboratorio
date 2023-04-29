import React, { useContext, useEffect } from 'react';
import { Grid, Card, CardActionArea, CardContent, Typography, Checkbox, FormControlLabel, FormGroup, Button, ButtonGroup } from '@mui/material';
import classes from './image.styles.css';
import { ImageContext } from '@/core/picture';
import { getImage } from './api/gallery.api';
import { Image } from '@/core/picture/picture.vm';

export const ImageComponent = () => {
    const { imageList, setImageList } = useContext(ImageContext);

    const sortList = (list:Image[]): Image[] => {
        return list.sort((a, b) => a.title.localeCompare(b.title));
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>, image) => {
        const filterList = imageList.filter((item) => item.id !== image.id); 
        const { id, title, picUrl } = image;
        const newList:Image[] = [...filterList, { id, title, picUrl, selected: e.target.checked}];
        setImageList (sortList(newList));
        };

      useEffect(()=>{
        getImage().then((data: Image[]) => {
            setImageList(sortList(data)); 
        });
      },[]);
    
      useEffect(()=>{
        // console.log(imageList);
      },[imageList]);

  return (
    <>
        <h3 className={classes.headCart}>Images</h3>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button>Página 1</Button>
            <Button>Página 2</Button>
            <Button>Página 3</Button>
        </ButtonGroup>
        <Grid className={classes.gridGallery} item xs={12} md={12}>
        {imageList.map((image) => (
                    <Grid className={classes.gridCard} key={image.id} item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 245 }} className={classes.card} >
                            <CardActionArea>
                            <img
                                src={`${image.picUrl}?w=248&fit=crop&auto=format`}
                                srcSet={`${image.picUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={image.title}
                                loading="lazy"
                                height= "180"
                                
                            />
                                <CardContent>
                                <Typography gutterBottom variant="h6">
                                    {image.title}
                                </Typography>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox checked={image.selected} onChange={(e)=>handleChange(e,image)} />} label="Comprar" />
                                </FormGroup>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    ))
                }
        </Grid>
    </>
  )
}


