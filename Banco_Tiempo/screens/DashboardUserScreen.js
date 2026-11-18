import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Pressable, 
  Image, 
  Modal 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function DashboardUserScreen({ onNavigate }) {
  // Estado para controlar la visibilidad del menú desplegable (Drawer)
  const [menuVisible, setMenuVisible] = useState(false);

  // Función para redirigir y cerrar el menú automáticamente
  const irAPantalla = (nombrePantalla) => {
    setMenuVisible(false);
    if (onNavigate) {
      onNavigate(nombrePantalla);
    }
  };

  return (
    <View style={styles.screenWrapper}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Cabecera: Menú desplegable, Avatar y Saludo */}
        <View style={styles.headerRow}>
          <Pressable style={styles.menuIconContainer} onPress={() => setMenuVisible(true)}>
            <Text style={styles.menuIconText}>≡</Text>
          </Pressable>
          
          {/* IMAGEN DE PERFIL */}
          <Image 
            source={require('../img/perfil.png')} 
            style={styles.avatar} 
          />

          <View style={styles.headerTextContainer}>
            <Text style={styles.saludo}>¡Hola, Aaron!</Text>
            <Text style={styles.subsaludo}>Qué bueno verte de nuevo</Text>
          </View>
        </View>

        {/* Tarjeta de Créditos de Tiempo */}
        <View style={styles.coinCard}>
          <Text style={styles.coinLabel}>Mis créditos de tiempo</Text>
          <Text style={styles.coinValue}>12 Créditos 🪙</Text>
        </View>

        <Text style={styles.pregunta}>¿Qué te gustaría hacer hoy?</Text>
        <Text style={styles.instruccion}>Elige una opción para comenzar</Text>

        {/* Bloques Principales: COMPARTIR y APRENDER */}
        <View style={styles.gridContainer}>
          
          <Pressable style={styles.boxCompartir} onPress={() => irAPantalla('serviceRegister')}>
            <Image 
              source={require('../img/ensenar.png')} 
              style={styles.boxImage} 
            />
            <Text style={styles.boxTitle}>COMPARTIR</Text>
            <Text style={styles.boxSub}>Comparte tus conocimientos y ofrece servicios</Text>
          </Pressable>

          <Pressable style={styles.boxAprender} onPress={() => irAPantalla('aprender')}>
            <Image 
              source={require('../img/aprender.png')} 
              style={styles.boxImage} 
            />
            <Text style={styles.boxTitle}>APRENDER</Text>
            <Text style={styles.boxSub}>Explora servicios y adquiere nuevas habilidades</Text>
          </Pressable>

        </View>

        {/* Sección Servicios Destacados */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Servicios destacados</Text>
          <Pressable onPress={() => irAPantalla('aprender')}>
            <Text style={styles.verMas}>Ver todos </Text>
          </Pressable>
        </View>

        {/* Tarjetas de Servicios Destacados */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.serviciosScroll}>
          <View style={styles.servicioCard}>
            <Image source={require('../img/perfil2.png')} style={styles.servThumb} />
            <Text style={styles.servTitulo}>Asesoría de Programación</Text>
            <Text style={styles.servAutor}>👤 María López</Text>
            <Text style={styles.servCosto}>🪙 1 Credito / 1 hr</Text>
          </View>

          <View style={styles.servicioCard}>
            <Image source={require('../img/perfil.png')} style={styles.servThumb} />
            <Text style={styles.servTitulo}>Entrenamiento Funcional</Text>
            <Text style={styles.servAutor}>👤 Carlos Ruiz</Text>
            <Text style={styles.servCosto}>🪙 1 Credito / 1 hr</Text>
          </View>

          <View style={styles.servicioCard}>
            <Image source={require('../img/perfil2.png')} style={styles.servThumb} />
            <Text style={styles.servTitulo}>Diseño Gráfico</Text>
            <Text style={styles.servAutor}>👤 Aaron Ferrer</Text>
            <Text style={styles.servCosto}>🪙 1 Credito / 1.5 hr</Text>
          </View>
        </ScrollView>

      </ScrollView>

      {/* MODAL DEL MENÚ DESPLEGABLE (DRAWER LATERAL) */}
      <Modal visible={menuVisible} transparent animationType="fade">
        <Pressable style={styles.modalOverlay} onPress={() => setMenuVisible(false)}>
          <View style={styles.drawerContainer}>
            
            {/* Header del menú con acceso directo al Perfil */}
            <Pressable style={styles.drawerHeader} onPress={() => irAPantalla('perfilUser')}>
              <Image source={require('../img/perfil.png')} style={styles.drawerAvatar} />
              <View style={{ flex: 1 }}>
                <Text style={styles.drawerNombre}>Aaron Ferrer</Text>
                <Text style={styles.drawerRol}>Ver perfil y estadísticas</Text>
              </View>
            </Pressable>

            {/* Opciones del Menú Desplegable */}
            <Pressable style={styles.drawerOption} onPress={() => irAPantalla('perfilUser')}>
              <Text style={styles.drawerOptionIcon}>👤</Text>
              <Text style={styles.drawerOptionText}>Mi Perfil</Text>
            </Pressable>

            <Pressable style={styles.drawerOption} onPress={() => irAPantalla('adminServicios')}>
              <Text style={styles.drawerOptionIcon}>⚙️</Text>
              <Text style={styles.drawerOptionText}>Administrar servicios</Text>
            </Pressable>

            <View style={styles.drawerDivider} />

            {/* Botón Cerrar Sesión */}
            <Pressable style={styles.drawerOptionLogout} onPress={() => irAPantalla('login')}>
              <Text style={styles.drawerOptionIcon}>🚪</Text>
              <Text style={styles.drawerLogoutText}>Cerrar sesión</Text>
            </Pressable>

          </View>
        </Pressable>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  screenWrapper: { flex: 1, backgroundColor: '#F3F4F6' },
  container: { flexGrow: 1, padding: 20, alignItems: 'center' },
  headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginBottom: 22, marginTop: 10, width: '100%' },
  menuIconContainer: { padding: 6, marginRight: 12 },
  menuIconText: { fontSize: 32, fontWeight: 'bold', color: '#1E3A8A' },
  avatar: { width: 55, height: 55, borderRadius: 27.5, backgroundColor: '#CBD5E1', marginRight: 14 },
  headerTextContainer: { justifyContent: 'center' },
  saludo: { fontSize: 22, fontWeight: 'bold', color: '#1E3A8A' },
  subsaludo: { fontSize: 13, color: '#6B7280' },
  coinCard: { width: '100%', backgroundColor: '#FEF3C7', padding: 22, borderRadius: 14, borderWidth: 1, borderColor: '#F59E0B', marginBottom: 24, alignItems: 'center' },
  coinLabel: { fontSize: 14, color: '#92400E', fontWeight: '600', textAlign: 'center' },
  coinValue: { fontSize: 26, fontWeight: 'bold', color: '#B45309', marginTop: 6, textAlign: 'center' },
  pregunta: { fontSize: 18, fontWeight: 'bold', color: '#1F2937', textAlign: 'center', marginBottom: 4 },
  instruccion: { fontSize: 13, color: '#6B7280', marginBottom: 20, textAlign: 'center' },
  gridContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 26 },
  boxCompartir: { width: '48%', backgroundColor: '#D1FAE5', paddingVertical: 22, paddingHorizontal: 14, borderRadius: 14, borderWidth: 1, borderColor: '#10B981', alignItems: 'center' },
  boxAprender: { width: '48%', backgroundColor: '#DBEAFE', paddingVertical: 22, paddingHorizontal: 14, borderRadius: 14, borderWidth: 1, borderColor: '#3B82F6', alignItems: 'center' },
  boxImage: { width: 50, height: 50, marginBottom: 12, borderRadius: 10, backgroundColor: '#E5E7EB' },
  boxTitle: { fontSize: 14, fontWeight: 'bold', color: '#1F2937', marginBottom: 6, textAlign: 'center' },
  boxSub: { fontSize: 11, color: '#4B5563', textAlign: 'center', lineHeight: 16 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 14 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#1F2937' },
  verMas: { fontSize: 13, color: '#2563EB', fontWeight: '600' },
  serviciosScroll: { paddingBottom: 20 },
  servicioCard: { width: 180, backgroundColor: '#FFF', padding: 18, borderRadius: 12, borderWidth: 1, borderColor: '#E5E7EB', marginRight: 14, alignItems: 'center', justifyContent: 'space-between' },
  servThumb: { width: 60, height: 60, borderRadius: 12, backgroundColor: '#E5E7EB', marginBottom: 12 },
  servTitulo: { fontSize: 14, fontWeight: 'bold', color: '#1F2937', textAlign: 'center', marginBottom: 8, height: 40 },
  servAutor: { fontSize: 12, color: '#6B7280', marginBottom: 6, textAlign: 'center' },
  servCosto: { fontSize: 12, fontWeight: 'bold', color: '#10B981', textAlign: 'center' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)', justifyContent: 'flex-start', alignItems: 'flex-start' },
  drawerContainer: { width: '75%', height: '100%', backgroundColor: '#FFFFFF', padding: 20, shadowColor: '#000', shadowOffset: { width: 2, height: 0 }, shadowOpacity: 0.25, shadowRadius: 5, elevation: 5 },
  drawerHeader: { flexDirection: 'row', alignItems: 'center', paddingBottom: 20, marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#E5E7EB', marginTop: 20 },
  drawerAvatar: { width: 45, height: 45, borderRadius: 22.5, marginRight: 10 },
  drawerNombre: { fontSize: 16, fontWeight: 'bold', color: '#1F2937' },
  drawerRol: { fontSize: 11, color: '#6B7280' },
  drawerOption: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, borderRadius: 8, marginBottom: 6 },
  drawerOptionIcon: { fontSize: 18, marginRight: 12 },
  drawerOptionText: { fontSize: 15, fontWeight: '600', color: '#374151' },
  drawerDivider: { height: 1, backgroundColor: '#E5E7EB', marginVertical: 10 },
  drawerOptionLogout: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, borderRadius: 8, marginTop: 10 },
  drawerLogoutText: { fontSize: 15, fontWeight: 'bold', color: '#EF4444' }
});