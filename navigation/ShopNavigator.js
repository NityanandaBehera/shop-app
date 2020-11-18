import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ProductsOverviewScreen from '../screens/shops/ProductsOverviewScreen';
import ProductDetailsScreen from '../screens/shops/ProductDetailsScreen';
import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetails: ProductDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: 'white',
    },
  }
);

export default createAppContainer(ProductsNavigator);
