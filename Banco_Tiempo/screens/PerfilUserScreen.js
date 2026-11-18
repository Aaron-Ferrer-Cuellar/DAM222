import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Pressable, 
  Image 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function PerfilUserScreen({ onNavigate }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Barra superior con botón de regreso */}
        <View style={styles.headerRow}>
          <Pressable style={styles.backButton} onPress={() => onNavigate && onNavigate('dashboardUser')}>
            <Text style={styles.backButtonText}>←</Text>
          </Pressable>
          <Text style={styles.tituloHeader}>Mi Perfil</Text>
        </View>

        {/* Tarjeta de Información Principal del Perfil */}
        <View style={styles.profileCard}>
          <Image source={require('../img/perfil.png')} style={styles.avatarPerfil} />
          <Text style={styles.nombreUsuario}>Aaron Ferrer</Text>
          <Text style={styles.rolUsuario}>Ingeniería en Tecnologías de la Información</Text>
        </View>

        {/* Opciones y Estadísticas del Perfil (Basado en tu boceto) */}
        <View style={styles.menuContainer}>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>🪙 Coins / Créditos:</Text>
            <Text style={styles.infoValue}>12 Créditos</Text>
          </View>

          <Pressable style={styles.optionRow} onPress={() => onNavigate && onNavigate('favoritos')}>
            <Text style={styles.optionText}>⭐ Favoritos</Text>
            <Text style={styles.arrowText}>→</Text>
          </Pressable>

          <Pressable style={styles.optionRow} onPress={() => onNavigate && onNavigate('historial')}>
            <Text style={styles.optionText}>📜 Historial de Servicios</Text>
            <Text style={styles.arrowText}>→</Text>
          </Pressable>

          <View style={styles.infoRowColumn}>
            <Text style={styles.infoLabel}>⏱️ Tiempo de estudios</Text>
            <Text style={styles.infoValueTime}>14 Horas cursadas / 10 Horas impartidas</Text>
          </View>

        </View>

        {/* Botón de Regresar al Dashboard */}
        <Pressable style={styles.botonRegresar} onPress={() => onNavigate && onNavigate('dashboardUser')}>
          <Text style={styles.textoBotonRegresar}>Volver al Dashboard</Text>
        </Pressable>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  scrollContent: { paddingTop: 45, paddingBottom: 30, paddingHorizontal: 20, alignItems: 'center' },
  headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', marginBottom: 20, position: 'relative' },
  backButton: { position: 'absolute', left: 0, padding: 6 },
  backButtonText: { fontSize: 26, fontWeight: 'bold', color: '#1E3A8A' },
  tituloHeader: { fontSize: 20, fontWeight: 'bold', color: '#1E3A8A', textAlign: 'center' },
  profileCard: { width: '100%', backgroundColor: '#F9FAFB', padding: 24, borderRadius: 14, borderWidth: 1, borderColor: '#E5E7EB', alignItems: 'center', marginBottom: 20 },
  avatarPerfil: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#E5E7EB', marginBottom: 12 },
  nombreUsuario: { fontSize: 18, fontWeight: 'bold', color: '#1F2937', marginBottom: 4 },
  rolUsuario: { fontSize: 12, color: '#6B7280', textAlign: 'center' },
  menuContainer: { width: '100%', backgroundColor: '#F9FAFB', borderRadius: 14, borderWidth: 1, borderColor: '#E5E7EB', paddingHorizontal: 16, marginBottom: 20 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#E5E7EB' },
  infoRowColumn: { paddingVertical: 16 },
  infoLabel: { fontSize: 14, fontWeight: '600', color: '#374151' },
  infoValue: { fontSize: 14, fontWeight: 'bold', color: '#D97706' },
  infoValueTime: { fontSize: 14, fontWeight: '600', color: '#1E3A8A', marginTop: 6 },
  optionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#E5E7EB' },
  optionText: { fontSize: 14, fontWeight: '600', color: '#1F2937' },
  arrowText: { fontSize: 16, color: '#9CA3AF', fontWeight: 'bold' },
  botonRegresar: { width: '100%', backgroundColor: '#1E3A8A', padding: 15, borderRadius: 8, alignItems: 'center' },
  textoBotonRegresar: { color: '#FFFFFF', fontSize: 15, fontWeight: 'bold' }
});