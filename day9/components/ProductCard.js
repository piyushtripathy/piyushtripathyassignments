import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useFavorite } from './FavoriteProvider';

const ProductCard = ({ title, description, price, discount, image, onAddFavorite }) => {
  const { addFavorite } = useFavorite();
  
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
      <Text>Price: ${price}</Text>
      <Text>Discount: {discount}%</Text>
      <TouchableOpacity onPress={() => addFavorite({ title, description, price, discount, image })}>
        <Text style={styles.button}>Add to Favorites</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  button: {
    color: '#007BFF',
    marginTop: 8,
  },
});

export default ProductCard;
