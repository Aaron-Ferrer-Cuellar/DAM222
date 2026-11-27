function getStorage() {
    if (typeof window === 'undefined' || !window.localStorage) {
      throw new Error('localStorage no disponible en este entorno.');
    }
    return window.localStorage;
  }
  
  export async function guardarItem(key, value) {
    const storage = getStorage();
    storage.setItem(key, JSON.stringify(value));
  }
  
  export async function obtenerItem(key) {
    const storage = getStorage();
    const data = storage.getItem(key);
    if (data === null) {
      return null;
    }
    try {
      return JSON.parse(data);
    } catch {
      return data;
    }
  }
  
  export async function eliminarItem(key) {
    const storage = getStorage();
    storage.removeItem(key);
  }