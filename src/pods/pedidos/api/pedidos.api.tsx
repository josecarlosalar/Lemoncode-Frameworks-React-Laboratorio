import { pedidos, materialesPedidos } from '@/assets/pedidos';



export const getPedidos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(pedidos);
        }, 200);
    });
}


export const getFilasPedido = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(materialesPedidos);
        }, 200);
    });
}