import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';

const CartScreen = ({cartItems, calculateTotalPrice}) => {
  return (
    <View>
      <View style={styles.cartContainer}>
        <View style={styles.cartItem}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Feather
              name="shopping-cart"
              size={24}
              color="orange"
              style={{marginLeft: 16}}
            />
            <View style={styles.cartAlert}>
              <Text style={styles.cartAlertText}>{cartItems.length}</Text>
            </View>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 16,
                paddingLeft: 5,
              }}>
              Cart
            </Text>
          </View>
          <Text
            style={{
              color: 'orange',
              fontWeight: '800',
              fontSize: 16,
              marginLeft: '32%',
            }}>
            ${calculateTotalPrice()}
          </Text>
          <TouchableOpacity style={styles.cartButton}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
              Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //Cart Box-Notification
  cartContainer: {
    backgroundColor: 'white',
    elevation: 1,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 7,
    alignItems: 'center',
    height: 55,
  },
  cartButton: {
    backgroundColor: '#fb4',
    width: 50,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    borderTopLeftRadius: 20,
  },
  cartAlert: {
    borderRadius: 32,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    height: 16,
    width: 16,
    position: 'absolute',
    right: -2,
    top: -10,
    marginRight: 25,
  },
  cartAlertText: {
    color: 'white',
    fontSize: 10,
    lineHeight: 10 * 1.4,
    fontWeight: 'bold',
    paddingRight: 1,
    paddingBottom: 1,
  },
});

export default CartScreen;
