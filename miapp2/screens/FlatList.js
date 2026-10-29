/* 1. Zona de importaciones */
import { StyleSheet, Text, View, FlatList, SectionList } from 'react-native';

/* Datos para FlatList */
const datosFlat = [
  { id: '1', nombre: 'Juan' },
  { id: '2', nombre: 'María' },
  { id: '3', nombre: 'Pedro' },
  { id: '4', nombre: 'Emilio'}
];

/* Datos para SectionList */
const datosSection = [
  {
    titulo: 'Frutas',
    data: ['Manzana', 'Plátano'],
  },
  {
    titulo: 'Verduras',
    data: ['Zanahoria', 'Lechuga'],
  },
];

/* 2. Zona main */
export default function ListasScreen() {
    return (
      /* Contenedor principal que agrupa y organiza los elementos visuales */
      <View style={styles.container}>
        
        {/* Componente de texto para el título de la FlatList */}
        <Text style={styles.titulo}>Ejemplo FlatList</Text>
        
        {/* Componente FlatList para renderizar una lista plana de forma eficiente */}
        <FlatList
          data={datosFlat}                                    /* Arreglo de datos que se va a recorrer */
          keyExtractor={(item) => item.id}                   /* Función que extrae una clave única para cada elemento */
          renderItem={({ item }) => (                        /* Define cómo se renderiza cada elemento individual */
            <Text style={styles.item}>{item.nombre}</Text>  /* Componente visual para mostrar el nombre del elemento */
          )}
        />
  
        {/* Componente de texto para el título de la SectionList */}
        <Text style={styles.titulo}>Ejemplo SectionList</Text>
        
        {/* Componente SectionList para renderizar listas agrupadas por secciones */}
        <SectionList
          sections={datosSection}                            /* Arreglo de datos agrupados por secciones con títulos */
          keyExtractor={(item, index) => item + index}       /* Función que genera una clave única combinando item e índice */
          renderItem={({ item }) => (                        /* Define cómo se renderiza cada elemento dentro de la sección */
            <Text style={styles.item}>{item}</Text>         /* Componente visual para mostrar el elemento de la sección */
          )}
          renderSectionHeader={({ section }) => (            /* Define cómo se renderiza el encabezado de cada sección */
            <Text style={styles.encabezado}>{section.titulo}</Text> /* Muestra el título de la sección actual */
          )}
        />
  
      </View>
    );
  }

/* 3. Zona Estilos y posicionamiento */
const styles = StyleSheet.create({
  // 1. Contenedor principal de la pantalla
  container: {
    flex: 1,               // Hace que el contenedor ocupe todo el espacio disponible en la pantalla
    paddingTop: 50,        // Agrega un espacio interno superior de 50px (útil para evitar el notch/barra de estado)
    paddingHorizontal: 20, // Agrega un espacio interno de 20px a la izquierda y a la derecha
    backgroundColor: '#fff', // Define el color de fondo como blanco
  },

  // 2. Estilo para el título principal
  titulo: {
    fontSize: 20,          // Establece el tamaño de la letra en 20px
    fontWeight: 'bold',    // Pone el texto en negrita
    marginTop: 20,         // Aplica un margen exterior superior de 20px para separarlo de elementos superiores
    marginBottom: 10,      // Aplica un margen exterior inferior de 10px para separarlo del contenido de abajo
    textAlign: 'center',   // Alinea el texto al centro horizontalmente
  },

  // 3. Estilo para encabezados de sección o subtítulos
  encabezado: {
    fontSize: 16,          // Establece el tamaño de la letra en 16px
    fontWeight: 'bold',    // Pone el texto en negrita
    backgroundColor: '#e0e0e0', // Aplica un color de fondo gris claro
    padding: 5,            // Agrega un relleno interno de 5px alrededor de todo el contenido del encabezado
  },

  // 4. Estilo para los ítems o filas de una lista
  item: {
    fontSize: 14,          // Establece el tamaño de la letra en 14px
    padding: 10,           // Agrega un relleno interno de 10px en todos los lados para dar espacio al contenido
    borderBottomWidth: 1,  // Dibuja una línea de borde en la parte inferior de 1px de grosor
    borderBottomColor: '#ccc', // Define el color de la línea inferior como gris medio
  },
});