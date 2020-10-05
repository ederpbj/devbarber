import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

// usar context
import {UserContext} from '../../contexts/UserContext';

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';

// Api
import Api from '../../Api';

// Componente de input
import SignInput from '../../components/SignInput';
// Logos svg
import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
  // dispach: manda informações para context
  const {dispatch: useDispatch} = useContext(UserContext);
  const navigation = useNavigation();

  // Capturando valores digitados em value
  // const [emailField, setEmailField] = useState('suport@email.com.br');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  // Botão para login
  const handleSignClick = async () => {
    if (emailField != '' && passwordField != '') {
      // Recebendo resposta da api
      let json = await Api.signIn(emailField, passwordField);
      console.log(json);

      // Se vier o token, deu tudo certo
      if (json.token) {
        // alert("Deu certo!");
        // Salva no async o token
        await AsyncStorage.setItem('token', json.token);

        // Salvar no meu context
        userDispatch({
          type: 'setAvatar',
          payload: {
            avatar: json.data.avatar
          }
        });

        //Não permite voltar, reseta posição, manda para MainTap
        navigation.reset({
          routes: [{name: 'MainTap'}]
        })

      } else {
        alert('E-mail e/ou senha errados!');
      }
    } else {
      alert('Preencha todos os campos!');
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}],
    });
  };

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <InputArea>
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
        />

        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          password={true}
        />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
