import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Switch } from 'react-native';

const WelcomeScreen = ({ navigation, route }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <ImageBackground 
      source={require('../assets/background4.jpg')} 
      style={styles.background}
    >
      <View style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
        <Text style={styles.username}>Welcome, {route.params.username}</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Go to Products"
            onPress={() => navigation.navigate('Product', { username: route.params.username })}
            color="#007BFF"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Log Out"
            onPress={() => navigation.navigate('GettingStarted')}
            color="#DC3545"
          />
        </View>
        <View style={styles.switchContainer}>
          <Text>Dark Mode</Text>
          <Switch
            onValueChange={toggleSwitch}
            value={isDarkMode}
          />
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
  },
  lightBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  darkBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  buttonContainer: {
    marginVertical: 8,
    width: '80%',
  },
  switchContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default WelcomeScreen;
