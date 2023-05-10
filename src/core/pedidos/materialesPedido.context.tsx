import React from "react";
import { MaterialesPedido } from "@/pods/pedidos/pedidos.vm";

interface Context {
  materialesPedido: MaterialesPedido[],
  setMaterialesPedido: (pedido: MaterialesPedido[]) => void;
}

export const MaterialesPedidoContext = React.createContext<Context>({
  materialesPedido: [],
  setMaterialesPedido: () =>
    console.warn(
      "** If you area reading this, likely you have forgotten to add the provider on top of your app"
    ),
});
