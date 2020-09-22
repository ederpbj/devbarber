import React, {useEffect} from 'react';
import {Container, LoginIcon} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import BarberLogo from '../../assets/barber.svg'

export default () => {
  // constante de navegação
  const navigation = useNavigation();

  // toda vez que a tela abrir
  useEffect(() => {
    // tenta pegar o token salvo no app
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');

      if(token){
        // validar o token
      }else{
        // manda para tela login
        navigation.navigate('SignIn');
      }
    }
  },[])
  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <LoginIcon size="large" color="#FFFF" />
    </Container>
  )
}