import React, { useContext, useEffect, useState } from 'react';
import { AppLayout, CenterLayout } from '@/layout';
import classes from './pedidos.styles.css';
import { Grid } from '@mui/material';
import { MaterialesPedido, Pedido } from './pedidos.vm';
import { GridPedidos } from './components/gridPedidos';
import { CabeceraPedidos } from './components/cabeceraPedidos';
import { GridMaterialesPedidos } from './components/gridMaterialesPedidos';
import { PedidosContext, MaterialesPedidoContext } from '@/core/pedidos';
import { SelectedPedidoContext } from '@/core/pedidos/selectedPedido.context';

export const PedidosComponent = () => {
    const [importeTotal, setImporteTotal] = useState(0);
    const { selectedPedido, setSelectedPedido } = useContext(SelectedPedidoContext);
    const { pedido, setPedido } = useContext(PedidosContext);
    const { materialesPedido, setMaterialesPedido } = useContext(MaterialesPedidoContext);
    const pedidos = [...pedido];


    const datosMaterialesPedido = (pedido) => {
        return new Promise (resolve => {
            const filterMaterialesPedido = materialesPedido.filter((item) => item.pedido == pedido.numero); 
            const newArrayPedido:MaterialesPedido[] = [...filterMaterialesPedido];
            setSelectedPedido(pedido.numero);
            const importeTotal = filterMaterialesPedido.reduce((total, item) => {
                return total + (item.importeUd * item.unidades);
            }, 0);
            setImporteTotal(importeTotal);
            resolve(importeTotal);
        })
    }

    const sortList = (pedidos:Pedido[]): Pedido[] => {
        return pedidos.sort((a, b) => a.numero - b.numero);
    }

    const handleRow = async (pedido) =>{
        const importeT = await datosMaterialesPedido(pedido);
        const filterPedido = pedidos.filter((item) => item.numero != pedido.numero); 
        const {numero, proveedor, fecha, estado} = pedido;
        const newArrayPedido:Pedido[] = [...filterPedido, {numero, proveedor, fecha, estado, importe: importeT as number}];
        setPedido(sortList(newArrayPedido));
    }
    

return(
    <>
        <AppLayout>
                <Grid className={classes.containerPedido} container spacing={1}>
                    <Grid item xs={12} sm={12} className={classes.gridTitle} >
                        <h1 className={classes.titlePedido} >Pedidos a Proveedores</h1>
                    </Grid>
                    <Grid container>
                        <Grid className={classes.gridPedidos} item xs={6} sm={6}>
                            <GridPedidos pedidos={pedidos} handleRow={handleRow}/>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <CabeceraPedidos />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} className={classes.gridMaterialPedido}>
                        <GridMaterialesPedidos />
                    </Grid>
                </Grid>
        </AppLayout>
    </>
)
}

