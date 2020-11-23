import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ProductsOverviewScreen from '../screens/shops/ProductsOverviewScreen';
import ProductDetailsScreen from '../screens/shops/ProductDetailsScreen';
import CartScreen from '../screens/shops/CartScreen';
import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetails: ProductDetailsScreen,
    Cart: CartScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
      },
      headerTintColor: 'white',
    },
  }
);

export default createAppContainer(ProductsNavigator);
