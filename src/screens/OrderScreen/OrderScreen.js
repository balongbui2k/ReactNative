import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import FastImage from 'react-native-fast-image';
import React from 'react';

const OrderScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FastImage
          style={styles.orderImage}
          source={require('../../assets/images/shipperVt.png')}
        />
        <Text style={styles.textAlert}>Giao hang thanh cong</Text>
      </View>
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  textAlert: {
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'orange',
    marginLeft: 80,
  },
  orderImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
});
