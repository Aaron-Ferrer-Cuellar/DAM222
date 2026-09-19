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
  console.log("4. Salir");

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

    

    case "4":
      salir = true;
      break;

    default:
      console.log("Opción no válida.");
      break;
  }
}