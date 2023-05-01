import React from "react";
import { HiddenCartContext } from "./hiddenCart.context";

interface Props {
    children: React.ReactNode;
  }

export const HiddenCartProvider: React.FC<Props> = ({ children }) => {
  const [visible, setVisible] = React.useState(true);

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