import React from "react";
import { CenterLayout } from "@/layout/center.layout";
import { PedidoEnviado } from "@/pods/pedidos/components/pedidoEnviado";

export const PedidoEnviadoScene: React.FC = () => {
  
  return (
    <CenterLayout>
        <PedidoEnviado />
    </CenterLayout>
  );
};