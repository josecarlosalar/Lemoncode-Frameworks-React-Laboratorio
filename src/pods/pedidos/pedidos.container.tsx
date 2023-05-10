import React, { useContext, useEffect } from 'react';
import { PedidosComponent } from './pedidos.component';
import { MaterialesPedido, Pedido } from './pedidos.vm';
import { getFilasPedido, getPedidos } from './api/pedidos.api';
import { MaterialesPedidoContext, PedidosContext } from '@/core/pedidos';

export const PedidosContainer: React.FC = () => {
    const { pedido, setPedido } = useContext(PedidosContext);
    const { setMaterialesPedido } = useContext(MaterialesPedidoContext);

    const datosPedidos = () => {
        getPedidos().then((data: Pedido[]) => {
            setPedido(data);
        })
    }

    const filasPedido = () => {
        getFilasPedido().then((data: MaterialesPedido[]) => {
            setMaterialesPedido(data);
        })
    }

    useEffect(()=>{
        datosPedidos();
        filasPedido();
    },[])

    return (
        <>
            <PedidosComponent />  
        </>
    )


}