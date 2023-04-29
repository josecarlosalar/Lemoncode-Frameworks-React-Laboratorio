import React from "react";
import { HiddenCartContext } from "./hiddenCart.context";
import { hiddenCart } from "./hiddenCart.vm";

interface Props {
    children: React.ReactNode;
  }

export const HiddenCartProvider: React.FC<Props> = ({ children }) => {
  const [visible, setVisible] = React.useState<hiddenCart>();

  return (
    <HiddenCartContext.Provider
      value={{
        visible,
        setVisible
      }}
    >
      {children}
    </HiddenCartContext.Provider>
  );
};