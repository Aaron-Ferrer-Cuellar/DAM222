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

export default function FavoritosScreen({ onNavigate, onSeleccionarServicio }) {
  // Lista simulada de servicios favoritos guardados por el usuario
  const [favoritos, setFavoritos] = useState([
    { 
      id: '1', 
      titulo: 'Asesoría de Programación', 
      categoria: 'Tecnología', 
      duracion: '1 Hora', 
      descripcion: 'Clases de React Native, JavaScript y desarrollo móvil.', 
      autor: 'María López',
      img: require('../img/perfil2.png') 
    },
    { 
      id: '2', 
      titulo: 'Entrenamiento Funcional', 
      categoria: 'Deportes', 
      duracion: '1.5 Horas', 
      descripcion: 'Acondicionamiento físico general y rutinas de fuerza.', 
      autor: 'Carlos Ruiz',
      img: require('../img/perfil.png') 
    },
    { 
      id: '3', 
      titulo: 'Conversación en Inglés', 
      categoria: 'Idiomas', 
      duracion: '1 Hora', 
      descripcion: 'Práctica fluida para perder el miedo a hablar en inglés.', 
      autor: 'Ana Torres',
      img: require('../img/perfil2.png') 
    }
  ]);

  const handleQuitarFavorito = (id) => {
    setFavoritos(favoritos.filter(item => item.id !== id));
  };

  const handleContratarFavorito = (servicio) => {
    if (onSeleccionarServicio) {
      onSeleccionarServicio(servicio);
    }
    if (onNavigate) {
      onNavigate('contratarServicio');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Barra superior con botón de regreso */}
        <View style={styles.headerRow}>
          <Pressable style={styles.backButton} onPress={() => onNavigate && onNavigate('perfilUser')}>
            <Text style={styles.backButtonText}>←</Text>
          </Pressable>
          <Text style={styles.tituloHeader}>Mis Favoritos</Text>
        </View>

        {/* Lista de Favoritos */}
        {favoritos.length === 0 ? (
          <View style={styles.vacioContainer}>
            <Text style={styles.vacioIcon}>⭐</Text>
            <Text style={styles.vacioText}>No tienes servicios en favoritos.</Text>
            <Text style={styles.vacioSub}>Explora la sección "Aprender" para guardar tus clases preferidas.</Text>
          </View>
        ) : (
          favoritos.map((item) => (
            <View key={item.id} style={styles.cardServicio}>
              <View style={styles.cardTopRow}>
                <Image source={item.img} style={styles.thumb} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.cardTitulo}>{item.titulo}</Text>
                  <Text style={styles.cardSub}>Prof. {item.autor} • {item.duracion}</Text>
                </View>
                {/* Botón para quitar de favoritos */}
                <Pressable onPress={() => handleQuitarFavorito(item.id)} style={styles.corazonBtn}>
                  <Text style={styles.corazonText}>❤️</Text>
                </Pressable>
              </View>

              <Text style={styles.cardDesc} numberOfLines={2}>{item.descripcion}</Text>

              {/* Botones de acción */}
              <View style={styles.btnRowCard}>
                <Pressable style={styles.btnContratar} onPress={() => handleContratarFavorito(item)}>
                  <Text style={styles.textContratar}>Contratar servicio</Text>
                </Pressable>
              </View>
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
  vacioContainer: { alignItems: 'center', marginTop: 60, paddingHorizontal: 20 },
  vacioIcon: { fontSize: 40, marginBottom: 10 },
  vacioText: { fontSize: 16, fontWeight: 'bold', color: '#1F2937', marginBottom: 6, textAlign: 'center' },
  vacioSub: { fontSize: 13, color: '#6B7280', textAlign: 'center', lineHeight: 18 },
  cardServicio: { width: '100%', backgroundColor: '#F9FAFB', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12, padding: 16, marginBottom: 14 },
  cardTopRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  thumb: { width: 45, height: 45, borderRadius: 22.5, backgroundColor: '#E5E7EB', marginRight: 12 },
  cardTitulo: { fontSize: 16, fontWeight: 'bold', color: '#1F2937' },
  cardSub: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  corazonBtn: { padding: 6 },
  corazonText: { fontSize: 20 },
  cardDesc: { fontSize: 13, color: '#4B5563', marginBottom: 14, lineHeight: 18 },
  btnRowCard: { borderTopWidth: 1, borderTopColor: '#E5E7EB', paddingTop: 12 },
  btnContratar: { backgroundColor: '#1E3A8A', padding: 10, borderRadius: 6, alignItems: 'center' },
  textContratar: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 13 }
});