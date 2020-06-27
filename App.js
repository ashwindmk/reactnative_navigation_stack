/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/components/HomeScreen';
import DetailScreen from './src/components/DetailScreen';
import SettingScreen from './src/components/SettingScreen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} options={{title: 'My Home'}}/>
        <Stack.Screen name='Details' component={DetailScreen} />
        <Stack.Screen name='Settings' component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
