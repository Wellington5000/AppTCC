import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './componentes/MainScreen/homeScreen';
import StartScreen from './componentes/StartScreen/startScreen';
import Payment from './componentes/Payment/payment'
import Historico from './componentes/Historico/historico'
import Resgatar from './componentes/Resgatar/resgatar'
import LojasProximas from './componentes/LojasProximas/lojasProximas';
import Cadastrar from './componentes/cadastrar/cadastrar';

const Stack = createStackNavigator();
global.BASEURL = 'http://192.168.18.8:3000'
global.Saldo = 0
//global.BASEURL = 'https://api-pix.herokuapp.com'
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Cadastrar">
        <Stack.Screen name="Cadastrar"        component={Cadastrar} />
        <Stack.Screen name="StartScreen"      component={StartScreen} />
        <Stack.Screen name="HomeScreen"       component={HomeScreen} />
        <Stack.Screen name="Payment"          component={Payment} />
        <Stack.Screen name="Historico"        component={Resgatar} />
        <Stack.Screen name="Resgatar"         component={Historico} />
        <Stack.Screen name="LojasProximas"    component={LojasProximas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
