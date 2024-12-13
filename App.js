import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ProductListScreen from './src/screens/ProduckListScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProductListScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;

