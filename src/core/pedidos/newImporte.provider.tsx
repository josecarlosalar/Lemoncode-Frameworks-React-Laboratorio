import React from "react";
import { NuevoImporteContext } from "./newImporte.context";

interface Props {
    children: React.ReactNode;
  }

export const NuevoImporteProvider: React.FC<Props> = ({ children }) => {
  const [nuevoImporte, setNuevoImporte] = React.useState<number>(0);

  return (
    <NuevoImporteContext.Provider
      value={{
        nuevoImporte,
        setNuevoImporte
      }}
    >
      {children}
    </NuevoImporteContext.Provider>
  );
};