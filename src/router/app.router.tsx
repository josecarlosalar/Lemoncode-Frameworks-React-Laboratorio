import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginScene, ListScene, RickMortyScene, DetailScene, GalleryScene, CheckoutScene, GraciasScene } from "@/scenes";
import { switchRoutes } from "@/router";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginScene />} />
        <Route path={switchRoutes.list} element={<ListScene />} />
        <Route path={switchRoutes.detail} element={<DetailScene />}/>
        <Route path={switchRoutes.rickmorty} element={<RickMortyScene />}/>
        <Route path={switchRoutes.gallery} element={<GalleryScene />}/>
        <Route path={switchRoutes.checkoutpay} element={<CheckoutScene />}/>
        <Route path={switchRoutes.gracias} element={<GraciasScene />}/>
      </Routes>
    </BrowserRouter>
  );
};
