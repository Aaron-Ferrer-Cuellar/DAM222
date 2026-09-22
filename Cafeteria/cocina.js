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

export const obtenerProductosBaratos = () => {
  return productos.filter(producto => producto.precio <= 25);
};

export const obtenerProductosCaros = () => {
  return productos.filter(producto => producto.precio > 25);
};

export const obtenerBebidas = () => {
  return productos.filter(producto => producto.categoria === "bebidas");
};

export const obtenerPostres = () => {
  return productos.filter(producto => producto.categoria === "postres");
};

export const buscarProductoPorId = (id) => {
  return productos.find(producto => producto.id === id);
};