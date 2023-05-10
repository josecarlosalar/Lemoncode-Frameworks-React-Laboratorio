import React from "react";
import { Pedido } from "@/pods/pedidos/pedidos.vm";

interface Context {
  pedido: Pedido[],
  setPedido: (pedido: Pedido[]) => void;
}

export const PedidosContext = React.createContext<Context>({
  pedido: [],
  setPedido: () =>
    console.warn(
      "** If you area reading this, likely you have forgotten to add the provider on top of your app"
    ),
});
