import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, Image, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function RegisterScreen({ onNavigate }) {
  const [nombre, setNombre] = useState('Aaron Ferrer');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    Alert.alert('Éxito', `Cuenta creada para ${nombre}`);
    if (onNavigate) onNavigate('dashboardUser');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* ESPACIO PARA LOGO: Tamaño preestablecido en estilos */}
        <Image 
          source={require('../img/agregar-usuario.png')} 
          style={styles.logoImage} 
        />
        <Text style={styles.tituloBanco}>BANCO DE TIEMPO</Text>
        <Text style={styles.subtituloTalento}>Registro de nuevo usuario</Text>

        <Text style={styles.label}>Nombre completo</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Tu nombre..." 
          placeholderTextColor="#9CA3AF"
          value={nombre} 
          onChangeText={setNombre} 
        />

        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput 
          style={styles.input} 
          placeholder="correo@upq.edu.mx" 
          placeholderTextColor="#9CA3AF"
          keyboardType="email-address" 
          autoCapitalize="none"
          value={correo} 
          onChangeText={setCorreo} 
        />

        <Text style={styles.label}>Teléfono</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Número telefónico..." 
          placeholderTextColor="#9CA3AF"
          keyboardType="phone-pad" 
          value={telefono} 
          onChangeText={setTelefono} 
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Contraseña..." 
          placeholderTextColor="#9CA3AF"
          secureTextEntry 
          value={password} 
          onChangeText={setPassword} 
        />

        <Pressable style={styles.botonPrincipal} onPress={handleRegister}>
          <Text style={styles.textoBotonPrincipal}>Crear Cuenta</Text>
        </Pressable>

        {/* REDIRECCIÓN DIRECTA A LOGIN */}
        <Pressable style={styles.botonSecundario} onPress={() => onNavigate && onNavigate('login')}>
          <Text style={styles.textoBotonSecundario}>¿Ya tienes cuenta? Inicia sesión</Text>
        </Pressable>

      </ScrollView>
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
  logoImage: { 
    width: 80, 
    height: 80, 
    borderRadius: 0, 
    marginBottom: 12, 
  },
  tituloBanco: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#1E3A8A', 
    letterSpacing: 1 
  },
  subtituloTalento: { 
    fontSize: 12, 
    color: '#6B7280', 
    marginBottom: 24 
  },
  label: { 
    alignSelf: 'flex-start', 
    fontSize: 13, 
    fontWeight: '600', 
    color: '#374151', 
    marginBottom: 6 
  },
  input: { 
    width: '100%', 
    height: 50, 
    backgroundColor: '#F9FAFB', 
    borderWidth: 1, 
    borderColor: '#D1D5DB', 
    borderRadius: 8, 
    paddingHorizontal: 14, 
    marginBottom: 16, 
    fontSize: 15,
    color: '#1F2937' 
  },
  botonPrincipal: { 
    width: '100%', 
    backgroundColor: '#10B981', 
    padding: 15, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginTop: 10 
  },
  textoBotonPrincipal: { 
    color: '#FFFFFF', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  botonSecundario: { 
    width: '100%', 
    padding: 12, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginTop: 8 
  },
  textoBotonSecundario: { 
    color: '#1E3A8A', 
    fontSize: 14, 
    fontWeight: '600' 
  }
});