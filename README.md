# devbarber

Aplicativo para barbearia

[Live 10](https://alunos.b7web.com.br/curso/lives/app-de-agendamento-para-barbeiros)

tempo parado: 1:40:30

[Git do projeto](https://github.com/ederpbj/devbarber)

[Prototipagem com Adobe XD](https://www.youtube.com/watch?v=29QgSGxoqbU&list=PLzvyjJBWFAEnF0g9gz1DsKm2UZbqsALG9&index=2&ab_channel=DanielR.C.-AdobeTutoriais)

Iniciando Projeto
`npx react-native init app`

Instalar components
`npm install styled-components`

React navigation
`npm install @react-navigation/native`

[reactnavigation](https://reactnavigation.org/docs/getting-started)


Dependencia
```
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

[Test Rest](https://resttesttest.com/)

[Stack](https://reactnavigation.org/docs/stack-navigator)
`npm install @react-navigation/stack`

[Botton tabs](https://reactnavigation.org/docs/bottom-tab-navigator)
`npm install @react-navigation/bottom-tabs`

Storage
`npm install @react-native-community/async-storage`

Geolocation
`npm install @react-native-community/geolocation`

Permission
`npm install @react-native-permissions`
ou
`npm install --save react-native-permissions`

Conectar celular via wifi (fail)
```
adb kill-server

adb tcpip 5555

adb connect 192.168.0.14:5555

adb devices

```

Permissão de localização

app/main/AndroidManifest.xml

<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

Swiper
`npm install react-native-swiper`

SVG (permite trabalhar com formato svg)
`npm install react-native-svg`

SVG Transformer
`npm install react-native-svg-transformer`

Ir para configurações do transformer
[svg-transformer](https://github.com/kristerkari/react-native-svg-transformer)

Iniciando com eslint
```
yarn add eslint -D

yarn eslint --init

```
[Config eslint](https://medium.com/@sutil.edu/configura%C3%A7%C3%B5es-do-eslint-com-prettier-para-react-native-458cb098c3c8)

Prototipação com Adobe XD

Criando SVG com Inskscape

[Tutorial inkscape](https://inkscape.org/pt-br/aprender/)

[Youtube](https://www.youtube.com/watch?v=ef7bR76KdGg&ab_channel=JMDesignGr%C3%A1fico)

[vscode settings](https://www.npmjs.com/package/react-native-vscode-settings)

### Passos

* Criar app
* Criar src/stack/MainStack
* Criar Telas 
   * src/screens/Preload
      * index.js
      * styles.js
   * src/screens/SignIn
      * index.js
      * styles.js
   * src/screens/SignUp
      * index.js
      * styles.js
* app
   * (Inicio)
* src
   * assets
      * (Imagens svg)
   * compontents
      * SignInput.js
         * (Componente de tela)
   * contexts
      * UserContext.js
         * (Context)
   * reducers
      * UserReducer.js
         * (Reducer)
   * screens
      * Preload
         * index.js
         * styles.js
      * SignIn
         * index.js
         * styles.js
      * SignUp
         * index.js
            * (Componentes da tela)
            * (Funções)
         * styles.js
            * (Estilos)
   * stacks
      * MainStack.js
         * (Controle de telas)
   * api
      * (para fazer requisições)