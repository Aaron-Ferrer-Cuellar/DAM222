import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Pressable, 
  Image, 
  Modal,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function ContratarServicioScreen({ onNavigate, servicioSeleccionado }) {
  // Estados para los modales de alerta de tu diagrama
  const [modalContratarVisible, setModalContratarVisible] = useState(false);
  const [modalExitoVisible, setModalExitoVisible] = useState(false);

  // Datos por defecto por si entra directo, o usa los de la clase seleccionada
  const servicio = servicioSeleccionado || {
    titulo: 'Posesión de balón',
    categoria: 'Deportes',
    duracion: '2 Horas',
    descripcion: 'Aprende las diferentes alineaciones y formas de crear jugadas efectivas en el campo.',
    autor: 'Aaron Ferrer',
    img: require('../img/perfil.png')
  };

  // Al dar clic en el botón inferior "Contratar servicio"
  const handleIntentarContratar = () => {
    setModalContratarVisible(true);
  };

  // Al dar clic en "SÍ" en el modal de confirmación
  const handleConfirmarSi = () => {
    setModalContratarVisible(false);
    setModalExitoVisible(true); // Muestra el modal de "Servicio contratado"
  };

  // Al dar clic en "Aceptar" en el modal de éxito
  const handleAceptarExito = () => {
    setModalExitoVisible(false);
    if (onNavigate) {
      onNavigate('dashboardUser'); // Regresa al dashboard de Aaron
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Barra superior con botón de regreso */}
        <View style={styles.headerRow}>
          <Pressable style={styles.backButton} onPress={() => onNavigate && onNavigate('aprender')}>
            <Text style={styles.backButtonText}>←</Text>
          </Pressable>
          <Text style={styles.tituloHeader}>Contratar servicio</Text>
        </View>

        {/* Tarjeta principal con la información detallada de la clase */}
        <View style={styles.cardDetalle}>
          
          <View style={styles.rowTopCard}>
            <Image source={servicio.img} style={styles.avatarAutor} />
            <View style={styles.textContainerTop}>
              <Text style={styles.tituloServicio}>{servicio.titulo}</Text>
              <Text style={styles.autorServicio}>Prof. {servicio.autor}</Text>
            </View>
          </View>

          <View style={styles.seccionInfo}>
            <Text style={styles.labelInfo}>Categoría</Text>
            <Text style={styles.valorInfo}>{servicio.categoria}</Text>
          </View>

          <View style={styles.seccionInfo}>
            <Text style={styles.labelInfo}>Duración</Text>
            <Text style={styles.valorInfo}>{servicio.duracion}</Text>
          </View>

          <View style={styles.seccionInfo}>
            <Text style={styles.labelInfo}>Descripción</Text>
            <Text style={styles.valorDescripcion}>{servicio.descripcion}</Text>
          </View>

        </View>

        {/* Botón principal de Contratar */}
        <Pressable style={styles.botonContratar} onPress={handleIntentarContratar}>
          <Text style={styles.textoBotonContratar}>Contratar servicio</Text>
        </Pressable>

      </ScrollView>

      {/* ----------------------------------------------------
         MODAL 1: ¿Desea contratar el servicio? (SÍ / NO)
      ---------------------------------------------------- */}
      <Modal visible={modalContratarVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalIcon}>⚠️</Text>
            <Text style={styles.modalTitle}>¿Desea contratar el servicio?</Text>
            <Text style={styles.modalSub}>Se descontará 1 crédito de tu saldo actual.</Text>
            
            <View style={styles.modalBtnRow}>
              <Pressable style={styles.btnNo} onPress={() => setModalContratarVisible(false)}>
                <Text style={styles.btnTextNo}>NO</Text>
              </Pressable>
              
              <Pressable style={styles.btnSi} onPress={handleConfirmarSi}>
                <Text style={styles.btnTextSi}>SÍ</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* ----------------------------------------------------
         MODAL 2: Servicio Contratado (Con botón Aceptar)
      ---------------------------------------------------- */}
      <Modal visible={modalExitoVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalIconSuccess}>✅</Text>
            <Text style={styles.modalTitle}>Servicio contratado</Text>
            <Text style={styles.modalSub}>¡Listo! El profesor ha sido notificado.</Text>
            
            <Pressable style={styles.btnAceptar} onPress={handleAceptarExito}>
              <Text style={styles.btnTextAceptar}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFFFFF' 
  },
  scrollContent: { 
    flexGrow: 1, 
    justifyContent: 'center', // Centra el contenido verticalmente igual que Login/Registro
    alignItems: 'center',     // Centra los elementos horizontalmente
    padding: 24 
  },
  headerRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    width: '100%', 
    marginBottom: 20, 
    position: 'relative'
  },
  backButton: { 
    position: 'absolute',
    left: 0,
    padding: 6 
  },
  backButtonText: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#1E3A8A' 
  },
  tituloHeader: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#1E3A8A',
    textAlign: 'center'
  },
  cardDetalle: { 
    width: '100%', 
    backgroundColor: '#F9FAFB', 
    padding: 20, 
    borderRadius: 14, 
    borderWidth: 1, 
    borderColor: '#E5E7EB', 
    marginBottom: 24,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 1 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 2, 
    elevation: 2 
  },
  rowTopCard: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 18, 
    borderBottomWidth: 1, 
    borderBottomColor: '#E5E7EB', 
    paddingBottom: 14 
  },
  avatarAutor: { 
    width: 55, 
    height: 55, 
    borderRadius: 27.5, 
    backgroundColor: '#E5E7EB', 
    marginRight: 14 
  },
  textContainerTop: {
    flex: 1,
    justifyContent: 'center'
  },
  tituloServicio: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#1F2937' 
  },
  autorServicio: { 
    fontSize: 13, 
    color: '#6B7280', 
    marginTop: 2 
  },
  seccionInfo: { 
    marginBottom: 14,
    alignItems: 'flex-start'
  },
  labelInfo: { 
    fontSize: 12, 
    fontWeight: 'bold', 
    color: '#9CA3AF', 
    textTransform: 'uppercase', 
    marginBottom: 2 
  },
  valorInfo: { 
    fontSize: 15, 
    fontWeight: '600', 
    color: '#374151' 
  },
  valorDescripcion: { 
    fontSize: 14, 
    color: '#4B5563', 
    lineHeight: 20,
    textAlign: 'left'
  },
  botonContratar: { 
    width: '100%', 
    backgroundColor: '#1E3A8A', 
    padding: 16, 
    borderRadius: 8, 
    alignItems: 'center' 
  },
  textoBotonContratar: { 
    color: '#FFFFFF', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },

  /* Estilos de los Modales */
  modalOverlay: { 
    flex: 1, 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20 
  },
  modalBox: { 
    width: '85%', 
    backgroundColor: '#FFFFFF', 
    borderRadius: 14, 
    padding: 22, 
    alignItems: 'center', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 4, 
    elevation: 5 
  },
  modalIcon: { fontSize: 32, marginBottom: 8 },
  modalIconSuccess: { fontSize: 32, marginBottom: 8 },
  modalTitle: { fontSize: 18, fontWeight: 'bold', color: '#1F2937', textAlign: 'center', marginBottom: 6 },
  modalSub: { fontSize: 13, color: '#6B7280', textAlign: 'center', marginBottom: 20 },
  modalBtnRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  btnNo: { flex: 1, backgroundColor: '#EF4444', padding: 12, borderRadius: 8, alignItems: 'center', marginRight: 8 },
  btnTextNo: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 14 },
  btnSi: { flex: 1, backgroundColor: '#10B981', padding: 12, borderRadius: 8, alignItems: 'center', marginLeft: 8 },
  btnTextSi: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 14 },
  btnAceptar: { width: '100%', backgroundColor: '#1E3A8A', padding: 12, borderRadius: 8, alignItems: 'center' },
  btnTextAceptar: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 14 }
});