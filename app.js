const formulario = document.getElementById("pedidoForm");
const lista = document.getElementById("listaPedidos");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const cliente = document.getElementById("cliente").value;
    const producto = document.getElementById("producto").value;

    const pedido = registrarPedido(cliente, producto);
    const elemento = document.createElement("li");

    elemento.textContent =
        `Pedido #${pedido.id}: ${pedido.cliente} - ${pedido.producto}`;

    lista.appendChild(elemento);
    formulario.reset();
});