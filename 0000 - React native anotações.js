/**
 * Fundamentos desenvolvimento Mobile
 * 
 * #Framework de criação nativas mobile
 * 
 * Projeto open source mantido pelo facebook desde 2015
 * 
 * Multiplataforma, isso é, funciona tanto em Android quando iOS
 * 
 * Podemos manipular cada plataforma diferente, mesmo código, outra interface se quiser.
 * 
 * Fast Refresh que da feedback instantaneo das alterações. A mudança acontece instantaneamente
 * 
 * Uma base de código para plataformas iOS e Android
 * 
 * Usa-se Javascript
 * 
 * Comunidade ativa com inúmeras bibliotecas e UI frameworks
 * 
 * 
 * Para criar um projeto novo , entre na pasta que vai ser criada o projeto
 * O Caminho da pasta NÃO É LEGAL ter, acentos e espaços.
 * Comando no node "npx create-expo-app NomeProjeto"
 * 
 * Após instalação 
 * Rodar o react native 
 * "npx expo start"
 * 
 * Aqui já está pronto para compartilhar tela
 * Nesse caso usar o genymotion ou em ultimo caso Android Studio
 * 
 * Ao iniciar, dando tudo certo, um QR é gerado.
 * Com o emulador, basta pressionar A e seguir com o node
 * 
 * Para codificar para iOS apenas com um MacBook. Oque é MEME isso.
 * 
 * Voltar pasta no node.js "cd.."
 * Ir para pasta X "cd pasta X"
 * 
 * == Pasta node_modules==
 * Para criar uma pasta node_modules, 
 * basta digitar "npm i" no terminal dentro da pasta.
 * É aqui onde estão as libs que usamos para RN
 * 
 * == package.json (Onde o npm vai buscar as libs)==
 * As dependencias são salvasa aqui.
 * 
 * Dependencies
 * As dependencidas de produção são aquelas que a aplicação precisa, principalmente
 * quando for disponibilizar pro usuário.
 * 
 * DevDependencies
 * As dependencias de produção, são para NÓS enquanto desenvolvemos as aplicações
 * 
 * == gitignore==
 * Tudo que for ignorar para o git, deve ser colocado aqui
 * Por padrão ele já vai ignorar o node_module
 * 
 * ==== Appjsx ====
 * Aplicativo de entrada, será o primeiro a rodar.
 * Inicializador
 * 
 * ==== babel.config.js ===========
 * Fazer transpilação JS
 * 
 * ===== ts.config.json ==========
 * Como o typescript deve se comportar na aplicação
 * 
 * ====== Caminho dos apps
 * iOS ------------- Object-C / Swift ----------- .ipa
 * Android ----------Java / Kotlin -------------- .apk
 * 
 * */