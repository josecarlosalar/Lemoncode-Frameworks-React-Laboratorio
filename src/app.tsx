import React from "react";
import { AppRouter } from "./router/app.router";
import { ProfileProvider } from '@/core/profile';

export const App = () => {
  return (
    <ProfileProvider>
        <AppRouter />
    </ProfileProvider>
  );
};