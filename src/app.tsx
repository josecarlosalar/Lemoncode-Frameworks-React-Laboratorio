import React from "react";
import { AppRouter } from "./router/app.router";
import { ProfileProvider } from '@/core/profile';
import { HiddenCartProvider } from '@/core/hiddenCart';
import { PictureProvider } from '@/core/picture';
import { CartLenProvider } from "@/core/cartLength";
import { TicketBuyProvider } from "@/core/ticketBuy";
import { PedidosProvider, MaterialesPedidoProvider} from "@/core/pedidos";
import { SelectedPedidoProvider } from "./core/pedidos/selectedPedido.provider";
import { ModificarImporteProvider } from "./core/pedidos/modificarImporte.provider";
import { NuevoImporteProvider } from "./core/pedidos/newImporte.provider";

export const App = () => {
  return (
    <ProfileProvider>
      <PictureProvider>
        <TicketBuyProvider>
          <CartLenProvider>
            <HiddenCartProvider>
              <PedidosProvider>
                <MaterialesPedidoProvider>
                  <SelectedPedidoProvider>
                    <ModificarImporteProvider>
                      <NuevoImporteProvider>
                        <AppRouter />
                      </NuevoImporteProvider>
                    </ModificarImporteProvider>
                  </SelectedPedidoProvider>
                </MaterialesPedidoProvider>
              </PedidosProvider>
            </HiddenCartProvider>
          </CartLenProvider>
        </TicketBuyProvider>
      </PictureProvider>
    </ProfileProvider>
  );
};