import React from "react";

interface Context {
  nuevoImporte: number,
  setNuevoImporte: (nuevoImporte: number) => void;
}

export const NuevoImporteContext = React.createContext<Context>({
    nuevoImporte: 0,
    setNuevoImporte: () =>
    console.warn(
      "** If you area reading this, likely you have forgotten to add the provider on top of your app"
    ),
});