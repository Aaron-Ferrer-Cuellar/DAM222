/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Perfil } from './components/Perfil';

/* 2. Zona main */
export default function App() {
  return (

    <View style={styles.container}>

      <Perfil style={styles.tarjeta1} nombre="Genaro" carrera="ITTID" materia="Movil" cuatri="4"></Perfil>
      <Perfil style={styles.tarjeta2} nombre="Emilio" carrera="ITTID" materia="Movil" cuatri="4"></Perfil>
      <Perfil style={styles.tarjeta3} nombre="Jeny" carrera="ITTID" materia="Movil" cuatri="4"></Perfil>

      <StatusBar style="auto" />

    </View>
  );
}

/* 3. Zona Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tarjeta1:{
    backgroundColor: 'blue',
  },
  tarjeta2:{
    backgroundColor: 'red',
  },
  tarjeta3:{
    backgroundColor: 'pruple',
  },
});
