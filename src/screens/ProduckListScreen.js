import React, { Component } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, RefreshControl } from 'react-native';
import ProductItem from '../components/ProducItem';
import { fetchProducts } from '../services/api';

class ProductListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: true,
      isRefreshing: false,
    };
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    try {
      const products = await fetchProducts();
      this.setState({ products, isLoading: false });
    } catch (error) {
      console.error('Error loading products:', error);
      this.setState({ isLoading: false });
    }
  };

  handleRefresh = () => {
    this.setState({ isRefreshing: true }, async () => {
      await this.loadProducts();
      this.setState({ isRefreshing: false });
    });
  };

  handleProductPress = (product) => {
    // Handle product press, e.g., navigate to product details
    console.log('Product pressed:', product);
  };

  renderProductItem = ({ item }) => (
    <ProductItem product={item} onPress={this.handleProductPress} />
  );

  render() {
    const { products, isLoading, isRefreshing } = this.state;

    if (isLoading) {
      return (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    return (
      <FlatList
        style={styles.container}
        data={products}
        renderItem={this.renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={this.handleRefresh} />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductListScreen;

