import React, {createContext, useReducer} from 'react';
import {initialState, UserReducer} from '../reducers/UserReducer';
// Criando contexto de informações do usuário
export const UserContext = createContext();

// Engloba tudo no app
export default ({children}) => {
  // criar o state e dispatch
  const [state, dispatch] = useReducer(UserReducer, initialState);
  return (
    <UserContext.Provider value={{state, dispatch}}>
      {children}
    </UserContext.Provider>
  )
}