import React from "react";
import { ListContainer } from "@/pods/list";
import { CenterLayout } from "@/layout";

export const ListScene: React.FC = () => {
    return (
        <CenterLayout>
            <ListContainer />
        </CenterLayout>
      );
}