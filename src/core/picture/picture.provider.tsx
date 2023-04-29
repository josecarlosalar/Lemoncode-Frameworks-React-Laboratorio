import React from "react";
import { ImageContext } from "./picture.context";
import { Image } from "./picture.vm";

interface Props {
    children: React.ReactNode;
  }

export const PictureProvider: React.FC<Props> = ({ children }) => {
  const [imageList, setImageList] = React.useState<Image[]>([]);

  return (
    <ImageContext.Provider
      value={{
        imageList,
        setImageList
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};