import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Image, Pressable, StyleSheet, Text } from 'react-native';
import SwitchEjemplo from './SwitchEjemplo';

export default function Pressables(){

    const [ImagenGrande, setImagenGrande] = useState(false)
    const [oscuro, setOscuro] = useState(false)

    return(

        <View style = {[styles.container, {backgroundColor: oscuro ? '#000000' : '#FFFFFF'}]}>
            <Pressable>
                <Text>Presioname</Text>
            </Pressable>

            <Pressable onPress={() => setImagenGrande(!ImagenGrande)}>

                <Image 
                source={require("../assets/wave.png")}
                style = {[
                    styles.image,
                    ImagenGrande ? styles.imagenGrande : styles.image
                ]}
                ></Image>
                
            </Pressable>

            <SwitchEjemplo
                oscuro = {oscuro}
                cambiarModo = {setOscuro}
            ></SwitchEjemplo>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 20,
        marginBottom: 20
    },
    image: {
        width: 100,
        height: 100,
    },
    imagenGrande: {
        width: 180,
        height: 180,
    }
})
