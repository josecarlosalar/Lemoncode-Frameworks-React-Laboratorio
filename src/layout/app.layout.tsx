import React from  "react";
import { Navbar } from "@/ui";

interface Props {
    children: React.ReactNode;
}


export const AppLayout: React.FC<Props> = ({children}) => {
    return (
    <div className="app-Layout-container">
        <Navbar />
        <main>{children}</main>
    </div>)
}