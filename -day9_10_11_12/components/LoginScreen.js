import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Alert } from 'react-native';
import { useGlobalState } from '../context/GlobalState';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const { state, setUser } = useGlobalState();

  const handleLogin = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      const storedUser = JSON.parse(user);
      if (storedUser && storedUser.username === username) {
        setUser(storedUser);
        navigation.navigate('Welcome');
      } else {
        Alert.alert('Error', 'Invalid username');
      }
    } catch (error) {
      console.error('Failed to fetch user details', error);
    }
  };

  return (
    <ImageBackground source={require('../assets/background1.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <Button title="Login" onPress={handleLogin} color="#28A745" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '80%',
    borderRadius: 5,
    color: 'black',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});

export default LoginScreen;
