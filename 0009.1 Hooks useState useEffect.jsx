/*
a diferença entre useEffect() e useState() é que o primeiro é 
utilizado para executar ações secundárias após a renderização do componente, 
enquanto o segundo é utilizado para armazenar e atualizar o estado do componente.

O useState() é utilizado para criar uma variável de estado dentro do componente
e permitir que ele seja atualizado de forma reativa, ou seja, sempre que a variável
for atualizada, o componente será renderizado novamente com as mudanças refletidas.

*/

import React, {useState , useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";


export default function App(){

                 const [count, setCount] = useState(0)
/*O useState() é utilizado para criar a variável count e a função setCount, 
que atualiza o valor da variável sempre que o usuário clicar no componente Text.
*/

                 useEffect(() => {
                  console.log('Contador atualizado:', count);
                 }, [count]);
/*O useEffect() é utilizado para lidar com efeitos colaterais em componentes funcionais, 
como por exemplo, chamadas a APIs externas, manipulação do DOM, entre outras operações 
assíncronas.

Se você não colocar a lista de dependências vazia [] ao final do useEffect(), 
a função de callback será executada em cada renderização do componente, 
o que pode causar problemas de desempenho, além de possíveis efeitos colaterais indesejados.

Por isso, é importante especificar a lista de dependências corretamente no useEffect() 
para garantir que o efeito seja executado apenas quando necessário. 
Se você não tiver dependências para o efeito, coloque uma lista de dependências vazia [] 
para garantir que o efeito seja executado apenas uma vez, após a montagem do componente.

*/    
    return(
        
        <View>
            <Text onPress={() => setCount(count + 1)}> Número de clicks {count}</Text> 
        </View>    
    )
}