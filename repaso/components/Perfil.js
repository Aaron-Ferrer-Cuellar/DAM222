import { Text, View, Button, StyleSheet} from 'react-native';
import { useState } from 'react';

export const Perfil=({nombre, carrera, materia, cuatri, style})=>{

  const [mostrar, setMostrar] = useState(false);

  return (
    <View style={[estilos.tarjeta, style]} >
      <Text style={estilos.nombre}>{nombre}</Text>

      {mostrar && 
      <>
      <Text style={estilos.carrera}>{carrera}</Text>
      <Text style={estilos.otroTexto}>{materia}</Text>
      <Text>{cuatri}</Text>
      </>
      }
      
      <Button title="ver Perfil" onPress={ ()=>setMostrar(!mostrar) }></Button>
    </View>
  )
}

const estilos=StyleSheet.create({
  nombre:{
    fontSize: 23,
    fontWeith: 600,
    textoTransform: 'uppercase',
  },
  carrera:{
    fontSize:18,
    color:'purple',
    fontFamily:'Roboto',
  },
  otroTexto:{
    fontSize: 12,
    fontFamily: 'Couier',
    fontStyle: 'italic',
  },
  tarjeta:{
    borderWidth: 3,
    borderRadius: 10,
    padding: 15,
    margin: 10,
  },
});
