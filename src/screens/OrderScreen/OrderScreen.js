import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {addToCart, removeFromCart, resetCart} from './../../actions/CartAction';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Images from '../../constants/Images';
import styles from '../OrderScreen/styles';

const OrderScreen = ({navigation}) => {
  const cartItems = useSelector(state => state.cartStore?.carts);
  const dispatch = useDispatch();
  const [purchasedItems, setPurchasedItems] = useState([]);

  const cartCollectionRef = firestore().collection('Order');

  const currentUser = auth().currentUser;

  const [isLoading, setIsLoading] = useState(false);

  const removeAllPurchasedItems = () => {
    setPurchasedItems([]);
  };

  useEffect(() => {
    const items = Object.values(cartItems);
    setPurchasedItems(items);
  }, [cartItems]);

  const onOrderPressed = async () => {
    const orderData = {
      items: purchasedItems.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.image,
      })),
      totalPrice: calculateTotalPrice(),
      discount: calculateDiscount(),
      grandTotal: calculateGrandTotal(),
      userEmail: currentUser.email,
      createdAt: new Date(),
    };
    console.log('orderData>>', JSON.stringify(orderData, null, 2));

    try {
      setIsLoading(true);
      await saveOrderToFirestore(orderData);
      removeAllPurchasedItems();
      // Delete cartItems
      dispatch(resetCart());
      navigation.navigate('OrderSuccess');
      ToastAndroid.show(
        'OrderSuccessfully',
        ToastAndroid.BOTTOM,
        ToastAndroid.LONG,
      );
    } catch (error) {
      console.error('Error saving order:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveOrderToFirestore = async orderData => {
    const orderCollectionRef = firestore().collection('Order');
    return await orderCollectionRef.add(orderData);
  };

  const updateCartItem = (item, newQuantity) => {
    const cartDocRef = cartCollectionRef.doc(item.id.toString());

    return cartDocRef
      .get()
      .then(doc => {
        if (doc.exists) {
          return cartDocRef.update({quantity: newQuantity});
        } else {
          return cartDocRef.set({...item, quantity: newQuantity});
        }
      })
      .then(() => {})
      .catch(error => {
        console.error('Error updating cart item:', error);
      });
  };

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

  //* Food Items
  const FoodItem = ({item}) => {
    const [itemCount, setItemCount] = useState(item.quantity);

    const handleAddToCart = () => {
      setItemCount(prevCount => prevCount + 1);
      dispatch(addToCart(item));
      updateCartItem(item, item.quantity + 1);
    };

    const handleRemoveFromCart = () => {
      if (itemCount > 0) {
        setItemCount(prevCount => prevCount - 1);
        dispatch(removeFromCart(item));
      }
    };

    return (
      <View style={styles.foodContainer}>
        <Image style={styles.image} source={{uri: item.image}} />
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
        <TouchableOpacity
          style={styles.backButton}
          hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={30} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Order</Text>
      </View>
      {purchasedItems.length > 0 ? (
        <FlatList
          data={purchasedItems}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          editable={!isLoading}
        />
      ) : (
        <View style={styles.emptyCartContainer}>
          <Image source={Images.EMPTY_CART} style={styles.emptyCartImage} />
          <Text style={styles.emptyCartTitle}>Empty Order</Text>
          <Text style={styles.emptyCartText}>
            Go ahead, order some foods from the menu
          </Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text style={{color: 'white', fontWeight: '500'}}>+ Add Items</Text>
          </TouchableOpacity>
        </View>
      )}
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
          <Text style={styles.amountText}>${calculateTotalPrice()}</Text>
        </View>

        <View style={styles.amountSubContainer}>
          <Text style={styles.amountLabelText}>Discount</Text>
          <Text style={styles.amountText}>${calculateDiscount()}</Text>
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
        <Text style={styles.totalText}>${calculateGrandTotal()}</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.orderButton,
          purchasedItems.length === 0 && styles.disabledOrderButton,
        ]}
        disabled={isLoading || purchasedItems.length === 0}
        onPress={onOrderPressed}>
        <View style={styles.rowAndCenter}>
          <Text
            style={[styles.orderText, isLoading && styles.loadingOrderText]}>
            {isLoading ? 'Loading...' : 'Order'}
          </Text>
        </View>
        <Text style={styles.orderTotalText}>${calculateGrandTotal()}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderScreen;
