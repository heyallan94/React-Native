import React, {useState} from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App(){
    
    const [people , setPeople] = useState([
        {name: 'Allan', key: 1},
        {name: 'Doug', key: 2},
        {name: 'Math', key: 3},
        {name: 'Thiago', key: 4},
        {name: 'Dity', key: 5},
        {name: 'Pablo', key: 6},
        {name: 'Carlos', key: 7},
        {name: 'Kanan', key: 8},
        {name: 'Gabriel', key: 9},
    ])//Para percorrer cada item vamos usar o map
    /*
    Se vocÊ usar o forEach, ele simplesmente vai olhar o item em questão e seguir caminho, NÃO VAI RETORNAR NADA
    Porém ao usar o map(), ele já está colocando os itens em um novo array.

    Para o forEach retornar um novo array, seria necessário um push
    */

    return(

        <View style={styles.container}>

<ScrollView>
                {people.map(item =>{ //o map vai percorrer o objeto people, o argumento se chamará item
                  return(//Não esqueça do return
                    <View key={item.key}> {/* Note que o ReactNative vai notificar caso a propriedade seja passada sem um identificador */}
                        <Text style={styles.item}>{item.name}</Text> {/* Já aqui o Text vai mostar o itemAtual.name */}                       
                    </View>
                  )
                })}           
            </ScrollView>
        </View>    
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor : 'blue',
        paddingTop : 40,
        paddingHorizontal: 20
    },
    item:{
        marginTop: 20,
        padding: 30,
        backgroundColor: 'red'
    }
})