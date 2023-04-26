/*
 * A Facilidade do React Native é que você pode fazer seus componentes e 
 * Levar eles para sua aplicação
 */

import { StyleSheet} from "react-native";

const all194 = StyleSheet.create({ //Posso colocar o nome em variável que eu quiser (Nesse caso é um objeto de estilização)
    FundoAzul: {
        backgroundColor : "blue"
    },
    FundoVermelho: {
        backgroundColor: 'red'
    }
})

//Note que agora para importar na aplicação basta eu colocar import Utilizando-stylesheet from ...

//Para usar MAIS DE UMA propriedade usamos style={[propriedade.1 , propriedade.2]}