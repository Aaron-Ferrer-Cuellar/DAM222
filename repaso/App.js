import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Pressable, ScrollView } from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');
  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const Mensajes = () => {
    // Validar que no haya campos vacíos
    if (!nombre.trim() || !carrera.trim() || !semestre.trim()) {
      alert('Campos incompletos: Debes llenar todos los campos.');
      return;
    }

    // Validar que el semestre sea un número
    if (isNaN(Number(semestre))) {
      alert('Error: El semestre debe ser un número.');
      return;
    }

    const Taller = taller ? 'Sí' : 'No';
    const Constancia = constancia ? 'Sí' : 'No';
    const Deportes = deportes ? 'Sí' : 'No';

    // Mostrar el mensaje con los datos capturados
    alert(`Registro enviado\n\nNombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}\n\nTaller: ${Taller}\nConstancia: ${Constancia}\nDeportes: ${Deportes}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registro de Evento Universitario</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        placeholderTextColor="#888"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Carrera"
        placeholderTextColor="#888"
        value={carrera}
        onChangeText={setCarrera}
      />

      <TextInput
        style={styles.input}
        placeholder="Semestre"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={semestre}
        onChangeText={setSemestre}
      />

      <Text style={styles.subtitle}>Opciones</Text>

      <View style={styles.switchRow}>
        <Text style={styles.label}>¿Asistirá al taller?</Text>
        <Switch value={taller} onValueChange={setTaller} />
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.label}>¿Requiere constancia?</Text>
        <Switch value={constancia} onValueChange={setConstancia} />
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.label}>¿Participará en deportes?</Text>
        <Switch value={deportes} onValueChange={setDeportes} />
      </View>

      <Pressable style={styles.button} onPress={Mensajes}>
        <Text style={styles.buttonText}>Enviar Registro</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#ADD0FF',
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});