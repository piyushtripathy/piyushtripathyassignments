import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { FavoriteProvider } from './components/FavoriteProvider';

export default function App() {
  return (
    <FavoriteProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </FavoriteProvider>
  );
}
