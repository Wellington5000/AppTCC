import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './componentes/MainScreen/homeScreen';
import StartScreen from './componentes/StartScreen/startScreen';
import Payment from './componentes/Payment/payment'
import Historico from './componentes/Historico/historico'
import Resgatar from './componentes/Resgatar/resgatar'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="StartScreen">
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="HomeScreen"  component={HomeScreen} />
        <Stack.Screen name="Payment"     component={Payment} />
        <Stack.Screen name="Historico"   component={Historico} />
        <Stack.Screen name="Resgatar"    component={Resgatar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
