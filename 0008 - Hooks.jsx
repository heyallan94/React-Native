/*
Os Hooks são funções especiais que permitem aos desenvolvedores usar 
recursos do React Native, como estados e efeitos, em componentes funcionais. 
Eles foram introduzidos na versão 16.8 do React e permitem que os desenvolvedores 
criem componentes mais simples e reutilizáveis.

Existem vários tipos de Hooks disponíveis no React Native, incluindo:

    •useState: permite que você adicione estados a componentes funcionais.

    •useEffect: permite que você execute efeitos colaterais (como fazer solicitações de rede) em componentes funcionais.

    •useContext: permite que você compartilhe dados entre componentes sem precisar passar props manualmente.

    •useCallback e useMemo: permitem que você otimize o desempenho de componentes funcionais, evitando que 
    sejam re-renderizados desnecessariamente.

Os Hooks são uma maneira poderosa de melhorar a funcionalidade e a legibilidade do código em aplicativos React Native.
*/


import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App(){
    
    return(
        <View>
            <Text></Text>
            <Text></Text>
        </View>    
    )
}
