import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginScene, ListScene } from "@/scenes";
import { DetailPage } from "@/scenes";
import { switchRoutes } from "@/router";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginScene />} />
        <Route path={switchRoutes.list} element={<ListScene />} />
        <Route path={switchRoutes.detail} element={<DetailPage />}/>
      </Routes>
    </BrowserRouter>
  );
};
