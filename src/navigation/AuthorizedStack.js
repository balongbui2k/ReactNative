import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './../screens/HomeScreen/HomeScreen';
import RestaurantScreen from './../components/CustomRestaurants/RestaurantScreen';
import OrderScreen from './../screens/OrderScreen/OrderScreen';
import OrderHistoryScreen from './../screens/OrderHistoryScreen/OrderHistory';
import HomeTabs from './BottomTabs';
import OrderSuccessScreen from './../screens/OrderScreen/OrderSuccessScreen';

const Stack = createNativeStackNavigator();

const AuthorizedStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
      <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="OrderSuccess" component={OrderSuccessScreen} />
    </Stack.Navigator>
  );
};

export default AuthorizedStack;
