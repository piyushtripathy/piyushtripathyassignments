import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text, TextInput, View, StyleSheet, Alert } from 'react-native';

// Getting Started Screen
function GettingStartedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('SignUp')}
          color="#007BFF"
        />
      </View>
    </View>
  );
}

// Sign Up Screen
function SignUpScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignUp = () => {
    // Here you can add your sign-up logic
    navigation.navigate('Login', { username });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={handleSignUp} color="#007BFF" />
      </View>
    </View>
  );
}

// Login Screen
function LoginScreen({ navigation, route }) {
  const [username, setUsername] = React.useState('');

  const handleLogin = () => {
    if (username === route.params.username) {
      navigation.navigate('Welcome');
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
}

// Welcome Screen
function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Log Out"
          onPress={() => navigation.navigate('GettingStarted')}
          color="#DC3545"
        />
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GettingStarted">
        <Stack.Screen name="GettingStarted" component={GettingStartedScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

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
