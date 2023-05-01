import React, { useContext, useState } from 'react';
import { ImageComponent } from './image.component';
import { PictureProvider } from '@/core/picture/picture.provider';
import { GalleryLayout } from '@/layout';
import { HiddenCartContext } from '@/core/hiddenCart';
import { GalleryLayoutHiddenCart } from '@/layout/hiddenCar.layout';
import { Image } from '@/core/picture/picture.vm';
import { getImage } from './api/gallery.api';

export const ImageContainer = () => {
    const { visible } = useContext(HiddenCartContext);
    const [imageGallery, setImageGallery] = useState([]);
    const { setVisible } = useContext(HiddenCartContext);

    const sortList = (list:Image[]): Image[] => {
        return list.sort((a, b) => a.title.localeCompare(b.title));
    }

    const handleHidden = () => {
        setVisible(visible => !visible)
    }

    const datosPagina = (page) => {
        getImage(page).then((data: Image[]) => {
            setImageGallery(sortList(data)); 
        })
    }
 
  return (
    <>
        <PictureProvider>
        {visible ? (
            <div>
                <GalleryLayout>
                    <ImageComponent handleHidden={handleHidden} imageGallery={imageGallery} setImageGallery={setImageGallery} datosPagina={datosPagina} sortList={sortList}/>
                </GalleryLayout>
            </div>
        ) : (
            <div>
                <GalleryLayoutHiddenCart>
                    <ImageComponent handleHidden={handleHidden} imageGallery={imageGallery} setImageGallery={setImageGallery} datosPagina={datosPagina} sortList={sortList}/>
                </GalleryLayoutHiddenCart>
            </div>
        )}
        </PictureProvider>
    </>
  )
}
