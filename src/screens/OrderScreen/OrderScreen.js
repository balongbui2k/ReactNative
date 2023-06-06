import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Images from '../../constants/Images';
import Feather from 'react-native-vector-icons/Feather';

const OrderScreen = ({navigation}) => {
  const cart = useSelector(state => state?.cart);
  const calculateItemTotal = () => {
    return cart?.cartItems?.reduce(
      (total, item) => total + item?.price || 0,
      0,
    );
  };

  const calculateDiscount = () => {
    return cart?.discount || 10;
  };

  const calculateGrandTotal = () => {
    const itemTotal = calculateItemTotal();
    const discount = calculateDiscount();
    return itemTotal - discount;
  };

  const renderFoodCartItem = ({item}) => {
    return (
      <View style={styles.foodCartItemContainer} key={item?.food}>
        {console.log('item>>>', item)}
        <Text style={styles.foodCartItemName}>{item?.name}</Text>
        <Text style={styles.foodCartItemPrice}>
          $ {item?.price?.toFixed(2)}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'white'}
        translucent
      />
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>
      {cart?.cartItems?.length > 0 ? (
        <View style={styles.cartContainer}>
          <FlatList
            data={cart?.cartItems}
            keyExtractor={item => item?.food?.id}
            renderItem={renderFoodCartItem}
            contentContainerStyle={styles.foodList}
          />
          <View style={styles.promoCodeContainer}>
            <View style={styles.rowAndCenter}>
              <Feather name="gift" size={30} color={'orange'} />
              <Text style={styles.promoCodeText}>Add Promo Code</Text>
            </View>
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color={'black'}
            />
          </View>
          <View style={styles.amountContainer}>
            <View style={styles.amountSubContainer}>
              <Text style={styles.amountLabelText}>Item Total</Text>
              <Text style={styles.amountText}>
                $ {calculateItemTotal()?.toFixed(2)}
              </Text>
            </View>
            <View style={styles.amountSubContainer}>
              <Text style={styles.amountLabelText}>Discount</Text>
              <Text style={styles.amountText}>
                $ {calculateDiscount()?.toFixed(2)}
              </Text>
            </View>
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabelText}>Total</Text>
            <Text style={styles.totalText}>
              $ {calculateGrandTotal()?.toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity style={styles.checkoutButton}>
            <View style={styles.rowAndCenter}>
              <Ionicons name="cart-outline" color={'white'} size={20} />
              <Text style={styles.checkoutText}>Checkout</Text>
            </View>
            <Text style={styles.checkoutText}>
              $ {calculateGrandTotal()?.toFixed(2)}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.emptyCartContainer}>
          <Image
            style={styles.emptyCartImage}
            source={Images.EMPTY_CART}
            resizeMode="contain"
          />
          <Text style={styles.emptyCartText}>Cart Empty</Text>
          <Text style={styles.emptyCartSubText}>
            Go ahead and order some tasty food
          </Text>
          <TouchableOpacity style={styles.addButtonEmpty}>
            <Ionicons name="add" color={'white'} size={20} />
            <Text style={styles.addButtonEmptyText}>Add Food</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 23,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 20 * 1.4,
    width: 80,
    textAlign: 'center',
    marginLeft: 110,
  },
  cartContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  foodList: {
    paddingBottom: 20,
    borderWidth: 1,
  },
  foodCartItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  foodCartItemName: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  foodCartItemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: 'green',
  },
  promoCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    justifyContent: 'space-between',
  },
  promoCodeText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    marginLeft: 10,
  },
  rowAndCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountContainer: {
    paddingVertical: 20,
    borderBottomWidth: 0.5,
  },
  amountSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 3,
  },
  amountLabelText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'green',
  },
  amountText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
  totalContainer: {
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalLabelText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  totalText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'green',
  },
  checkoutButton: {
    flexDirection: 'row',
    backgroundColor: 'green',
    alignSelf: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 10,
  },
  checkoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginLeft: 8,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 30,
    fontWeight: '500',
    color: 'green',
  },
  emptyCartSubText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'grey',
  },
  addButtonEmpty: {
    flexDirection: 'row',
    backgroundColor: 'orange',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
    justifyContent: 'space-evenly',
    elevation: 3,
    alignItems: 'center',
  },
  addButtonEmptyText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
    marginLeft: 10,
  },
  emptyCartImage: {
    height: 150,
    width: 150,
  },
});

export default OrderScreen;
