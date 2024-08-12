import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
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
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  buttonContainer: {
    marginVertical: 8,
    width: '80%',
  },
});

export default WelcomeScreen;
