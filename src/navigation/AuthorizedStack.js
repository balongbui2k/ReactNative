import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './../screens/HomeScreen/HomeScreen';
import RestaurantScreen from './../components/CustomRestaurants/RestaurantScreen';
import OrderScreen from './../screens/OrderScreen/OrderScreen';
import OrderHistoryScreen from './../screens/OrderHistoryScreen/OrderHistory';
import HomeTabs from './BottomTabs';
import OrderSuccessScreen from './../screens/OrderScreen/OrderSuccessScreen';
import {ROUTES} from './../constants/routeNames';

const Stack = createNativeStackNavigator();

const AuthorizedStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Stack.Screen
        name={ROUTES.RESTAURANT_SCREEN}
        component={RestaurantScreen}
      />
      <Stack.Screen name={ROUTES.ORDER_SCREEN} component={OrderScreen} />
      <Stack.Screen
        name={ROUTES.ORDER_HISTORY}
        component={OrderHistoryScreen}
      />
      <Stack.Screen name={ROUTES.HOME_TABS} component={HomeTabs} />
      <Stack.Screen
        name={ROUTES.ORDERSUCCESS_SCREEN}
        component={OrderSuccessScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthorizedStack;
