import React, { createContext, useReducer } from 'react';
import { initialState, UserReducer } from '../reducers/UserReducer';

// Criando contexto de informações do usuário
export const UserContext = createContext();
// export const UserContext = React.createContext({});

// Engloba tudo no app
export default ({children}) => {

  // criar o initialState e dispatch
    const [state, dispatch] = useReducer(UserReducer, initialState);
    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    );
}