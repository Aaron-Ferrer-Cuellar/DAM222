import { guardarItem, obtenerItem, eliminarItem } from '../storage/localStorage';

const CLAVE_USUARIOS = '@usuarios_practica21';

export function validarUsuario(datos) {
  const errores = [];
  const nombre = typeof datos?.nombre === 'string' ? datos.nombre.trim() : '';
  const edad = Number(datos?.edad);

  if (!nombre) {
    errores.push('El nombre es obligatorio.');
  }

  if (datos?.edad === '' || datos?.edad === undefined || Number.isNaN(edad) || edad <= 0) {
    errores.push('La edad debe ser un número mayor que 0.');
  }

  return {
    valido: errores.length === 0,
    errores,
    datos: { nombre, edad },
  };
}

export async function obtenerUsuarios() {
  const usuarios = await obtenerItem(CLAVE_USUARIOS);
  return Array.isArray(usuarios) ? usuarios : [];
}

export async function guardarUsuario(nuevoUsuario) {
  const validacion = validarUsuario(nuevoUsuario);
  if (!validacion.valido) {
    throw new Error(validacion.errores.join('\n'));
  }

  const usuarios = await obtenerUsuarios();
  const registro = {
    id: nuevoUsuario?.id ?? String(Date.now()),
    nombre: validacion.datos.nombre,
    edad: validacion.datos.edad,
  };

  const listaActualizada = [...usuarios, registro];
  await guardarItem(CLAVE_USUARIOS, listaActualizada);
  return registro;
}

export async function editarUsuario(id, datosActualizados) {
  const validacion = validarUsuario(datosActualizados);
  if (!validacion.valido) {
    throw new Error(validacion.errores.join('\n'));
  }

  const usuarios = await obtenerUsuarios();
  const listaActualizada = usuarios.map((usuario) =>
    String(usuario.id) === String(id)
      ? { ...usuario, nombre: validacion.datos.nombre, edad: validacion.datos.edad }
      : usuario
  );

  await guardarItem(CLAVE_USUARIOS, listaActualizada);
}

export async function borrarUsuario(id) {
  const usuarios = await obtenerUsuarios();
  const listaActualizada = usuarios.filter((usuario) => String(usuario.id) !== String(id));
  await guardarItem(CLAVE_USUARIOS, listaActualizada);
}

export async function limpiarUsuarios() {
  await eliminarItem(CLAVE_USUARIOS);
}