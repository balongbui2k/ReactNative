import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const OrderSuccessScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Image
        source={require('path/to/success-image.png')}
        style={styles.image}
        resizeMode="contain"
      /> */}
      <Text style={styles.title}>Đơn hàng của bạn đã được đặt thành công!</Text>
      <Text style={styles.subtitle}>Cảm ơn bạn đã mua hàng.</Text>
      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Back to Home Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={() => navigation.navigate('OrderHistory')}>
        <Text style={styles.buttonText}>Order History</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 32,
    textAlign: 'center',
  },
  button1: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  button2: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OrderSuccessScreen;
