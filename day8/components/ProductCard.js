import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProductCard = ({ title, description, price, discount }) => {
  return (
    <View style={styles.card}>
      <Image source={require('../assets/product.jpg')} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>${price}</Text>
      <Text style={styles.discount}>Discount: {discount}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 16,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  discount: {
    fontSize: 14,
    color: '#28A745',
  },
});

export default ProductCard;
