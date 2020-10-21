import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import MainTab from '../stacks/MainTab';

const Stack = createStackNavigator();

export default () => (
  // Rotas
  <Stack.Navigator 
    initialRouteName="Preload"  
    screenOptions={{ headerShown: false,}}
    // headerMode="screen",
      // screenOptions={{
      //   headerTintColor: 'white',
      //   headerStyle: { backgroundColor: 'gray' },
      // }}
  >
    <Stack.Screen 
        options={{
          title: 'Preload',
          gestureEnabled: false,
        }}
    name="Preload" component={Preload} />
    
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="MainTab" component={MainTab} />

  </Stack.Navigator>
);
