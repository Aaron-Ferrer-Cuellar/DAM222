import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Pressable, 
  ScrollView, 
  Modal, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function ServiceRegisterScreen({ onNavigate }) {
  const [nombreServicio, setNombreServicio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [duracion, setDuracion] = useState('');

  // Estados para los modales
  const [modalConfirmacionVisible, setModalConfirmacionVisible] = useState(false);
  const [modalExitoVisible, setModalExitoVisible] = useState(false);

  // Función para regresar al Dashboard principal
  const handleRegresar = () => {
    if (onNavigate) {
      onNavigate('dashboardUser');
    }
  };

  // Intentar registrar servicio
  const handleIntentarRegistrar = () => {
    if (!nombreServicio.trim() || !descripcion.trim() || !categoria.trim() || !duracion.trim()) {
      alert('Por favor completa todos los campos');
      return;
    }
    setModalConfirmacionVisible(true);
  };

  // Confirmar registro (SÍ)
  const handleConfirmarSi = () => {
    setModalConfirmacionVisible(false);
    setModalExitoVisible(true);
  };

  // Aceptar el mensaje de éxito y regresar
  const handleAceptarExito = () => {
    setModalExitoVisible(false);
    handleRegresar();
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Contenedor Principal Centrado */}
        <View style={styles.formContainer}>

          {/* Header con botón de regreso */}
          <View style={styles.headerRow}>
            <Pressable style={styles.backButton} onPress={handleRegresar}>
              <Text style={styles.backButtonText}>←</Text>
            </Pressable>
            <Text style={styles.tituloHeader}>Registrar servicio</Text>
          </View>

          {/* Formulario */}
          <Text style={styles.label}>Nombre del servicio</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Ej. Asesoría de Programación..." 
            placeholderTextColor="#9CA3AF"
            value={nombreServicio} 
            onChangeText={setNombreServicio} 
          />

          <Text style={styles.label}>Descripción</Text>
          <TextInput 
            style={[styles.input, styles.textArea]} 
            placeholder="Breve descripción de lo que enseñarás..." 
            placeholderTextColor="#9CA3AF"
            multiline 
            value={descripcion} 
            onChangeText={setDescripcion} 
          />

          <Text style={styles.label}>Categoría</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Ej. Tecnología, Idiomas..." 
            placeholderTextColor="#9CA3AF"
            value={categoria} 
            onChangeText={setCategoria} 
          />

          <Text style={styles.label}>Duración</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Ej. 1 Hora / 2 Horas..." 
            placeholderTextColor="#9CA3AF"
            value={duracion} 
            onChangeText={setDuracion} 
          />

          <Pressable style={styles.botonRegistrar} onPress={handleIntentarRegistrar}>
            <Text style={styles.textoBotonRegistrar}>Registrar servicio</Text>
          </Pressable>

        </View>

      </ScrollView>

      {/* MODAL 1: Confirmación (SÍ / NO) */}
      <Modal visible={modalConfirmacionVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalIcon}>⚠️</Text>
            <Text style={styles.modalTitle}>¿Desea registrar un servicio?</Text>
            
            <View style={styles.modalBtnRow}>
              <Pressable style={styles.btnNo} onPress={() => setModalConfirmacionVisible(false)}>
                <Text style={styles.btnTextNo}>NO</Text>
              </Pressable>
              
              <Pressable style={styles.btnSi} onPress={handleConfirmarSi}>
                <Text style={styles.btnTextSi}>SÍ</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* MODAL 2: Éxito */}
      <Modal visible={modalExitoVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalIconSuccess}>✅</Text>
            <Text style={styles.modalTitle}>Servicio registrado</Text>
            <Text style={styles.modalSub}>Tu servicio ya está disponible en la plataforma.</Text>
            
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
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 24 
  },
  formContainer: { 
    width: '100%', 
    maxWidth: 400,
    backgroundColor: '#FFFFFF', 
    padding: 20, 
    borderRadius: 14, 
    borderWidth: 1, 
    borderColor: '#E5E7EB',
    elevation: 2
  },
  headerRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    width: '100%', 
    marginBottom: 20 
  },
  backButton: { 
    padding: 4, 
    marginRight: 10 
  },
  backButtonText: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#1E3A8A' 
  },
  tituloHeader: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#1E3A8A' 
  },
  label: { 
    alignSelf: 'flex-start',
    fontSize: 13, 
    fontWeight: '600', 
    color: '#374151', 
    marginBottom: 6, 
    marginTop: 10 
  },
  input: { 
    width: '100%', 
    height: 48, 
    backgroundColor: '#F9FAFB', 
    borderWidth: 1, 
    borderColor: '#D1D5DB', 
    borderRadius: 8, 
    paddingHorizontal: 14, 
    fontSize: 14,
    color: '#1F2937' 
  },
  textArea: { 
    height: 90, 
    textAlignVertical: 'top', 
    paddingTop: 10 
  },
  botonRegistrar: { 
    width: '100%', 
    backgroundColor: '#1E3A8A', 
    padding: 15, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginTop: 22 
  },
  textoBotonRegistrar: { 
    color: '#FFFFFF', 
    fontSize: 15, 
    fontWeight: 'bold' 
  },
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
    elevation: 5
  },
  modalIcon: {
    fontSize: 32,
    marginBottom: 8
  },
  modalIconSuccess: {
    fontSize: 32,
    marginBottom: 8
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 8
  },
  modalSub: {
    fontSize: 13,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 20
  },
  modalBtnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10
  },
  btnNo: {
    flex: 1,
    backgroundColor: '#EF4444',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 8
  },
  btnTextNo: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14
  },
  btnSi: {
    flex: 1,
    backgroundColor: '#10B981',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 8
  },
  btnTextSi: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14
  },
  btnAceptar: {
    width: '100%',
    backgroundColor: '#1E3A8A',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 5
  },
  btnTextAceptar: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14
  }
});