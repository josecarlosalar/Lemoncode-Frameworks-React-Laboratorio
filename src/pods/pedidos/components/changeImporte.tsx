import React, { useContext } from 'react';
import { ModificarImporteContext } from '@/core/pedidos/modificarImporte.context';
import { Grid, FormControl, Input, FormHelperText, Button } from '@mui/material';
import classes from '../pedidos.styles.css';

interface Props {
  nuevoImporte: number;
  handleChangeImport: ()=>void;
  modificarImporte: ()=>void;
  cancelarNuevoImporte: ()=>void;
}

export const ChangeImporte = (Props) => {
const {nuevoImporte, handleChangeImport, modificarImporte, cancelarNuevoImporte } = Props;
const { visibleInput } = useContext(ModificarImporteContext);

  return (
    <>
        {visibleInput ? <Grid item xs={12} sm={12} className={classes.gridBtnValidate} >
            <FormControl>
                <Input value={nuevoImporte} onChange={handleChangeImport} id="txt_newImporte" aria-describedby="helper_txt_newImporte"/>
                <FormHelperText id="helper_txt_newImporte">Nuevo Importe</FormHelperText>
            </FormControl>
            <Button className={classes.btnAceptar} onClick={modificarImporte} variant="contained" color="success">
                Aceptar
            </Button>
            <Button className={classes.btnCancelar} onClick={cancelarNuevoImporte} variant="contained" color="error">
                Cancelar
            </Button>
        </Grid> : ''}
    </>
  )
}
