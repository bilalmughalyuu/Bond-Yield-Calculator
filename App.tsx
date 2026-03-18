import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import Navigation from './src/screens';

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
