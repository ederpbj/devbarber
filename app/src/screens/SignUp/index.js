import React, { useState, useContext } from 'react';
import {useNavigation} from '@react-navigation/native';
// Salva no storage
import AsyncStorage from '@react-native-community/async-storage';

// usar context
import { UserContext } from '../../contexts/UserContext';

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
import PersonIcon from '../../assets/person.svg';

export default () => {
  // Criação do dispatch
  
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  // Capturando valores digitados em value
  // const [emailField, setEmailField] = useState('suport@email.com.br');
  const [emailField, setEmailField] = useState('');
  const [nameField, setNameField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  // Botões clicaveis
  const handleSignClick = async () => {
    if(nameField != '' && emailField != '' && passwordField != ''){
      let res = await Api.signUp(nameField, emailField, passwordField);
      // console.log(res);
    
      console.log('XXXXXXX');

      // tem token?
      if(res.token){
        // alert("DEU CERTO");
        await AsyncStorage.setItem('token', res.token);

        // Salvar no meu context
        userDispatch({
          type: 'setAvatar',
          payload: {
            avatar: res.data.avatar,
          },
        });

        //Não permite voltar, reseta posição, manda para MainTap
        navigation.reset({
          routes: [{name: 'MainTap'}],
        });

        console.log('====>> Passou!');

      }else {
        alert("Error: "+res.error);
      }
    }else{
      alert("Preencha os campos!");
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <InputArea>
        <SignInput
          IconSvg={PersonIcon}
          placeholder="Digite seu nome"
          value={nameField}
          onChangeText={(t) => setNameField(t)}
        />

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
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça login</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
