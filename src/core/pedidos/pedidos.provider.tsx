import React from "react";
import { PedidosContext } from "./pedidos.context";
import { Pedido } from "@/pods/pedidos/pedidos.vm";

interface Props {
    children: React.ReactNode;
  }

export const PedidosProvider: React.FC<Props> = ({ children }) => {
  const [pedido, setPedido] = React.useState<Pedido[]>([]);

  return (
    <PedidosContext.Provider
      value={{
        pedido,
        setPedido
      }}
    >
      {children}
    </PedidosContext.Provider>
  );
};