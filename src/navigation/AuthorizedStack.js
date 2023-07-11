import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './../screens/HomeScreen/HomeScreen';
import RestaurantDetails from '../components/CustomRestaurants/RestaurantDetails';
import OrderScreen from './../screens/OrderScreen/OrderScreen';
import OrderHistoryScreen from './../screens/OrderHistoryScreen/OrderHistory';
import OrderSuccessScreen from './../screens/OrderScreen/OrderSuccessScreen';
import {ROUTES} from './../constants/routeNames';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

const AuthorizedStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Stack.Screen
        name={ROUTES.RESTAURANT_DETAILS}
        component={RestaurantDetails}
      />
      <Stack.Screen name={ROUTES.ORDER_SCREEN} component={OrderScreen} />
      <Stack.Screen
        name={ROUTES.ORDER_HISTORY}
        component={OrderHistoryScreen}
      />
      <Stack.Screen name={ROUTES.BOTTOM_TABS} component={BottomTabs} />
      <Stack.Screen
        name={ROUTES.ORDERSUCCESS_SCREEN}
        component={OrderSuccessScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthorizedStack;
