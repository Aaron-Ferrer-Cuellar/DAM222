import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  ScrollView, 
  Pressable, 
  Image 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Base de datos local de todas las clases disponibles
const listaClases = [
  // Deportes
  { id: '1', categoria: 'Deportes', titulo: 'Fútbol Soccer', autor: 'Luis Pérez', duracion: '2 Horas', descripcion: 'Aprende las diferentes alineaciones y tácticas para mejorar tu desempeño en la cancha.', costo: '🪙 1 Credito', img: require('../img/perfil2.png') },
  { id: '2', categoria: 'Deportes', titulo: 'Entrenamiento', autor: 'Carlos Ruiz', duracion: '1.5 Horas', descripcion: 'Rutinas de acondicionamiento físico funcional y fuerza corporal.', costo: '🪙 1 Credito', img: require('../img/perfil.png') },
  { id: '3', categoria: 'Deportes', titulo: 'Yoga y Estiramiento', autor: 'Ana Torres', duracion: '1 Hora', descripcion: 'Ejercicios de relajación, flexibilidad y respiración consciente.', costo: '🪙 1 Credito', img: require('../img/perfil2.png') },
  { id: '4', categoria: 'Deportes', titulo: 'Natación Básica', autor: 'Mario Soto', duracion: '2 Horas', descripcion: 'Técnicas de respiración y estilos básicos en el agua.', costo: '🪙 1.5 Creditos', img: require('../img/perfil.png') },
  
  // Idiomas
  { id: '5', categoria: 'Idiomas', titulo: 'Inglés B2', autor: 'Diana Gómez', duracion: '1.5 Horas', descripcion: 'Práctica de gramática avanzada, vocabulario y fluidez conversacional.', costo: '🪙 1 Credito', img: require('../img/perfil.png') },
  { id: '6', categoria: 'Idiomas', titulo: 'Francés Básico', autor: 'Sofía Morales', duracion: '1 Hora', descripcion: 'Introducción al idioma francés, saludos y expresiones cotidianas.', costo: '🪙 1 Credito', img: require('../img/perfil2.png') },
  { id: '7', categoria: 'Idiomas', titulo: 'Conversación Inglés', autor: 'Kevin Smith', duracion: '1 Hora', descripcion: 'Debates y charlas dinámicas para perder el miedo a hablar en inglés.', costo: '🪙 1 Credito', img: require('../img/perfil.png') },
  { id: '8', categoria: 'Idiomas', titulo: 'Japonés Inicial', autor: 'Akane Yuki', duracion: '2 Horas', descripcion: 'Aprende silabarios básicos (Hiragana/Katakana) y gramática elemental.', costo: '🪙 1.5 Creditos', img: require('../img/perfil2.png') },

  // Tecnología
  { id: '9', categoria: 'Tecnología', titulo: 'React Native', autor: 'Aaron Ferrer', duracion: '2 Horas', descripcion: 'Maquetación de interfaces móviles limpias y responsivas con StyleSheet.', costo: '🪙 1 Credito', img: require('../img/perfil.png') },
  { id: '10', categoria: 'Tecnología', titulo: 'Python Fundamentos', autor: 'Kevin Smith', duracion: '1.5 Horas', descripcion: 'Lógica de programación, variables, estructuras de control y funciones.', costo: '🪙 1 Credito', img: require('../img/perfil2.png') },
  { id: '11', categoria: 'Tecnología', titulo: 'Bases de Datos SQL', autor: 'Berza López', duracion: '2 Horas', descripcion: 'Consultas multitabla, Joins, subconsultas y administración en MySQL.', costo: '🪙 1 Credito', img: require('../img/perfil.png') },
  { id: '12', categoria: 'Tecnología', titulo: 'Diseño UI/UX Figma', autor: 'Diana Gómez', duracion: '1.5 Horas', descripcion: 'Creación de prototipos interactivos y wireframes profesionales.', costo: '🪙 1.5 Creditos', img: require('../img/perfil2.png') },

  // Desarrollo Profesional
  { id: '13', categoria: 'Desarrollo Profesional', titulo: 'Finanzas Personales', autor: 'Berza López', duracion: '1 Hora', descripcion: 'Estrategias de ahorro, control de gastos y presupuestos inteligentes.', costo: '🪙 1 Credito', img: require('../img/perfil2.png') },
  { id: '14', categoria: 'Desarrollo Profesional', titulo: 'Oratoria y Liderazgo', autor: 'Aaron Ferrer', duracion: '1.5 Horas', descripcion: 'Técnicas para hablar en público con seguridad y persuasión.', costo: '🪙 1 Credito', img: require('../img/perfil.png') },
  { id: '15', categoria: 'Desarrollo Profesional', titulo: 'Gestión de Proyectos', autor: 'Carlos Ruiz', duracion: '2 Horas', descripcion: 'Metodologías ágiles y tradicionales para la administración de equipos.', costo: '🪙 1 Credito', img: require('../img/perfil2.png') },
  { id: '16', categoria: 'Desarrollo Profesional', titulo: 'Excel Empresarial', autor: 'María López', duracion: '2 Horas', descripcion: 'Tablas dinámicas, fórmulas avanzadas y automatización básica.', costo: '🪙 1 Credito', img: require('../img/perfil.png') },
];

