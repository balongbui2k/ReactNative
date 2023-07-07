import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

import AuthorizedStack from './AuthorizedStack';
import UnAuthorizedStack from './UnAuthorizedStack';
import {ROUTES} from './../constants/routeNames';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setUser(user);
      if (initializing) {
        setInitializing(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <Stack.Screen
            name={ROUTES.AUTHORIZED_STACK}
            component={AuthorizedStack}
          />
        ) : (
          <Stack.Screen
            name={ROUTES.UN_AUTHORIZED_STACK}
            component={UnAuthorizedStack}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
