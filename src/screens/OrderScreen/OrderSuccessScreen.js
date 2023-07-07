import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from './../../constants/routeNames';

const OrderSuccessScreen = () => {
  const navigation = useNavigation();
  const onOderHistoryPressed = () => {
    navigation.navigate(ROUTES.ORDER_HISTORY);
  };
  const onHomePressed = () => {
    navigation.navigate(ROUTES.HOME);
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/deliver.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Order Successfully</Text>
      <Text style={styles.subtitle}>Just wait food delivery to your home</Text>
      <TouchableOpacity
        style={styles.buttonOrderHistory}
        onPress={onOderHistoryPressed}>
        <Text style={styles.buttonText}>Order History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonHome} onPress={onHomePressed}>
        <Text style={styles.buttonText}>Back to Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 170,
  },
  title: {
    fontSize: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 50,
    textAlign: 'center',
  },
  buttonOrderHistory: {
    paddingHorizontal: 130,
    paddingVertical: 12,
    backgroundColor: '#199',
    borderRadius: 8,
  },
  buttonHome: {
    backgroundColor: '#199',
    borderRadius: 8,
    paddingHorizontal: 100,
    paddingVertical: 12,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default OrderSuccessScreen;
