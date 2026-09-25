import fs from 'fs';
import { productos,listarProductos, agregarProducto, editarProducto, eliminarProducto,obtenerProductosBaratos,obtenerProductosCaros,obtenerBebidas,obtenerPostres,prepararProductoPromesa} from './cocina.js';
import { procesarNuevoPedido, pedidos, calcularCaja, notificarEstado } from './caja.js';

const leer = (mensaje) => {
  process.stdout.write(mensaje);
  const buffer = Buffer.alloc(1024);
  const bytesLeidos = fs.readSync(0, buffer, 0, 1024, null);
  return buffer.toString('utf8', 0, bytesLeidos).trim();
};


const obtenerMenuPromociones = () => {
  return productos.map(prod => `¡PROMO! ${prod.nombre} a solo $${prod.precio}`);
};


// Función auxiliar para pausar el bucle mientras transcurren los setTimeout
const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Simulación síncrona/asíncrona en tiempo real
const simularEstadosPedido = async (cliente, producto) => {
  console.log("\n--- ESTADOS DEL PEDIDO ---");
  console.log("1. Pedido recibido");

  await esperar(1500);
  console.log("2. Preparando..........");

  try {
    const msjCocina = await prepararProductoPromesa(producto);
    console.log(`   ${msjCocina}`);

    await esperar(1500);
    console.log("3. Empacando..........");

    await esperar(1500);
    notificarEstado(true, cliente, producto.nombre, (err, res) => {
      console.log("4. Pedido Entregado");
      console.log(`   [CAJA]: ${res}`);
    });

  } catch (error) {
    console.log(`   ${error}`);
    await esperar(1000);
    notificarEstado(false, cliente, producto.nombre, (err, res) => {
      console.log("4. Pedido Cancelado");
      console.log(`   [CAJA]: ${err}`);
    });
  }

  // Espera final para que la notificación se imprima completamente antes del menú
  await esperar(1200);
};

const iniciarPrograma = async () => {
  let salir = false;

  while (!salir) {
    console.log("\n--- MENÚ PRINCIPAL ---");
    console.log("1. Consultar productos");
    console.log("2. Crear pedido");
    console.log("3. Listar pedidos del cliente");
    console.log("4. Gestionar productos (Cocina)");
    console.log("5. Ver total acumulado (Caja)");
    console.log("6. Ver Filtros y Promociones");
    console.log("7. Salir");

    const opcion = leer("Opción: ");

    switch (opcion) {
      case "1":
        listarProductos();
        break;

      case "2":
        listarProductos();
        const cliente = leer("\nNombre del cliente: ");
        const idProd = leer("ID del producto a pedir: ");
        
        const productoEncontrado = procesarNuevoPedido(cliente, parseInt(idProd));

        if (productoEncontrado) {
          // Aquí el programa ESPERA a que termine toda la secuencia
          await simularEstadosPedido(cliente, productoEncontrado);
        } else {
          console.log("Producto no encontrado.");
        }
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
          const c = leer("Categoría (bebidas/postres): ");
          agregarProducto(n, parseFloat(p), c);
        } else if (acc === "2") {
          listarProductos();
          const id = leer("ID del producto: ");
          const n = leer("Nuevo nombre: ");
          const p = leer("Nuevo precio: ");
          editarProducto(parseInt(id), n, parseFloat(p));
        } else if (acc === "3") {
          listarProductos();
          const id = leer("ID a eliminar: ");
          eliminarProducto(parseInt(id));
        }
        break;

      case "5":
        const { subtotal, iva, total } = calcularCaja();
        console.log(`\n--- RESUMEN DE CAJA ---`);
        console.log(`Subtotal: $${subtotal}`);
        console.log(`IVA (16%): $${iva}`);
        console.log(`Total a pagar: $${total}`);
        break;

      case "6":
        console.log("\n--- MENÚ DE PROMOS ---");
        const promos = obtenerMenuPromociones();
        promos.forEach(p => console.log(p));

        console.log("\n--- FILTROS DISPONIBLES ---");
        console.log("1. Baratos  2. Caros  3. Bebidas  4. Postres");
        const f = leer("Selecciona filtro: ");

        let listaFiltrada = [];
        if (f === "1") listaFiltrada = obtenerProductosBaratos();
        else if (f === "2") listaFiltrada = obtenerProductosCaros();
        else if (f === "3") listaFiltrada = obtenerBebidas();
        else if (f === "4") listaFiltrada = obtenerPostres();

        console.log("\n--- RESULTADOS ---");
        listaFiltrada.forEach(prod => {
          console.log(`• ID: ${prod.id} | ${prod.nombre} - $${prod.precio} (${prod.categoria})`);
        });
        break;

      case "7":
        salir = true;
        break;

      default:
        console.log("Opción no válida.");
        break;
    }
  }
};

iniciarPrograma();