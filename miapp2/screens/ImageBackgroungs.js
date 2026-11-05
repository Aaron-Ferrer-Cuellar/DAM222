import { StatusBar } from "react-native";
import { StyleSheet, Text, View, ImageBackground, Platform, ActivityIndicator } from 'react-native';
import { useState, useEffect } from "react";

export default function ImageBackgrounds(){
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timer);
  },[]);


if (showSplash){
  return (
    <View style={styles.splashContainer}>
      <ActivityIndicator size='large' color= 'white' style = {{margintop:20}}/>
      <Text style={styles.splashLoading}>Cargando...</Text>
    </View>
  )
}

return (
  <ImageBackground
    source = {{uri:'https://media.istockphoto.com/id/2216361815/es/vector/ma%C3%B1ana-vectorial-en-un-lago-de-monta%C3%B1a.jpg?s=2048x2048&w=is&k=20&c=Vt8YA8vdzYIHg_8Vdguj6T0A5ijKxvoPf9fbztB20iM='}}
    style = {styles.container}
    resizeMode="cover"
  >
    <View style={styles.overlay}>
      <Text style={styles.titulo}>Bienvenidos</Text>
    </View>

    <StatusBar style='ligth'/>

  </ImageBackground>
);

}

const styles = StyleSheet.create({
    // Estilos del Splash
    splashContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000', // Verde UPQ
      width: '100%',
     
    },
    splashIcon: {
      fontSize: 80,
    },
    splashTitle: {
      color: '#fff',
      fontSize: 40,
      fontWeight: 'bold',
      marginTop: 10,
    },
    splashSub: {
      color: '#a7f3d0',
      fontSize: 18,
      marginTop: 5,
    },
    splashLoading: {
      color: '#d1fae5',
      fontSize: 12,
      marginTop: 20,
    },
    // Estilos de tu presentacion principal
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.6)',
      padding: 20,
      paddingHorizontal: 40,
      borderRadius: 15,
      alignItems: 'center',
    },
    titulo: {
      color: '#ffffff',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
   
  });