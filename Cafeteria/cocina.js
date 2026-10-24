export let productos = [
  { id: 1, nombre: "Café", precio: 30, categoria: "bebidas" },
  { id: 2, nombre: "Dona", precio: 20, categoria: "postres" },
  { id: 3, nombre: "Capuchino", precio: 45, categoria: "bebidas" },
  { id: 4, nombre: "Té Verde", precio: 25, categoria: "bebidas" },
  { id: 5, nombre: "Muffin de Chispas", precio: 35, categoria: "postres" },
  { id: 6, nombre: "Sandwich de Jamón", precio: 50, categoria: "comida" },
  { id: 7, nombre: "Galleta de Avena", precio: 15, categoria: "postres" }
];

export const agregarProducto = (nombre, precio, categoria = "general") => {
  productos.push({ id: productos.length + 1, nombre, precio, categoria });
};

export const editarProducto = (id, nuevoNombre, nuevoPrecio) => {
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].id === id) {
      productos[i].nombre = nuevoNombre;
      productos[i].precio = nuevoPrecio;
    }
  }
};

export const eliminarProducto = (id) => {
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].id === id) {
      productos.splice(i, 1);
    }
  }
};

export const listarProductos = () => {
  console.log("\n--- PRODUCTOS ---");
  for (let i = 0; i < productos.length; i++) {
    console.log(`ID: ${productos[i].id} | ${productos[i].nombre} - $${productos[i].precio}`);
  }
};

export const obtenerProductosBaratos = () => productos.filter(p => p.precio <= 25);
export const obtenerProductosCaros = () => productos.filter(p => p.precio > 25);
export const obtenerBebidas = () => productos.filter(p => p.categoria === "bebidas");
export const obtenerPostres = () => productos.filter(p => p.categoria === "postres");

// Promesa que define si el pedido se puede preparar o si se cancela por falta de ingrediente
export const prepararProductoPromesa = (producto) => {
  return new Promise((resolve, reject) => {
    // 70% de probabilidad de éxito, 30% de cancelación por error/falta de ingrediente
    const exito = Math.random() > 0.3; 

    setTimeout(() => {
      if (exito) {
        resolve(`[Cocina]: ${producto.nombre} preparado con éxito.`);
      } else {
        reject(`[Error en Cocina]: Falta ingrediente para preparar ${producto.nombre}.`);
      }
    }, 1500);
  });
};