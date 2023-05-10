import React, { useContext, useEffect, useState } from 'react';
import { Grid, FormControl, Input, Button, FormHelperText } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { MaterialesPedidoContext, PedidosContext } from '@/core/pedidos';
import { MaterialesPedido, Pedido } from '../pedidos.vm';
import { SelectedPedidoContext } from '@/core/pedidos/selectedPedido.context';
import { useNavigate } from 'react-router-dom';
import { routes } from '@/router';
import classes from '../pedidos.styles.css';
import dayjs from 'dayjs';

export const CabeceraPedidos = () => {

    const { pedido } = useContext(PedidosContext);
    const { materialesPedido } = useContext(MaterialesPedidoContext);
    const [clickPedido, setClickPedido] = useState<Pedido[]>([]);
    const { selectedPedido } = useContext(SelectedPedidoContext);
    const navigate = useNavigate();


    const loadData = () => {
        const filterPedido = pedido.filter((item) => item.numero == selectedPedido); 
        if (filterPedido[0]) {
            const { numero, proveedor, fecha, estado } = filterPedido[0];
            const total = calcularTotal();
            const newDataClickPedido = [{numero, proveedor, fecha, estado, importe: total}];
            setClickPedido(newDataClickPedido);
        }
    }

    const calcularTotal = () => {
            const filterMaterialesPedido = materialesPedido.filter((item) => item.pedido == selectedPedido); 
            const newArrayPedido:MaterialesPedido[] = [...filterMaterialesPedido];
            const importeT = filterMaterialesPedido.reduce((total, item) => {
                return total + (item.importeUd * item.unidades);
            }, 0);
            return(importeT);
    }

    useEffect(()=>{
        loadData();
    },[pedido]);

    useEffect(()=>{
        console.log(clickPedido[0]);
    },[])

  return (
    <>
        <Grid container className={classes.containerCabecera}>
            <Grid item xs={12} sm={12} className={classes.gridCabecera1} >
                <FormControl>
                    <Input value={clickPedido.length < 1 ? 0 : clickPedido[0]?.numero} id="txt_numPedido" aria-describedby="helper_txt_numPedido"/>
                    <FormHelperText id="helper_txt_numPedido">Número de Pedido</FormHelperText>
                </FormControl>
                <FormControl>
                    <Input value={clickPedido.length < 1 ? '' : clickPedido[0]?.proveedor} id="txt_proveedor" aria-describedby="helper_txt_proveedor"/>
                    <FormHelperText id="helper_txt_proveedor">Proveedor</FormHelperText>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Fecha" value={dayjs(clickPedido.length < 1 ? '' :  clickPedido[0]?.fecha)}/>
                    </DemoContainer>
                </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={12} className={classes.gridCabecera2} >
                <FormControl>
                    <Input value={clickPedido.length < 1 ? 0.00 : clickPedido[0]?.importe.toFixed(2)} id="txt_importe" aria-describedby="helper_txt_importe"/>
                    <FormHelperText id="helper_txt_importe">Importe</FormHelperText>
                </FormControl>
                <FormControl>
                    <Input value={clickPedido.length < 1 ? 0 : clickPedido[0]?.estado.toFixed()} id="txt_estado" aria-describedby="helper_txt_estado"/>
                    <FormHelperText id="helper_txt_estado">Estado %</FormHelperText>
                </FormControl>
                <FormControl>
                   <Button disabled={clickPedido[0]?.estado < 100 || clickPedido[0]?.estado === undefined} className={classes.btnEnviar} 
                            variant="contained" color="success" onClick={()=>navigate(routes.pedidoEnviado)}>
                        Enviar
                    </Button> 
                </FormControl>
            </Grid>
        </Grid>
    </>
  )
}
