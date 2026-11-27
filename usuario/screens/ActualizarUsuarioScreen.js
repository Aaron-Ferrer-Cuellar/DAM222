import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
// AGREGADO: router para volver al listado y editarUsuario para guardar cambios en LocalStorage
import { router, useLocalSearchParams } from 'expo-router';
import { editarUsuario } from '../services/usuariosService';

export default function ActualizarUsuarioScreen() {

    const params = useLocalSearchParams();
    const [nombre, setNombre] = useState(params.nombre ?? ''); // AGREGADO: Fallback vacío si no llega params.nombre
    const [edad, setEdad] = useState(params.edad !== undefined ? String(params.edad) : ''); // AGREGADO: Convierte edad a string para TextInput
    // AGREGADO: Estado para evitar doble guardado
    const [guardando, setGuardando] = useState(false);

    // AGREGADO: Función asíncrona que valida y actualiza el usuario en LocalStorage
    const actualizarUsuario = async () => {
      if (guardando) return;
      setGuardando(true);
      try {
        await editarUsuario(params.id, { nombre, edad });
        alert('Usuario actualizado correctamente.');
        router.replace('/consulta');
      } catch (error) {
        alert(error.message || 'Error al actualizar el usuario.');
      } finally {
        setGuardando(false);
      }
    };

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>
        Actualizar Usuario
      </Text>

      <View style={styles.card}>

        <Text style={styles.label}>
          Nombre
        </Text>

        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Nombre"
        />

        <Text style={styles.label}>
          Edad
        </Text>

        <TextInput
          style={styles.input}
          value={edad}
          onChangeText={setEdad}
          placeholder="Edad"
          keyboardType="numeric"
        />

        {/* AGREGADO: Estado disabled y texto dinámico mientras guarda */}
        <Pressable
          style={[styles.boton, guardando && { opacity: 0.6 }]}
          onPress={actualizarUsuario}
          disabled={guardando}
        >
          <Text style={styles.textoBoton}>
            {guardando ? 'Guardando...' : 'Guardar cambios'}
          </Text>
        </Pressable>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F2937',
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 25,
    elevation: 5,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },

  boton: {
    backgroundColor: '#FACC15',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBoton: {
    color: '#1F2937',
    fontSize: 16,
    fontWeight: 'bold',
  },

});