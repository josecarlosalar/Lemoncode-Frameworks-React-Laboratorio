import React from "react";
import { MaterialesPedidoContext } from "./materialesPedido.context";
import { MaterialesPedido } from "@/pods/pedidos/pedidos.vm";

interface Props {
    children: React.ReactNode;
  }

export const MaterialesPedidoProvider: React.FC<Props> = ({ children }) => {
  const [materialesPedido, setMaterialesPedido] = React.useState<MaterialesPedido[]>([]);

  return (
    <MaterialesPedidoContext.Provider
      value={{
        materialesPedido,
        setMaterialesPedido
      }}
    >
      {children}
    </MaterialesPedidoContext.Provider>
  );
};