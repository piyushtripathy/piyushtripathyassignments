import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const GettingStartedScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/background1.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to My App</Text>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('SignUp')}
          color="#007BFF"
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

export default GettingStartedScreen;
