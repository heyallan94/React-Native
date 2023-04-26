import React, {useState} from "react";
import { StyleSheet, Text, View, Button } from "react-native";


export default function App(){
    const [name, setName] = useState('Allan')
    const [register , setRegister] = useState({id : 310594 , name : 'Sam'})
    
    function update(){
        setRegister({name : 'Smith'}) //Para alterarmos uma propriedade de objeto
    }

    return(        
        <View>
            <Text> Olá, meu nome é {name}</Text> 
            <Text>Meu amigo se chama {register.name}</Text>
            <Button title="Atualizar" onPress={update}/> 
            <Button title="Isso faz pouco" onPress={() =>{alert('faz pouco mesmo')}}/>
            {/* Note que algumas TAGS se fecham e no caso de <Button/> NÃO PODEMOS MUDAR O STYLE */}
            {/* Note que também se o onpress for POUCO, não há problema de colocar no mesmo lugar. */}
        </View>    
    )
}
