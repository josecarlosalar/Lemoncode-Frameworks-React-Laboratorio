import React from "react";
import { CenterLayout } from "@/layout/center.layout";
import { RickMortyContainer } from "@/pods/rickmorty";

export const RickMortyScene: React.FC = () => {
  
  return (
    <CenterLayout>
        <RickMortyContainer />
    </CenterLayout>
  );
};
