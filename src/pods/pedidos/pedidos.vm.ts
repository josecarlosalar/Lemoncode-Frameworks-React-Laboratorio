export interface Pedido{
    numero: number;
    proveedor: string;
    fecha: string;
    importe: number;
    estado: number;
}

export interface MaterialesPedido {
    numero: number;
    pedido: number;
    estado: number;
    unidades: number;
    descripcion: string;
    importeUd: number;
    selected: boolean;
}