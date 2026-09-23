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




export const calcularCaja = () => {
  // reduce() suma el precio de todos los pedidos uno por uno
  const subtotal = pedidos.reduce((suma, pedido) => suma + pedido.precio, 0);
  const iva = subtotal * 0.16; // 16% de IVA
  const total = subtotal + iva;

  // Devolvemos los tres valores en un solo objeto
  return { subtotal, iva, total };
};