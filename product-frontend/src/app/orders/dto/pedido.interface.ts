export interface CreatePedidoDto { 

    id_venta: number;
    fecha_creacion: Date;
}

export interface FinalizarPedido{
    id_pedido: number;
    fecha_fin: Date;
}