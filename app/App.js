import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// importando context
import UserContextProvider from './src/contexts/UserContext';
import MainStack from './src/stacks/MainStack';

export default () => {
  return(
    // Engloba todo conteúdo, reducer
    // acesso as informações do usuário
    <UserContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  );
}
