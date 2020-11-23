import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const ProductItems = (props) => {
  return (
    <View style={styles.product}>
      <Image style={styles.image} source={{ uri: props.image }} />
      <View style={styles.details}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>${props.price}</Text>
      </View>
      <View style={styles.actions}>
        <Button title="View Details" onPress={props.onViewDetails} />
        <Button title="Add to Cart" onPress={props.onAddtoCart} />
      </View>
    </View>
  );
};

export default ProductItems;

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
    overflow: 'hidden',
  },
  image: { width: '100%', height: '60%' },
  details: { alignItems: 'center', height: '15%', padding: 10 },
  title: {
    fontFamily: 'open-sans',
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontFamily: 'open-sans',
    fontSize: 14,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20,
  },
});
