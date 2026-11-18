/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Pressable } from 'react-native';
import { useState } from 'react';

// Importación de todas las pantallas del Banco de Tiempo
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DashboardUserScreen from './screens/DashboardUserScreen';
import ServiceRegisterScreen from './screens/ServiceRegisterScreen';
import AprenderScreen from './screens/AprenderScreen';
import ContratarServicioScreen from './screens/ContratarServicioScreen';
import AdminServiciosScreen from './screens/AdminServiciosScreen';
import ModificarServicioScreen from './screens/ModificarServicioScreen';
import PerfilUserScreen from './screens/PerfilUserScreen';
import HistorialScreen from './screens/HistorialScreen';
import FavoritosScreen from './screens/FavoritosScreen';

/* 2. Zona main */
export default function MenuScreen() {
    /* Creación de la variable screen y control de roles */
    const [screen, setScreen] = useState('menu');
    const [rolUsuario, setRolUsuario] = useState('usuario');

    
    
    // Estados globales para la transferencia de datos entre pantallas
    const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
    const [servicioAModificar, setServicioAModificar] = useState(null);

    // Función para manejar el éxito del login y redirigir según el rol
    const handleLoginSuccess = (rol) => {
        setRolUsuario(rol);
        if (rol === 'admin') {
            setScreen('dashboardAdmin');
        } else {
            setScreen('dashboardUser');
        }
    };

    switch(screen){
        case 'login':
            return <LoginScreen onLoginSuccess={handleLoginSuccess} onNavigate={setScreen} />;
        
        case 'register':
            return <RegisterScreen onNavigate={setScreen} />;
        
        case 'dashboardUser':
            return <DashboardUserScreen onNavigate={setScreen} />;
        
        case 'serviceRegister':
            return <ServiceRegisterScreen onNavigate={setScreen} />;
        
        case 'aprender':
            return (
                <AprenderScreen 
                    onNavigate={setScreen} 
                    onSeleccionarServicio={setServicioSeleccionado} 
                />
            );
          
        case 'contratarServicio':
            return (
                <ContratarServicioScreen 
                    onNavigate={setScreen} 
                    servicioSeleccionado={servicioSeleccionado} 
                />
            );

        case 'adminServicios':
            return (
                <AdminServiciosScreen 
                    onNavigate={setScreen} 
                    onSeleccionarModificar={setServicioAModificar} 
                />
            );

        case 'modificarServicio':
            return (
                <ModificarServicioScreen 
                    onNavigate={setScreen} 
                    servicioAModificar={servicioAModificar} 
                />
            );

        case 'perfilUser':
            return <PerfilUserScreen onNavigate={setScreen} />;

        case 'historial':
            return <HistorialScreen onNavigate={setScreen} />;

        case 'favoritos':
            return (
                <FavoritosScreen 
                    onNavigate={setScreen} 
                    onSeleccionarServicio={setServicioSeleccionado} 
                />
            );
        
        case 'menu':
        default: 
            return (
                <ScrollView contentContainerStyle={styles.container}>
                    <Text style={styles.mainTitle}>Menú de Proyecto: Banco de Tiempo</Text>
                    <Text style={styles.subTitle}>Usuario Activo: Aaron Ferrer</Text>

                    <Pressable style={styles.boton} onPress={() => setScreen('login')}><Text style={styles.textoBoton}>1. Login (Redirección por Rol)</Text></Pressable>
                    <Pressable style={styles.boton} onPress={() => setScreen('register')}><Text style={styles.textoBoton}>2. Registro de Usuario</Text></Pressable>
                    <Pressable style={styles.boton} onPress={() => setScreen('dashboardUser')}><Text style={styles.textoBoton}>3. Dashboard Usuario</Text></Pressable>
                    <Pressable style={styles.boton} onPress={() => setScreen('serviceRegister')}><Text style={styles.textoBoton}>4. Registro de Servicios</Text></Pressable>
                    <Pressable style={styles.boton} onPress={() => setScreen('aprender')}><Text style={styles.textoBoton}>5. Aprender (Sección de Servicios)</Text></Pressable>
                    <Pressable style={styles.boton} onPress={() => setScreen('adminServicios')}><Text style={styles.textoBoton}>6. Administrar Mis Servicios</Text></Pressable>
                    <Pressable style={styles.boton} onPress={() => setScreen('perfilUser')}><Text style={styles.textoBoton}>7. Perfil e Historial</Text></Pressable>
                    <Pressable style={styles.boton} onPress={() => setScreen('favoritos')}><Text style={styles.textoBoton}>8. Favoritos</Text></Pressable>
                    <StatusBar style="auto" />
                </ScrollView>
            );
    }
}

/* 3. Zona Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 4,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 20,
    textAlign: 'center',
  },
  boton: {
    backgroundColor: '#1E3A8A',
    width: '100%',
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});