import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LoginPage } from "@/auth";
import { ListPage, DetailPage } from "@/github-api";
import { switchRoutes } from "@/router";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginPage />} />
        <Route path={switchRoutes.list} element={<ListPage />} />
        <Route path={switchRoutes.detail} element={<DetailPage />}/>
      </Routes>
    </BrowserRouter>
  );
};
