import React from "react";

interface Context {
  visibleInput: boolean,
  setVisibleInput: (visibleInput: boolean) => void;
}

export const ModificarImporteContext = React.createContext<Context>({
    visibleInput: false,
    setVisibleInput: () =>
    console.warn(
      "** If you area reading this, likely you have forgotten to add the provider on top of your app"
    ),
});