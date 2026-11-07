/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import MenuScreen from './screens/MenuScreen';
import Ejemplo from './screens/Ejemplo';

/* 2. Zona main */
export default function App() {
  return (

    <Ejemplo></Ejemplo>
    
  );
}

/* 3. Zona Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
});
