import React from "react";
import { SelectedPedidoContext } from "./selectedPedido.context";

interface Props {
    children: React.ReactNode;
  }

export const SelectedPedidoProvider: React.FC<Props> = ({ children }) => {
  const [selectedPedido, setSelectedPedido] = React.useState<number>(0);

  return (
    <SelectedPedidoContext.Provider
      value={{
        selectedPedido,
        setSelectedPedido
      }}
    >
      {children}
    </SelectedPedidoContext.Provider>
  );
};