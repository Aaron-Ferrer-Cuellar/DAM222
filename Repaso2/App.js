import { useState } from "react";
import { ImageBackground, Text, StyleSheet } from "react-native";
import { View } from "react-native";


export default function App(){

  const [tiempo, setTiempo] = useState(true);

  if(tiempo){

    setTimeout(() => {
      setTiempo(false);
    },2000);

    return (
      <ImageBackground
        source={{uri: 'https://plus.unsplash.com/premium_photo-1710965560034-778eedc929ff?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'}}
        style={styles.container}
      >

        <Text>Cargando...</Text>

      </ImageBackground>
    );
  }

  return(
    <ImageBackground>

    </ImageBackground>
  );

} 

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})