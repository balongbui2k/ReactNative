import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './../screens/SignInScreen/SignInScreen';
import SignUpScreen from './../screens/SignUpScreen/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import {ROUTES} from './../constants/routeNames';

const Stack = createNativeStackNavigator();

export default function UnAuthorizedStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.SIGN_IN_SCREEN} component={SignInScreen} />
      <Stack.Screen name={ROUTES.SIGN_UP_SCREEN} component={SignUpScreen} />
      <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD_SCREEN}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name={ROUTES.NEW_PASSWORD_SCREEN}
        component={NewPasswordScreen}
      />
    </Stack.Navigator>
  );
}
