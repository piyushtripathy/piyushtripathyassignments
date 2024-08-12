import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GettingStartedScreen = ({ navigation }) => {
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
  buttonContainer: {
    marginVertical: 8,
    width: '80%',
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default GettingStartedScreen;
