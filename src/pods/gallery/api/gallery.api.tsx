import { images, images2 } from '@/assets/images';

export const getImage = (page) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            {page==1 ? resolve(images) : resolve(images2)}
        }, 500);
    });
}