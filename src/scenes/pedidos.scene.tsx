import React from "react";
import { CenterLayout } from "@/layout/center.layout";
import { PedidosContainer } from "@/pods/pedidos";

export const PedidosScene: React.FC = () => {
  
  return (
    <CenterLayout>
        <PedidosContainer />
    </CenterLayout>
  );
};