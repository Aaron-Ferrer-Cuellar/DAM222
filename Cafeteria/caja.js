import { productos } from './cocina.js';

export let pedidos = [];
export let totalAcumulado = 0;

export const procesarNuevoPedido = (cliente, idProducto) => {
  let prod = null;
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].id === idProducto) {
      prod = productos[i];
    }
  }

  if (prod) {
    pedidos.push({ cliente, producto: prod.nombre, precio: prod.precio });
    totalAcumulado += prod.precio;
  }
  
  return prod;
};

export const calcularCaja = () => {
  const subtotal = pedidos.reduce((suma, pedido) => suma + pedido.precio, 0);
  const iva = subtotal * 0.16;
  const total = subtotal + iva;
  return { subtotal, iva, total };
};

// Callback final para la notificación de entrega o cancelación
export const notificarEstado = (exito, cliente, productoNombre, callback) => {
  setTimeout(() => {
    if (exito) {
      callback(null, `Notificación a ${cliente}: Tu pedido de ${productoNombre} ha sido ENTREGADO con éxito.`);
    } else {
      callback(`Notificación a ${cliente}: Tu pedido de ${productoNombre} fue CANCELADO.`, null);
    }
  }, 1000);
};