import React, { useState, useEffect } from 'react';
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

export default function ModificarServicioScreen({ onNavigate, servicioAModificar }) {
  const [nombreServicio, setNombreServicio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [duracion, setDuracion] = useState('');

  const [modalConfirmacionVisible, setModalConfirmacionVisible] = useState(false);
  const [modalExitoVisible, setModalExitoVisible] = useState(false);

  useEffect(() => {
    if (servicioAModificar) {
      setNombreServicio(servicioAModificar.titulo || '');
      setDescripcion(servicioAModificar.descripcion || '');
      setCategoria(servicioAModificar.categoria || '');
      setDuracion(servicioAModificar.duracion || '');
    }
  }, [servicioAModificar]);

  const handleIntentarModificar = () => {
    if (!nombreServicio.trim() || !descripcion.trim() || !categoria.trim() || !duracion.trim()) {
      alert('Por favor completa todos los campos');
      return;
    }
    setModalConfirmacionVisible(true);
  };

  const handleConfirmarSi = () => {
    setModalConfirmacionVisible(false);
    setModalExitoVisible(true);
  };

  const handleAceptarExito = () => {
    setModalExitoVisible(false);
    if (onNavigate) {
      onNavigate('adminServicios');
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
          <Pressable style={styles.backButton} onPress={() => onNavigate && onNavigate('adminServicios')}>
            <Text style={styles.backButtonText}>←</Text>
          </Pressable>
          <Text style={styles.tituloHeader}>Modificar servicio</Text>
        </View>

        {/* Formulario Centrado */}
        <View style={styles.formContainer}>
          
          <Text style={styles.label}>Nombre del servicio</Text>
          <TextInput 
            style={styles.input} 
            value={nombreServicio} 
            onChangeText={setNombreServicio} 
            placeholder="Ej. Asesoría de Programación"
            placeholderTextColor="#9CA3AF"
          />

          <Text style={styles.label}>Descripción</Text>
          <TextInput 
            style={[styles.input, styles.textArea]} 
            multiline 
            value={descripcion} 
            onChangeText={setDescripcion} 
            placeholder="Describe brevemente el servicio"
            placeholderTextColor="#9CA3AF"
          />

          <Text style={styles.label}>Categoría</Text>
          <TextInput 
            style={styles.input} 
            value={categoria} 
            onChangeText={setCategoria} 
            placeholder="Ej. Tecnología"
            placeholderTextColor="#9CA3AF"
          />

          <Text style={styles.label}>Duración de horas</Text>
          <TextInput 
            style={styles.input} 
            value={duracion} 
            onChangeText={setDuracion} 
            placeholder="Ej. 2 Horas"
            placeholderTextColor="#9CA3AF"
          />

          <Pressable style={styles.botonModificar} onPress={handleIntentarModificar}>
            <Text style={styles.textoBotonModificar}>Modificar servicio</Text>
          </Pressable>

        </View>

      </ScrollView>

      {/* Modal 1: Confirmación de modificación */}
      <Modal visible={modalConfirmacionVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalIcon}>⚠️</Text>
            <Text style={styles.modalTitle}>¿Estás seguro de modificar el servicio?</Text>
            
            <View style={styles.modalBtnRow}>
              <Pressable style={styles.btnCancelar} onPress={() => setModalConfirmacionVisible(false)}>
                <Text style={styles.btnTextCancelar}>Cancelar</Text>
              </Pressable>
              
              <Pressable style={styles.btnAceptarConfirm} onPress={handleConfirmarSi}>
                <Text style={styles.btnTextAceptarConfirm}>Aceptar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal 2: Éxito al modificar */}
      <Modal visible={modalExitoVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalIconSuccess}>✅</Text>
            <Text style={styles.modalTitle}>Servicio modificado</Text>
            <Text style={styles.modalSub}>Los cambios se han guardado correctamente.</Text>
            
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
    justifyContent: 'center', // Centra verticalmente como Login y Registro
    alignItems: 'center',     // Centra horizontalmente
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
  formContainer: { 
    width: '100%', 
    backgroundColor: '#F9FAFB', 
    padding: 20, 
    borderRadius: 14, 
    borderWidth: 1, 
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2
  },
  label: { 
    fontSize: 13, 
    fontWeight: '600', 
    color: '#374151', 
    marginBottom: 6, 
    marginTop: 10 
  },
  input: { 
    width: '100%', 
    height: 48, 
    backgroundColor: '#FFFFFF', 
    borderWidth: 1, 
    borderColor: '#D1D5DB', 
    borderRadius: 8, 
    paddingHorizontal: 14, 
    fontSize: 14, 
    color: '#1F2937' 
  },
  textArea: { 
    height: 80, 
    textAlignVertical: 'top', 
    paddingTop: 10 
  },
  botonModificar: { 
    width: '100%', 
    backgroundColor: '#1E3A8A', 
    padding: 16, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginTop: 24 
  },
  textoBotonModificar: { 
    color: '#FFFFFF', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  modalOverlay: { 
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.5)', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20 
  },
  modalBox: { 
    width: '85%', 
    backgroundColor: '#FFF', 
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
  modalTitle: { fontSize: 18, fontWeight: 'bold', color: '#1F2937', textAlign: 'center', marginBottom: 16 },
  modalSub: { fontSize: 13, color: '#6B7280', textAlign: 'center', marginBottom: 20 },
  modalBtnRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  btnCancelar: { flex: 1, backgroundColor: '#EF4444', padding: 12, borderRadius: 8, alignItems: 'center', marginRight: 8 },
  btnTextCancelar: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
  btnAceptarConfirm: { flex: 1, backgroundColor: '#10B981', padding: 12, borderRadius: 8, alignItems: 'center', marginLeft: 8 },
  btnTextAceptarConfirm: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
  btnAceptar: { width: '100%', backgroundColor: '#1E3A8A', padding: 12, borderRadius: 8, alignItems: 'center' },
  btnTextAceptar: { color: '#FFF', fontWeight: 'bold', fontSize: 14 }
});