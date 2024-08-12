import React from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ImageBackground } from 'react-native';

const LoginScreen = ({ navigation, route }) => {
  const [username, setUsername] = React.useState('');

  const handleLogin = () => {
    if (username === route.params.username) {
      navigation.navigate('Welcome', { username });
    } else {
      Alert.alert('Error', 'Invalid username');
    }
  };

  return (
    <ImageBackground 
      source={require('../assets/background7.jpg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={handleLogin} color="#28A745" />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '80%',
    borderRadius: 5,
  },
  buttonContainer: {
    marginVertical: 8,
    width: '80%',
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default LoginScreen;
