import React, {useState} from 'react' 
import {
    StyleeSheet,
    Text, 
    View,
    Animated, 
} from 'react-native'

function App(){
    const[largura , setLargura] = useState(new Animated.Value(0)) //A Animação começa com o VALOR 0
    const[altura, setAltura] = useState(new Animated.Value(0))
    
    Animated.sequence([//Sequencia
        Animated.timing(
            largura,{
                toValue: 420,
                duration: 2000
            }
        ),
        Animated.timing(
            altura,{
                toValue:500 ,
                duration: 1000
            }
        )
    ]).start()

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
                height: altura,
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