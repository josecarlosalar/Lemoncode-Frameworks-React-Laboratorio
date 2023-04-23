import React, { useState } from 'react'
import { DialogTitle, CardMedia, DialogContent, DialogContentText, DialogActions, Button, Dialog } from '@mui/material'
import { Character } from '@/pods';

interface Props {
    openProp: Boolean;
    handleClose: ()=>void;
    selected: Character[];
}

export const DialogCard = (Props) => {
    const { openProp, handleClose, selected } = Props;

  return (
    <>
        <Dialog
            open={openProp}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">
                {selected?.status} - {selected?.species}
            </DialogTitle>
            <CardMedia
                component="img"
                height="350"
                image={selected?.image}
                alt="green iguana"
                />
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {selected?.name}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autoFocus>
                    Cerrar
                </Button>
            </DialogActions>
        </Dialog>
    </>
  )
}
