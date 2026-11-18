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

export default function AdminServiciosScreen({ onNavigate, onSeleccionarModificar }) {
  const [modalEliminarVisible, setModalEliminarVisible] = useState(false);
  const [servicioAEliminar, setServicioAEliminar] = useState(null);

  // Lista inicial con 5 servicios propios del usuario
  const [misServicios, setMisServicios] = useState([
    { 
      id: '1', 
      titulo: 'Asesoría de Programación', 
      categoria: 'Tecnología', 
      duracion: '1 Hora', 
      descripcion: 'Clases de React Native, JavaScript y desarrollo móvil.', 
      img: require('../img/perfil.png') 
    },
    { 
      id: '2', 
      titulo: 'Entrenamiento Funcional', 
      categoria: 'Deportes', 
      duracion: '1.5 Horas', 
      descripcion: 'Acondicionamiento físico general y rutinas de fuerza.', 
      img: require('../img/perfil.png') 
    },
    { 
      id: '3', 
      titulo: 'Conversación en Inglés', 
      categoria: 'Idiomas', 
      duracion: '1 Hora', 
      descripcion: 'Práctica fluida para perder el miedo a hablar en inglés.', 
      img: require('../img/perfil.png') 
    },
    { 
      id: '4', 
      titulo: 'Finanzas Personales', 
      categoria: 'Desarrollo Profesional', 
      duracion: '1 Hora', 
      descripcion: 'Estrategias de ahorro y control inteligente de gastos.', 
      img: require('../img/perfil.png') 
    },
    { 
      id: '5', 
      titulo: 'Diseño UI/UX en Figma', 
      categoria: 'Tecnología', 
      duracion: '2 Horas', 
      descripcion: 'Creación de prototipos y wireframes interactivos.', 
      img: require('../img/perfil.png') 
    },
  ]);

  const handleModificar = (servicio) => {
    if (onSeleccionarModificar) {
      onSeleccionarModificar(servicio);
    }
    if (onNavigate) {
      onNavigate('modificarServicio');
    }
  };

  const confirmarEliminar = (servicio) => {
    setServicioAEliminar(servicio);
    setModalEliminarVisible(true);
  };

  const ejecutarEliminacion = () => {
    setMisServicios(misServicios.filter(s => s.id !== servicioAEliminar.id));
    setModalEliminarVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Barra superior con mayor espacio arriba */}
        <View style={styles.headerRow}>
          <Pressable style={styles.backButton} onPress={() => onNavigate && onNavigate('dashboardUser')}>
            <Text style={styles.backButtonText}>←</Text>
          </Pressable>
          <Text style={styles.tituloHeader}>Administrar mis servicios</Text>
        </View>

        {/* Botón Registrar Nuevo Servicio */}
        <Pressable style={styles.botonRegistrarNuevo} onPress={() => onNavigate && onNavigate('serviceRegister')}>
          <Text style={styles.textoBotonRegistrarNuevo}>+ Registrar servicio</Text>
        </Pressable>

        {/* Lista de Servicios Propios */}
        {misServicios.length === 0 ? (
          <Text style={styles.vacioText}>No tienes servicios registrados actualmente.</Text>
        ) : (
          misServicios.map((item) => (
            <View key={item.id} style={styles.cardServicio}>
              <View style={styles.cardTopRow}>
                <Image source={item.img} style={styles.thumb} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.cardTitulo}>{item.titulo}</Text>
                  <Text style={styles.cardSub}>{item.categoria} • {item.duracion}</Text>
                </View>
              </View>

              {/* Botones Modificar y Eliminar */}
              <View style={styles.btnRowCard}>
                <Pressable style={styles.btnModificar} onPress={() => handleModificar(item)}>
                  <Text style={styles.textModificar}>MODIFICAR</Text>
                </Pressable>
                <Pressable style={styles.btnEliminar} onPress={() => confirmarEliminar(item)}>
                  <Text style={styles.textEliminar}>ELIMINAR</Text>
                </Pressable>
              </View>
            </View>
          ))
        )}

      </ScrollView>

      {/* Modal Confirmación de Eliminación */}
      <Modal visible={modalEliminarVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalIcon}>⚠️</Text>
            <Text style={styles.modalTitle}>¿Desea eliminar este servicio?</Text>
            <Text style={styles.modalSub}>Esta acción no se puede deshacer.</Text>
            
            <View style={styles.modalBtnRow}>
              <Pressable style={styles.btnNo} onPress={() => setModalEliminarVisible(false)}>
                <Text style={styles.btnTextNo}>CANCELAR</Text>
              </Pressable>
              <Pressable style={styles.btnSi} onPress={ejecutarEliminacion}>
                <Text style={styles.btnTextSi}>ELIMINAR</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFFFFF' 
  },
  scrollContent: { 
    paddingTop: 40, 
    paddingBottom: 30, 
    paddingHorizontal: 20, 
    alignItems: 'center' 
  },
  headerRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '100%', 
    marginBottom: 24, 
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
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#1E3A8A', 
    textAlign: 'center' 
  },
  botonRegistrarNuevo: { 
    width: '100%', 
    backgroundColor: '#10B981', 
    padding: 14, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginBottom: 20 
  },
  textoBotonRegistrarNuevo: { 
    color: '#FFFFFF', 
    fontSize: 15, 
    fontWeight: 'bold' 
  },
  vacioText: { 
    color: '#6B7280', 
    marginTop: 30, 
    fontSize: 14 
  },
  cardServicio: { 
    width: '100%', 
    backgroundColor: '#F9FAFB', 
    borderWidth: 1, 
    borderColor: '#E5E7EB', 
    borderRadius: 12, 
    padding: 16, 
    marginBottom: 14 
  },
  cardTopRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 14 
  },
  thumb: { 
    width: 45, 
    height: 45, 
    borderRadius: 22.5, 
    backgroundColor: '#E5E7EB', 
    marginRight: 12 
  },
  cardTitulo: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#1F2937' 
  },
  cardSub: { 
    fontSize: 12, 
    color: '#6B7280', 
    marginTop: 2 
  },
  btnRowCard: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    borderTopWidth: 1, 
    borderTopColor: '#E5E7EB', 
    paddingTop: 12 
  },
  btnModificar: { 
    flex: 1, 
    backgroundColor: '#3B82F6', 
    padding: 10, 
    borderRadius: 6, 
    alignItems: 'center', 
    marginRight: 6 
  },
  textModificar: { 
    color: '#FFFFFF', 
    fontWeight: 'bold', 
    fontSize: 12 
  },
  btnEliminar: { 
    flex: 1, 
    backgroundColor: '#EF4444', 
    padding: 10, 
    borderRadius: 6, 
    alignItems: 'center', 
    marginLeft: 6 
  },
  textEliminar: { 
    color: '#FFFFFF', 
    fontWeight: 'bold', 
    fontSize: 12 
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
    alignItems: 'center' 
  },
  modalIcon: { fontSize: 32, marginBottom: 8 },
  modalTitle: { fontSize: 18, fontWeight: 'bold', color: '#1F2937', textAlign: 'center', marginBottom: 6 },
  modalSub: { fontSize: 13, color: '#6B7280', textAlign: 'center', marginBottom: 20 },
  modalBtnRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  btnNo: { flex: 1, backgroundColor: '#9CA3AF', padding: 12, borderRadius: 8, alignItems: 'center', marginRight: 8 },
  btnTextNo: { color: '#FFF', fontWeight: 'bold', fontSize: 13 },
  btnSi: { flex: 1, backgroundColor: '#EF4444', padding: 12, borderRadius: 8, alignItems: 'center', marginLeft: 8 },
  btnTextSi: { color: '#FFF', fontWeight: 'bold', fontSize: 13 }
});