/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

/* 2. Zona main */
export default function SafeScreen() {
  return (

    <View style={styles.container}>

        <Text> Aqui va la practica</Text>

      <StatusBar style="auto" />

    </View>
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
