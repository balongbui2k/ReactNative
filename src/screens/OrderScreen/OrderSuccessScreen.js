import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const OrderSuccessScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/OrderSuccessIcon.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Successfully</Text>
      <Text style={styles.subtitle}>Just wait food delivery to your home</Text>
      <TouchableOpacity
        style={styles.buttonOrderHistory}
        onPress={() => navigation.navigate('OrderHistory')}>
        <Text style={styles.buttonText}>Order History</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonHome}
        onPress={() => navigation.navigate('Home')}>
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
    paddingHorizontal: 16,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 170,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 64,
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
