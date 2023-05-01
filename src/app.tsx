import React from "react";
import { AppRouter } from "./router/app.router";
import { ProfileProvider } from '@/core/profile';
import { HiddenCartProvider } from '@/core/hiddenCart';
import { PictureProvider } from '@/core/picture';
import { CartLenProvider } from "@/core/cartLength";

export const App = () => {
  return (
    <ProfileProvider>
      <PictureProvider>
        <CartLenProvider>
          <HiddenCartProvider>
            <AppRouter />
          </HiddenCartProvider>
        </CartLenProvider>
      </PictureProvider>
    </ProfileProvider>
  );
};