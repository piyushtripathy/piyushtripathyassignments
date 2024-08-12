import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import ProductCard from './ProductCard';

const Product = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate loading
  }, []);

  const products = [
    { title: 'Product 1', description: 'Description 1', price: 100, discount: 10 },
    { title: 'Product 2', description: 'Description 2', price: 200, discount: 20 },
    { title: 'Product 3', description: 'Description 3', price: 300, discount: 30 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.username}>Welcome, {route.params.username}</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : (
        <ScrollView>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              price={product.price}
              discount={product.discount}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default Product;
