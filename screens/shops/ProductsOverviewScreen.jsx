import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ProductItems from '../../components/shop/ProductItems';
import * as cartAction from '../../store/actions/cartAction';

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);

  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <ProductItems
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetails={() => {
            props.navigation.navigate('ProductDetails', {
              productId: itemData.item.id,
              productTitle: itemData.item.title,
            });
          }}
          onAddtoCart={() => {
            dispatch(cartAction.addToCart(itemData.item));
          }}
        />
      )}
    />
  );
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
