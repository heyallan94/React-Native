import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native";


export default function App(){
    const [name, setName] = useState('Allan')
    //A variável é chamada por 'name' com valor inicial de 'Allan'.
    //Para alterar o valor de 'name', usamos setName()

    const [register , setRegister] = useState({id : 310594 , name : 'Sam'})
    //Note que podemos passar um objeto no use state
    return(
        
        <View>
            <Text> Olá, meu nome é {name}</Text> {/* Note que aqui irá aparecer 'Olá, meu nome é Allan' */}
            <Text>Meu amigo se chama {register.name}</Text> {/* Já aqui aparece 'Meu amigo se chama Sam' , que é a propriedade de register */}
        </View>    
    )
}
