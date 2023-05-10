import React from "react";
import { ModificarImporteContext } from "./modificarImporte.context";

interface Props {
    children: React.ReactNode;
  }

export const ModificarImporteProvider: React.FC<Props> = ({ children }) => {
  const [visibleInput, setVisibleInput] = React.useState<boolean>();

  return (
    <ModificarImporteContext.Provider
      value={{
        visibleInput,
        setVisibleInput
      }}
    >
      {children}
    </ModificarImporteContext.Provider>
  );
};