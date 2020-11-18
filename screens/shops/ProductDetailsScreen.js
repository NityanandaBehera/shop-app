import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
} from 'react-native';
import { useSelector } from 'react-redux';

const ProductDetailsScreen = (props) => {
  const productId = props.navigation.getParam('productId');
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((p) => p.id === productId)
  );

  return (
    <View>
      <Text>{selectedProduct.title}</Text>
    </View>
  );
};

ProductDetailsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam('productTitle'),
  };
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({});
