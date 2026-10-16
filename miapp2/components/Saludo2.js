import {text, Image, Button, View} from 'react-native';

export const Saludo2=()=>{
    return(

        <View>
 
            <text> Hola RN: Soy un componente Propio </text>
            <Image source={require('../assets/wave.png')}></Image>
            <Button title='Presiona para saludar'></Button>

        </View>
        
    )
}