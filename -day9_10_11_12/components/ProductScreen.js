import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';
import ProductCard from './ProductCard';

const products = [
  {
    title: 'Product 1',
    description: 'Description for Product 1',
    price: '10.00',
    discount: '5',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Product 2',
    description: 'Description for Product 2',
    price: '20.00',
    discount: '10',
    image: 'https://via.placeholder.com/150'
  },
  // Add more products as needed
];

const ProductScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/background12.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Products</Text>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ProductCard
              title={item.title}
              description={item.description}
              price={item.price}
              discount={item.discount}
              image={item.image}
            />
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
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default ProductScreen;
