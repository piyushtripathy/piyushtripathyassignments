import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import GettingStartedScreen from '../components/GettingStartedScreen';
import SignUpScreen from '../components/SignUpScreen';
import LoginScreen from '../components/LoginScreen';
import WelcomeScreen from '../components/WelcomeScreen';
import ProductScreen from '../components/ProductScreen';
import FavoriteScreen from '../components/FavoriteScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const AppTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Products"
      component={ProductScreen}
      options={{ tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} /> }}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoriteScreen}
      options={{ tabBarIcon: ({ color, size }) => <Ionicons name="heart" color={color} size={size} /> }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="GettingStarted" component={StackNavigator} />
  </Drawer.Navigator>
);

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="GettingStarted" component={GettingStartedScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Products" component={AppTabs} />
  </Stack.Navigator>
);

export default AppNavigator;
