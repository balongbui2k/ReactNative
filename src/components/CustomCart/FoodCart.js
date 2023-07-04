import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import {addToCart, removeFromCart} from './../../actions/CartAction';
import styles from '../CustomCart/styles';

export const FoodItem = ({item}) => {
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

export const OrderBox = ({totalQuantity, totalPrice, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.checkoutContainer}>
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
      <Text style={styles.cartTotalPrice}>${totalPrice}</Text>
      <TouchableOpacity style={styles.checkoutButton} onPress={onPress}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
