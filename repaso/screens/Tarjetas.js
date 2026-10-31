/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Perfil } from '../components/Perfil';

/* 2. Zona main */
export default function Tarjetas() {
  return (

    <View style={styles.container}>

      <Text> Hola Aaron, vamos a ver las tajetas de tus companeros</Text>

      <View style={styles.container2}>
        <Perfil style={[styles.tarjeta1, styles.Tarjetas]} nombre="Aaron" carrera="ITTID" materia="Movil" cuatri="4"></Perfil>
        <Perfil style={[styles.tarjeta2, styles.Tarjetas]} nombre="Omar" carrera="ITTID" materia="Movil" cuatri="4"></Perfil>
        <Perfil style={[styles.tarjeta3, styles.Tarjetas]} nombre="Andres" carrera="ITTID" materia="Movil" cuatri="4"></Perfil>
      </View>

    </View>
  );
}

/* 3. Zona Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A2F4FD',
  },
  container2: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
  },
  tarjetas: {
    padding: 15,
    borderRadius: 8,
  },
  tarjeta1: {
    backgroundColor: 'blue',
  },
  tarjeta2: {
    backgroundColor: 'red',
  },
  tarjeta3: {
    backgroundColor: 'purple',
  },
});