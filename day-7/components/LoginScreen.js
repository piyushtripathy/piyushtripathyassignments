import React from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
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
