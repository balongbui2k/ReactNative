import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import FastImage from 'react-native-fast-image';
import {addToCart, removeFromCart} from './../../actions/CartAction';
import FOOD_DATA from './../../../init_data/foods';
import {useNavigation} from '@react-navigation/native';

const FoodItem = ({item}) => {
  const dispatch = useDispatch();

  const itemsInCart = useSelector(state => state?.cartStore?.carts);
  const itemQuantity = itemsInCart[item?.id.toString()]?.quantity || 0;

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = () => {
    if (itemQuantity > 0) {
      dispatch(removeFromCart(item));
    }
  };

  return (
    <View style={styles.foodContainer}>
      <Image
        style={styles.image}
        source={{uri: item.image}}
        resizeMode="contain"
      />
      <View style={styles.detailContainer}>
        <View>
          <Text style={styles.titleText}>{item.name}</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.priceText}>${item.price}</Text>
          <View style={styles.itemAddContainer}>
            {itemQuantity > 0 && (
              <>
                <Feather
                  name="minus-square"
                  size={22}
                  color="orange"
                  onPress={handleRemoveFromCart}
                />
                <Text style={styles.itemCountText}>{itemQuantity}</Text>
              </>
            )}
            <Feather
              name="plus-square"
              size={22}
              color="orange"
              onPress={handleAddToCart}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const renderItem = ({item}) => <FoodItem item={item} />;

export default function FoodCart() {
  const navigation = useNavigation();
  const cartItems = useSelector(state => state.cartStore?.carts);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    Object.values(cartItems).forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  const totalQuantity = Object.values(cartItems).reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const onCheckoutPressed = () => {
    navigation.navigate('OrderScreen');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={FOOD_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      {/* Order Box */}
      {Object.keys(cartItems).length > 0 && (
        <TouchableWithoutFeedback>
          <View style={styles.checkoutContainer}>
            <Feather
              name="shopping-cart"
              size={24}
              color="orange"
              style={styles.cartIcon}
            />
            <View style={styles.totalQuantityAlert}>
              <Text style={styles.totalQuantityText}>{totalQuantity}</Text>
            </View>
            <Text style={styles.cartText}>Cart</Text>
            <Text style={styles.cartTotalPrice}>${calculateTotalPrice()}</Text>
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={onCheckoutPressed}>
              <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  //* Item Count text
  foodContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: 'white',
  },
  image: {
    width: 100,
    height: 100,
    margin: 6,
  },
  detailContainer: {
    marginHorizontal: 6,
    width: '64%',
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
    width: '86%',
    fontSize: 16,
    lineHeight: 16 * 1.4,
    marginBottom: 8,
  },
  descriptionText: {
    width: '100%',
    fontSize: 13,
    lineHeight: 13 * 1.4,
    marginBottom: 8,
  },
  priceText: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 14 * 1.4,
    width: '40%',
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    width: '100%',
  },
  itemAddContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

  itemCountText: {
    color: 'black',
    fontSize: 16,
    lineHeight: 15 * 1.4,
    paddingHorizontal: 6,
    borderRadius: 3,
  },
  //Cart Box-Notification
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listContainer: {
    paddingBottom: 64, // Add more space in Flat list
  },
  checkoutContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 14,
    borderTopColor: '#ddd',
  },
  cartIcon: {
    marginLeft: 16,
  },
  totalQuantityAlert: {
    position: 'absolute',
    backgroundColor: 'orange',
    borderRadius: 10,
    width: 13,
    height: 13,
    justifyContent: 'center',
    alignItems: 'center',
    top: 13,
    left: 26,
    marginLeft: 25,
  },
  totalQuantityText: {
    fontSize: 7.8,
    color: 'white',
    fontWeight: '500',
    padding: 1,
    paddingLeft: 1,
  },
  cartText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 5,
  },
  cartTotalPrice: {
    color: 'orange',
    fontWeight: '800',
    fontSize: 16,
    marginLeft: '32%',
  },
  checkoutButton: {
    marginLeft: 'auto',
    backgroundColor: 'orange',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 4,
    marginRight: 16,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
