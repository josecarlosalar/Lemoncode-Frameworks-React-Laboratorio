import React from  "react";
import { Navbar } from "@/ui";
import classes from "./gallery.layout.styles.css";
import { Grid } from "@mui/material";

interface Props {
    children: React.ReactNode;
}

export const GalleryLayoutHiddenCart: React.FC<Props> = ({children}) => {

    return (
    <>
        <Navbar />
        <Grid container spacing={1} className={classes.contenedor}>
          <Grid item xs={12} className={classes.column2}>
            <main>{children}</main>
          </Grid>
        </Grid>
    </>)
}