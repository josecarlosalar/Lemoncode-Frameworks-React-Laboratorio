import React from  "react";
import { Navbar } from "@/ui";
import classes from "./container.layout.styles.css";

interface Props {
    children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({children}) => {
    return (
        <div className={classes.container}>
            <Navbar />
            <main>{children}</main>
        </div>
    )
}