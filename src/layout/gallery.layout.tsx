import React from  "react";
import { Navbar } from "@/ui";
import classes from "./gallery.layout.styles.css";
import { Grid } from "@mui/material";
import { CartContainer } from "@/pods/gallery/cart.container";

interface Props {
    children: React.ReactNode;
}

export const GalleryLayout: React.FC<Props> = ({children}) => {

    return (
    <>
        <Navbar />
        <Grid container spacing={1} className={classes.contenedor}>
          <Grid item xs={8} className={classes.column}>
            <main>{children}</main>
          </Grid>
          <Grid item xs={4} className={classes.column}>
            <CartContainer />
          </Grid>
        </Grid>
    </>)
}