export default function AprenderScreen({ onNavigate, onSeleccionarServicio }) {
  const [busqueda, setBusqueda] = useState('');

  // Filtrar las clases según lo que escribas en el buscador
  const clasesFiltradas = listaClases.filter((clase) => 
    clase.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
    clase.autor.toLowerCase().includes(busqueda.toLowerCase()) ||
    clase.categoria.toLowerCase().includes(busqueda.toLowerCase())
  );

  const deportes = clasesFiltradas.filter(c => c.categoria === 'Deportes');
  const idiomas = clasesFiltradas.filter(c => c.categoria === 'Idiomas');
  const tecnologia = clasesFiltradas.filter(c => c.categoria === 'Tecnología');
  const desarrollo = clasesFiltradas.filter(c => c.categoria === 'Desarrollo Profesional');

  // Manejar clic en una clase para mandarla a la pantalla de contratación
  const handleSeleccionarClase = (item) => {
    if (onSeleccionarServicio) {
      onSeleccionarServicio(item); // Guarda el servicio seleccionado
    }
    if (onNavigate) {
      onNavigate('contratarServicio'); // Redirecciona
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Barra superior con botón de regreso */}
        <View style={styles.headerRow}>
          <Pressable style={styles.backButton} onPress={() => onNavigate && onNavigate('dashboardUser')}>
            <Text style={styles.backButtonText}>←</Text>
          </Pressable>
          <Text style={styles.tituloHeader}>Aprender</Text>
        </View>

        <Text style={styles.subtitulo}>Explora los servicios y conocimientos que otros usuarios ofrecen</Text>

        {/* Barra de Búsqueda 100% Funcional */}
        <TextInput
          style={styles.searchInput}
          placeholder="🔍 Buscar habilidades, servicios o profesores..."
          placeholderTextColor="#9CA3AF"
          value={busqueda}
          onChangeText={setBusqueda}
        />

        {clasesFiltradas.length === 0 && (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>No se encontraron resultados para "{busqueda}"</Text>
          </View>
        )}

        {/* ================= CATEGORÍA: DEPORTES ================= */}
        {deportes.length > 0 && (
          <>
            <Text style={styles.categoriaTitulo}>Deportes</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
              {deportes.map((item) => (
                <Pressable 
                  key={item.id} 
                  style={styles.servicioCard}
                  onPress={() => handleSeleccionarClase(item)}
                >
                  <Image source={item.img} style={styles.servThumb} />
                  <Text style={styles.servTitulo}>{item.titulo}</Text>
                  <Text style={styles.servAutor}>👤 {item.autor}</Text>
                  <Text style={styles.servCosto}>{item.costo}</Text>
                </Pressable>
              ))}
            </ScrollView>
          </>
        )}

        {/* ================= CATEGORÍA: IDIOMAS ================= */}
        {idiomas.length > 0 && (
          <>
            <Text style={styles.categoriaTitulo}>Idiomas</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
              {idiomas.map((item) => (
                <Pressable 
                  key={item.id} 
                  style={styles.servicioCard}
                  onPress={() => handleSeleccionarClase(item)}
                >
                  <Image source={item.img} style={styles.servThumb} />
                  <Text style={styles.servTitulo}>{item.titulo}</Text>
                  <Text style={styles.servAutor}>👤 {item.autor}</Text>
                  <Text style={styles.servCosto}>{item.costo}</Text>
                </Pressable>
              ))}
            </ScrollView>
          </>
        )}

        {/* ================= CATEGORÍA: TECNOLOGÍA ================= */}
        {tecnologia.length > 0 && (
          <>
            <Text style={styles.categoriaTitulo}>Tecnología</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
              {tecnologia.map((item) => (
                <Pressable 
                  key={item.id} 
                  style={styles.servicioCard}
                  onPress={() => handleSeleccionarClase(item)}
                >
                  <Image source={item.img} style={styles.servThumb} />
                  <Text style={styles.servTitulo}>{item.titulo}</Text>
                  <Text style={styles.servAutor}>👤 {item.autor}</Text>
                  <Text style={styles.servCosto}>{item.costo}</Text>
                </Pressable>
              ))}
            </ScrollView>
          </>
        )}

        {/* ================= CATEGORÍA: DESARROLLO PROFESIONAL ================= */}
        {desarrollo.length > 0 && (
          <>
            <Text style={styles.categoriaTitulo}>Desarrollo Profesional</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
              {desarrollo.map((item) => (
                <Pressable 
                  key={item.id} 
                  style={styles.servicioCard}
                  onPress={() => handleSeleccionarClase(item)}
                >
                  <Image source={item.img} style={styles.servThumb} />
                  <Text style={styles.servTitulo}>{item.titulo}</Text>
                  <Text style={styles.servAutor}>👤 {item.autor}</Text>
                  <Text style={styles.servCosto}>{item.costo}</Text>
                </Pressable>
              ))}
            </ScrollView>
          </>
        )}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  scrollContent: { padding: 20 },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10 },
  backButton: { padding: 6, marginRight: 12 },
  backButtonText: { fontSize: 26, fontWeight: 'bold', color: '#1E3A8A' },
  tituloHeader: { fontSize: 22, fontWeight: 'bold', color: '#1E3A8A' },
  subtitulo: { fontSize: 13, color: '#6B7280', marginBottom: 16 },
  searchInput: { width: '100%', height: 48, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 8, paddingHorizontal: 14, marginBottom: 20, fontSize: 14, color: '#1F2937' },
  noResultsContainer: { padding: 20, alignItems: 'center' },
  noResultsText: { fontSize: 14, color: '#6B7280', fontStyle: 'italic' },
  categoriaTitulo: { fontSize: 16, fontWeight: 'bold', color: '#1F2937', marginTop: 12, marginBottom: 8 },
  horizontalScroll: { marginBottom: 10 },
  servicioCard: { width: 140, backgroundColor: '#FFF', padding: 12, borderRadius: 10, borderWidth: 1, borderColor: '#E5E7EB', marginRight: 12, alignItems: 'center' },
  servThumb: { width: 40, height: 40, borderRadius: 8, backgroundColor: '#E5E7EB', marginBottom: 8 },
  servTitulo: { fontSize: 13, fontWeight: 'bold', color: '#1F2937', textAlign: 'center', height: 32 },
  servAutor: { fontSize: 11, color: '#6B7280', marginVertical: 4, textAlign: 'center' },
  servCosto: { fontSize: 11, fontWeight: 'bold', color: '#10B981', textAlign: 'center' }
});