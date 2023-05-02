import React from "react";
import { AppRouter } from "./router/app.router";
import { ProfileProvider } from '@/core/profile';
import { HiddenCartProvider } from '@/core/hiddenCart';
import { PictureProvider } from '@/core/picture';
import { CartLenProvider } from "@/core/cartLength";
import { TicketBuyProvider } from "./core/ticketBuy";

export const App = () => {
  return (
    <ProfileProvider>
      <PictureProvider>
        <TicketBuyProvider>
          <CartLenProvider>
            <HiddenCartProvider>
              <AppRouter />
            </HiddenCartProvider>
          </CartLenProvider>
        </TicketBuyProvider>
      </PictureProvider>
    </ProfileProvider>
  );
};