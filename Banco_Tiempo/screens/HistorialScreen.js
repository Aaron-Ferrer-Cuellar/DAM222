import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Pressable, 
  Image 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HistorialScreen({ onNavigate }) {
  // Estado para alternar entre lo que ha "Estudiado" y lo que ha "Enseñado"
  const [tabActiva, setTabActiva] = useState('estudiado');

  const historialEstudiado = [
    { id: '1', titulo: 'Asesoría de Programación', autor: 'María López', fecha: '28 Feb 2026', duracion: '1 Hora', img: require('../img/perfil2.png') },
    { id: '2', titulo: 'Asesoría de Matemáticas', autor: 'Carlos Ruiz', fecha: '24 Feb 2026', duracion: '2 Horas', img: require('../img/perfil.png') },
    { id: '3', titulo: 'Entrenamiento Funcional', autor: 'Ana Torres', fecha: '18 Feb 2026', duracion: '1.5 Horas', img: require('../img/perfil2.png') },
  ];

  const historialEnsenando = [
    { id: '1', titulo: 'React Native Básico', alumno: 'Kevin Smith', fecha: '01 Mar 2026', duracion: '2 Horas', img: require('../img/perfil.png') },
    { id: '2', titulo: 'Oratoria y Liderazgo', alumno: 'Diana Gómez', fecha: '20 Feb 2026', duracion: '1 Hora', img: require('../img/perfil2.png') },
  ];

  const listaActual = tabActiva === 'estudiado' ? historialEstudiado : historialEnsenando;

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Barra superior */}
        <View style={styles.headerRow}>
          <Pressable style={styles.backButton} onPress={() => onNavigate && onNavigate('perfilUser')}>
            <Text style={styles.backButtonText}>←</Text>
          </Pressable>
          <Text style={styles.tituloHeader}>Historial de Servicios</Text>
        </View>

        {/* Pestañas de Navegación Interna (Estudiado / Enseñando) */}
        <View style={styles.tabRow}>
          <Pressable 
            style={[styles.tabButton, tabActiva === 'estudiado' && styles.tabActive]} 
            onPress={() => setTabActiva('estudiado')}
          >
            <Text style={[styles.tabText, tabActiva === 'estudiado' && styles.tabTextActive]}>Estudiado</Text>
          </Pressable>

          <Pressable 
            style={[styles.tabButton, tabActiva === 'ensenando' && styles.tabActive]} 
            onPress={() => setTabActiva('ensenando')}
          >
            <Text style={[styles.tabText, tabActiva === 'ensenando' && styles.tabTextActive]}>Enseñando</Text>
          </Pressable>
        </View>

        {/* Lista de Elementos del Historial */}
        {listaActual.length === 0 ? (
          <Text style={styles.vacioText}>No hay registros en esta sección.</Text>
        ) : (
          listaActual.map((item) => (
            <View key={item.id} style={styles.cardItem}>
              <Image source={item.img} style={styles.itemThumb} />
              <View style={{ flex: 1 }}>
                <Text style={styles.itemTitulo}>{item.titulo}</Text>
                <Text style={styles.itemSub}>
                  {tabActiva === 'estudiado' ? `Prof. ${item.autor}` : `Alumno: ${item.alumno}`}
                </Text>
                <Text style={styles.itemFecha}>{item.fecha} • {item.duracion}</Text>
              </View>
              <Text style={styles.badgeEstado}>Completado</Text>
            </View>
          ))
        )}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  scrollContent: { paddingTop: 35, paddingBottom: 30, paddingHorizontal: 20, alignItems: 'center' },
  headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', marginBottom: 20, position: 'relative' },
  backButton: { position: 'absolute', left: 0, padding: 6 },
  backButtonText: { fontSize: 26, fontWeight: 'bold', color: '#1E3A8A' },
  tituloHeader: { fontSize: 20, fontWeight: 'bold', color: '#1E3A8A', textAlign: 'center' },
  tabRow: { flexDirection: 'row', width: '100%', backgroundColor: '#E5E7EB', borderRadius: 8, padding: 4, marginBottom: 20 },
  tabButton: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 6 },
  tabActive: { backgroundColor: '#FFFFFF', shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 1, elevation: 2 },
  tabText: { fontSize: 14, fontWeight: '600', color: '#4B5563' },
  tabTextActive: { color: '#1E3A8A', fontWeight: 'bold' },
  vacioText: { color: '#6B7280', marginTop: 40, fontSize: 14 },
  cardItem: { width: '100%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#F9FAFB', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12, padding: 14, marginBottom: 12 },
  itemThumb: { width: 45, height: 45, borderRadius: 22.5, backgroundColor: '#E5E7EB', marginRight: 12 },
  itemTitulo: { fontSize: 15, fontWeight: 'bold', color: '#1F2937' },
  itemSub: { fontSize: 12, color: '#6B7280', marginVertical: 2 },
  itemFecha: { fontSize: 11, color: '#9CA3AF' },
  badgeEstado: { fontSize: 11, fontWeight: 'bold', color: '#059669', backgroundColor: '#D1FAE5', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 }
});