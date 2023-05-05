import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import products from './src/data/products';
import ProductsScreen from './src/screens/ProductsScreen';
import ProductsDetailsScreen from './src/screens/ProductsDetailsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductsScreen /> */}
      <ProductsDetailsScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
