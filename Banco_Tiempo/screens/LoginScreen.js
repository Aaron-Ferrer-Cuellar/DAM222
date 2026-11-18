import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, KeyboardAvoidingView, Platform, Image, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen({ onLoginSuccess, onNavigate }) {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleLogin = () => {
    if (!correo.trim() || !contrasena.trim()) {
      Alert.alert('Error', 'Por favor ingresa tu correo y contraseña');
      return;
    }
    // Redirección por rol simulada para Aaron
    const esAdmin = correo.toLowerCase().includes('admin');
    const rol = esAdmin ? 'admin' : 'usuario';
    Alert.alert('Éxito', `Bienvenido Aaron (${rol.toUpperCase()})`);
    if (onLoginSuccess) onLoginSuccess(rol);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar style="dark" />
      <View style={styles.content}>
        
        {/* ESPACIO PARA LOGO: Tamaño ya establecido en los estilos */}
        <Image 
          source={require('../img/iniciar-sesion.png')} 
          style={styles.logoImage} 
        />
        <Text style={styles.tituloBanco}>BANCO DE TIEMPO</Text>
        <Text style={styles.subtituloTalento}>Talento y colaboración</Text>

        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu correo..."
          placeholderTextColor="#9CA3AF"
          value={correo}
          onChangeText={setCorreo}
          autoCapitalize="none"
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu contraseña..."
          placeholderTextColor="#9CA3AF"
          secureTextEntry
          value={contrasena}
          onChangeText={setContrasena}
        />

        <Pressable style={styles.botonPrincipal} onPress={handleLogin}>
          <Text style={styles.textoBotonPrincipal}>Iniciar sesión</Text>
        </Pressable>

        {/* Botón conectado para redireccionar a RegisterScreen sin validar campos */}
        <Pressable style={styles.botonSecundario} onPress={() => onNavigate && onNavigate('register')}>
          <Text style={styles.textoBotonSecundario}>Crear cuenta</Text>
        </Pressable>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFFFFF' 
  },
  content: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 24, 
    alignItems: 'center' 
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
    marginBottom: 30 
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
    backgroundColor: '#1E3A8A', 
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