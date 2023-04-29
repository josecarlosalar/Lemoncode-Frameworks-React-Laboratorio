import { images } from '@/assets/images';

export const getImage = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(images);
        }, 500);
    });
}