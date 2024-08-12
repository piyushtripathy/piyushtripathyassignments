import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation, route }) => {
  const [username, setUsername] = useState('');
  const [storedUser, setStoredUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        setStoredUser(user ? JSON.parse(user) : null);
      } catch (error) {
        console.error('Failed to fetch user details', error);
      }
    };
    fetchUser();
  }, []);

  const handleLogin = () => {
    if (username === storedUser?.username) {
      navigation.navigate('Welcome', { username });
    } else {
      Alert.alert('Error', 'Invalid username');
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
