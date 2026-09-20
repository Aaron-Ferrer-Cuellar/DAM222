import { productos } from './cocina.js';

export let pedidos = [];
export let totalAcumulado = 0;

export const agregarPedido = (cliente, idProducto) => {
  let prod = null;
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].id === idProducto) {
      prod = productos[i];
    }
  }

  if (prod) {
    pedidos.push({ cliente, producto: prod.nombre, precio: prod.precio });
    totalAcumulado += prod.precio;
    console.log("Pedido guardado con éxito.");
  } else {
    console.log("Producto no encontrado.");
  }
};