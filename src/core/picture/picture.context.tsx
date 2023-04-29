import React from "react";
import { Image } from "./picture.vm";

interface Context {
  imageList: Image[],
  setImageList: (imageList: Image[]) => void;
}

export const ImageContext = React.createContext<Context>({
  imageList: [],
  setImageList: () =>
    console.warn(
      "** If you area reading this, likely you have forgotten to add the provider on top of your app"
    ),
});
