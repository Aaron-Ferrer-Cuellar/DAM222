import fs from 'fs';
import { listarProductos, agregarProducto, editarProducto, eliminarProducto } from './cocina.js';
import { agregarPedido, pedidos, totalAcumulado } from './caja.js';

// Función para leer texto de la consola sin readline
const leer = (mensaje) => {
  process.stdout.write(mensaje);
  const buffer = Buffer.alloc(1024);
  const bytesLeidos = fs.readSync(0, buffer, 0, 1024, null);
  return buffer.toString('utf8', 0, bytesLeidos).trim();
};

let salir = false;

while (!salir) {
  console.log("\n--- MENÚ PRINCIPAL ---");
  console.log("1. Consultar productos");
  console.log("2. Crear pedido");
  console.log("3. Listar pedidos del cliente");
  console.log("4. Gestionar productos (Cocina)");
  console.log("5. Ver total acumulado (Caja)");
  console.log("6. Salir");

  const opcion = leer("Opción: ");

  switch (opcion) {
    case "1":
      listarProductos();
      break;

    case "2":
      listarProductos();
      const cliente = leer("Nombre del cliente: ");
      const idProd = leer("ID del producto: ");
      agregarPedido(cliente, parseInt(idProd));
      break;

    case "3":
      const clienteBuscar = leer("Nombre del cliente: ");
      console.log(`\n--- PEDIDOS DE ${clienteBuscar.toUpperCase()} ---`);
      for (let i = 0; i < pedidos.length; i++) {
        if (pedidos[i].cliente.toLowerCase() === clienteBuscar.toLowerCase()) {
          console.log(`- ${pedidos[i].producto}: $${pedidos[i].precio}`);
        }
      }
      break;

    case "4":
      console.log("\n1. Agregar  2. Editar  3. Eliminar");
      const acc = leer("Acción: ");
      if (acc === "1") {
        const n = leer("Nombre: ");
        const p = leer("Precio: ");
        agregarProducto(n, parseFloat(p));
      } else if (acc === "2") {
        const id = leer("ID: ");
        const n = leer("Nuevo nombre: ");
        const p = leer("Nuevo precio: ");
        editarProducto(parseInt(id), n, parseFloat(p));
      } else if (acc === "3") {
        const id = leer("ID a eliminar: ");
        eliminarProducto(parseInt(id));
      }
      break;

    case "5":
      console.log(`\nTotal acumulado: $${totalAcumulado}`);
      break;

    case "6":
      salir = true;
      break;

    default:
      console.log("Opción no válida.");
      break;
  }
}