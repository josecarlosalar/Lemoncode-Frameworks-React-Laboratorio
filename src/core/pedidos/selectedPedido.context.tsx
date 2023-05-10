import React from "react";

interface Context {
  selectedPedido: number,
  setSelectedPedido: (pedido: number) => void;
}

export const SelectedPedidoContext = React.createContext<Context>({
    selectedPedido: 1,
    setSelectedPedido: () =>
    console.warn(
      "** If you area reading this, likely you have forgotten to add the provider on top of your app"
    ),
});