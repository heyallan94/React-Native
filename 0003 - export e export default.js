/*
Existe duas peculariedades ao usar default ou não 
*/

import { styles } from "./myfirst/src/screens/Home/Style"; //styles não é a default, por isso usa-se {}
import Home from "./myfirst/src/screens/Home" // Já aqui , como a função está determinada como default
                                      //Não precisa de {}

import PodeSerQualquerNomeOqueImportaEOCaminho from "./myfirst/src/screens/Home"
//Porém se não tiver um default nesse caminho aqui, você é obrigado a usar o nome da função
//import { styles } from "./src/screens/Home/Style" caso styles não fosse default

//Para importar mais de uma função 
import { styles , OUTRAFUNCAOQUEQUERO } from "./myfirst/src/screens/Home/Style";