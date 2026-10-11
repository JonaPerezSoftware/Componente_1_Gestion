const pedidos = [];

function registrarPedido(cliente, producto) {
    const pedido = {
        id: pedidos.length + 1,
        cliente,
        producto,
        estado: "Pendiente"
    };

    pedidos.push(pedido);
    return pedido;
}