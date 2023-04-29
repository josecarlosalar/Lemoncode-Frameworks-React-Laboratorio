import React, { useContext } from 'react'
import { ImageComponent } from './image.component'
import { ImageContext } from '@/core/picture/picture.context';
import { PictureProvider } from '@/core/picture/picture.provider';
import { GalleryLayout } from '@/layout';
import { HiddenCartContext } from '@/core/hiddenCart';
import { GalleryLayoutHiddenCart } from '@/layout/hiddenCar.layout';

export const ImageContainer = () => {
    const { visible, setVisible } = useContext(HiddenCartContext);
 
  return (
    <>
        <PictureProvider>
        {visible ? (
            <div>
            <GalleryLayout>
                <ImageComponent />
            </GalleryLayout>
            </div>
        ) : (
            <div>
            <GalleryLayoutHiddenCart>
                <ImageComponent />
            </GalleryLayoutHiddenCart>
            </div>
        )}
        </PictureProvider>
    </>
  )
}
