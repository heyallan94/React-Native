import React, {useState} from 'react' //Importar useState
import {
    StyleeSheet,
    Text, 
    View,
    Animated, //Note que para animar tem que chamar o componente
} from 'react-native'

function App(){
    const[largura , setLargura] = useState(370)

    return(
        <View style={StyleSheet.container}>

            <View style={{
                width: 370,
                height: 30,
                backgroundColor: 'black'
            }}>

            </View>

            <Animated.View style={{ //Esta é a animação
                width: largura,
                height: 30,
                backgroundColor: 'red'
            }}>
                
            </Animated.View>


        </View>
    )
}

const styles = StyleeSheet.create({
    container: {
        flex: 1
    }
})