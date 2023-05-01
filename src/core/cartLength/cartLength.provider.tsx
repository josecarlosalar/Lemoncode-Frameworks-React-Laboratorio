import React from "react";
import { CartLengthContext } from "./cartLength.context";

interface Props {
    children: React.ReactNode;
  }

export const CartLenProvider: React.FC<Props> = ({ children }) => {
  const [cartLength, setCartLength] = React.useState(0);

  return (
    <CartLengthContext.Provider
      value={{
        cartLength,
        setCartLength
      }}
    >
      {children}
    </CartLengthContext.Provider>
  );
};