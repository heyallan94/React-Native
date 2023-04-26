import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, KeyboardType } from "react-native";


export default function App(){
    const [name, setName] = useState('Allan')

    function apertouEnter(){
        alert('Note que esse submitEditing é quando o usuário APERTA ENTER no teclado')
    }

    return(        
        <View>
            <TextInput
            multiline //Aqui ao apertar ENTER uma nova linha é colocada 
            placeholder="Texto dentro do input" 
            onChangeText={(esseParametroJaEPassadoAutomaticamenteAqui) => setName(esseParametroJaEPassadoAutomaticamenteAqui)}
            onFocus={()=> {alert('TextInput tocado')}}
            onSubmitEditing={apertouEnter}
            KeyboardType='numeric'
            />
            {/* TextInput é self closing*/}
            {/* onChangeText altera o estado durante a digitação
                onFocus toda vez que o Input for tocado, Pois no TextInput não temos onPress*/}

            <Text> Olá, meu nome é {name}</Text>
        </View>    
    )
}


/**
Alguns dos tipos de keyboardType disponíveis são:

default: exibe um teclado padrão, com letras, números e caracteres especiais;

numeric: exibe um teclado numérico, com apenas números e alguns caracteres especiais;

email-address: exibe um teclado com "@" e ".com" para facilitar a inserção de endereços de e-mail;

phone-pad: exibe um teclado numérico com caracteres adicionais, como "#", "*", etc.
útil para entrada de números de telefone;

decimal-pad: exibe um teclado numérico com um ponto decimal
útil para entrada de números decimais;

ascii-capable: exibe um teclado padrão com caracteres ASCII adicionais;

url: exibe um teclado com caracteres adicionais para a entrada de URLs;

number-pad: exibe um teclado numérico com os números de 0 a 9, sem caracteres especiais.

 */