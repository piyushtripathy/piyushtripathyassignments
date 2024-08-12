import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, ImageBackground } from 'react-native';
import { useGlobalState } from '../context/GlobalState';

const FavoriteScreen = () => {
  const { state, removeFavorite } = useGlobalState();

  return (
    <ImageBackground source={require('../assets/background13.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Favorite Items</Text>
        <FlatList
          data={state.favorites}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.title}</Text>
              <Button title="Remove" onPress={() => removeFavorite(item.title)} color="#DC3545" />
            </View>
          )}
          keyExtractor={(item) => item.title}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default FavoriteScreen;
