import React from "react";
import { hiddenCart } from "./hiddenCart.vm";

interface Context {
  visible: hiddenCart,
  setVisible: (visible: hiddenCart) => void;
}

const initial: hiddenCart = { visible: false }

export const HiddenCartContext = React.createContext<Context>({
  visible: initial,
  setVisible: () =>
    console.warn(
      "** If you area reading this, likely you have forgotten to add the provider on top of your app"
    ),
});
