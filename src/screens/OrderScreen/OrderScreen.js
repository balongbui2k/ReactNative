import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {addToCart, removeFromCart} from './../../actions/CartAction';

const OrderScreen = ({navigation}) => {
  const cartItems = useSelector(state => state.cartStore?.carts);

  console.log('cartItems>>>', cartItems);

  //* How to calculate the grandTotal

  const calculateTotalPrice = () => {
    const totalPrice = Object.values(cartItems).reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    return totalPrice;
  };

  const calculateDiscount = () => {
    return cartItems?.discount || 10;
  };

  const discountPrice = calculateDiscount();
  const calculateGrandTotal = () => {
    return calculateTotalPrice() - discountPrice;
  };

  const purchasedItems = Object.values(cartItems);

  const onOrderPressed = () => {
    console.warn('Order thanh cong');
  };

  //! Dirty code
  const FoodItem = ({item}) => {
    const dispatch = useDispatch();
    const [itemCount, setItemCount] = useState(item.quantity);

    const handleAddToCart = () => {
      setItemCount(prevCount => prevCount + 1);
      dispatch(addToCart(item));
    };

    const handleRemoveFromCart = () => {
      if (itemCount > 0) {
        setItemCount(prevCount => prevCount - 1);
        dispatch(removeFromCart(item));
      }
    };

    return (
      <View style={styles.foodContainer}>
        <Image style={styles.image} source={item.image} />
        <View style={styles.detailContainer}>
          <View>
            <Text style={styles.titleText}>{item.name}</Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.priceText}>${item.price}</Text>
            <View style={styles.itemAddContainer}>
              {itemCount > 0 && (
                <>
                  <Feather
                    name="minus-square"
                    size={22}
                    color="orange"
                    onPress={handleRemoveFromCart}
                  />
                  <Text style={styles.itemCountText}>{itemCount}</Text>
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
          style={{marginTop: 16}}
        />
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>
      <FlatList //* Render list's bought
        data={purchasedItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.promoCodeContainer}>
        <View style={styles.rowAndCenter}>
          <Feather
            name="gift"
            size={30}
            color={'orange'}
            style={{paddingLeft: 8}}
          />
          <Text style={styles.promoCodeText}>Add Promo Code</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={20} color={'black'} />
      </View>
      <View style={styles.amountContainer}>
        <View style={styles.amountSubContainer}>
          <Text style={styles.amountLabelText}>Item Total</Text>
          <Text style={styles.amountText}>
            $ {calculateTotalPrice()?.toFixed(2)}
          </Text>
        </View>

        <View style={styles.amountSubContainer}>
          <Text style={styles.amountLabelText}>Discount</Text>
          <Text style={styles.amountText}>
            $ {calculateDiscount()?.toFixed(2)}
          </Text>
        </View>
        <View style={styles.amountSubContainer}>
          <Text style={styles.amountLabelText}>Delivery Fee</Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              color: '#199',
              paddingRight: 8,
            }}>
            Free
          </Text>
        </View>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabelText}>Total</Text>
        <Text style={styles.totalText}>
          $ {calculateGrandTotal()?.toFixed(2)}
        </Text>
      </View>
      <TouchableOpacity style={styles.orderButton} onPress={onOrderPressed}>
        <View style={styles.rowAndCenter}>
          <Text style={styles.orderText}>Order</Text>
        </View>
        <Text style={styles.orderTotalText}>
          $ {calculateGrandTotal()?.toFixed(2)}
        </Text>
      </TouchableOpacity>
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
    paddingVertical: 10,
    paddingHorizontal: 23,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 20 * 1.4,
    width: 80,
    textAlign: 'center',
    marginLeft: 110,
    marginTop: 16,
  },
  foodList: {
    paddingBottom: 10,
  },
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
  promoCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
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
  //* Calculating
  amountContainer: {
    paddingVertical: 20,
    borderBottomWidth: 0.5,
  },
  amountSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  amountLabelText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    paddingHorizontal: 8,
  },
  amountText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    paddingRight: 8,
  },
  totalContainer: {
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  totalLabelText: {
    fontSize: 25,
    fontWeight: '500',
    paddingLeft: 8,
    color: 'black',
  },
  totalText: {
    fontSize: 23,
    fontWeight: '600',
    color: 'black',
    paddingTop: 4,
    paddingRight: 8,
  },
  //* Order
  orderButton: {
    flexDirection: 'row',
    backgroundColor: '#199',
    alignSelf: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 14,
    marginBottom: 16,
  },
  orderText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  orderTotalText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginLeft: '62%',
  },
});

export default OrderScreen;
