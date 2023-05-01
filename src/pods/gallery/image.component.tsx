import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './image.styles.css';
import { ImageContext } from '@/core/picture';
import { CartLengthContext } from '@/core/cartLength';
import { HeadGridImage } from './components/headGridImage';
import { GridGallery } from './components/gridGallery';
import { Image } from '@/core/picture/picture.vm';

interface Props {
    handleHidden: () => void;
    imageGallery: [];
    setImageGallery: () => void;
    datosPagina: () => void;
    sortList:() => void;
}

export const ImageComponent = (Props) => {
    const { handleHidden, imageGallery, setImageGallery, datosPagina, sortList} = Props;
    const { imageList, setImageList } = useContext(ImageContext);
    const { setCartLength } = useContext(CartLengthContext);
    const { page } = useParams();

    const handleSelected = (selected:boolean, image) => {
        const filterImageGallery = imageGallery.filter((item) => item.id !== image.id); 
        const filterImageList = imageList.filter((item) => item.id !== image.id); 
        const { id, title, picUrl } = image;
        const newImageGallery:Image[] = [...filterImageGallery, { id, title, picUrl, selected: selected}];
        const newImageList:Image[] = selected===true ? [...filterImageList, { id, title, picUrl, selected: selected}] : [...filterImageList];
        setImageGallery(sortList(newImageGallery));
        setImageList (sortList(newImageList));
        };

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>, image: Image) => {
        handleSelected(e.target.checked,image);
    };

    useEffect(()=>{
        datosPagina(page);
    },[page]);
    
    useEffect(()=>{
        setImageList(imageList);
        setCartLength(imageList.length);
    },[imageList]);

  return (
    <>  
        <div className={classes.body}>
                <HeadGridImage page={page} handleHidden={handleHidden}/>
            <div className={classes.gridGallery}>
                <GridGallery imageGallery={imageGallery} handleChange={handleChange}/>
            </div>
        </div>
    </>
  )
}


