import React from "react";

interface Context {
  cartLength: number,
  setCartLength: (cartLength) => void;
}

export const CartLengthContext = React.createContext<Context>({
  cartLength: 0,
  setCartLength: () =>
    console.warn(
      "** If you area reading this, likely you have forgotten to add the provider on top of your app"
    ),
});
