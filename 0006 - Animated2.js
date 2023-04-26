import React, {useState} from 'react' 
import {
    StyleeSheet,
    Text, 
    View,
    Animated, 
} from 'react-native'

function App(){
    const[largura , setLargura] = useState(new Animated.Value(0)) //A Animação começa com o VALOR 0

    Animated.timing( // Qual animação quer animar?
        largura,{ //O Nome da variável
            toValue:420, //L10 note que o valor recebido é 0 e vai pra 420
            duration: 2000, //Vai para 420 em 2000ms (1000ms = 1 segundos)
        }
    ).start()//Lembrar de AUTO chamar a animação

    return(
        <View style={StyleSheet.container}>

            <View style={{
                width: 370,
                height: 30,
                backgroundColor: 'black'
            }}>

            </View>

            <Animated.View style={{ 
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