import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import theme from './src/styles/theme';
import Navigation from './src/screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor={theme.colors.backgroundColor} />
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
