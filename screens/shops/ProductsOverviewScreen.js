import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItems from '../../components/shop/ProductItems';

const ProductsOverviewScreen = () => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <ProductItems
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetails={() => {}}
          onAddtoCart={() => {}}
        />
      )}
    />
  );
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
