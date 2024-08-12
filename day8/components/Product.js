import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import ProductCard from './ProductCard';

const productList = [
  { id: '1', title: 'Product 1', description: 'This is product 1', price: 100, discount: 10 },
  { id: '2', title: 'Product 2', description: 'This is product 2', price: 200, discount: 20 },
  { id: '3', title: 'Product 3', description: 'This is product 3', price: 300, discount: 30 },
];

const Product = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>Products for {route.params.username}</Text>
      <FlatList
        data={productList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            description={item.description}
            price={item.price}
            discount={item.discount}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default Product;
