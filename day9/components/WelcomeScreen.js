import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const WelcomeScreen = ({ navigation, route }) => {
  const { username } = route.params || {};

  return (
    <ImageBackground source={require('../assets/background1.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, {username}!</Text>
        <Button
          title="Go to Products"
          onPress={() => navigation.navigate('Products')}
          color="#007BFF"
        />
        <Button
          title="Log Out"
          onPress={() => navigation.navigate('GettingStarted')}
          color="#DC3545"
        />
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
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});

export default WelcomeScreen;
