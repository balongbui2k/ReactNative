import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {resetCart} from './../../actions/CartAction';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Images from '../../constants/Images';
import styles from '../OrderScreen/styles';
import {FoodItem} from './../../components/CustomCart/FoodCart';
import CustomStatusBar from '../../constants/GeneralStyles';
import {hitSlop} from './../../constants/GeneralStyles';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from './../../constants/routeNames';

const OrderScreen = () => {
  const navigation = useNavigation();
  const cartItems = useSelector(state => state.cartStore?.carts);
  const dispatch = useDispatch();
  const [purchasedItems, setPurchasedItems] = useState([]);
  const cartCollectionRef = firestore().collection('Order');
  const currentUser = auth().currentUser;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const items = Object.values(cartItems);
    setPurchasedItems(items);
  }, [cartItems]);

  const removeAllPurchasedItems = () => {
    setPurchasedItems([]);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const onHomePressed = () => {
    navigation.navigate(ROUTES.HOME);
  };

  const onOrderPressed = async () => {
    const orderData = {
      items: purchasedItems.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.images,
      })),
      totalPrice: calculateTotalPrice(),
      discount: calculateDiscount,
      grandTotal: calculateGrandTotal,
      userEmail: currentUser.email,
      createdAt: new Date(),
    };

    try {
      setIsLoading(true);
      await saveOrderToFirestore(orderData);
      removeAllPurchasedItems();
      dispatch(resetCart());
      navigation.navigate(ROUTES.ORDERSUCCESS_SCREEN);
      ToastAndroid.show(
        'Order Successfully',
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
    const cartDocRef = () => cartCollectionRef.doc(item.id.toString());

    return cartDocRef
      .get()
      .then(doc => {
        if (doc.exists) {
          return cartDocRef.update({quantity: newQuantity});
        } else {
          return cartDocRef.set({...item, quantity: newQuantity});
        }
      })
      .catch(error => {
        console.error('Error updating cart item:', error);
      });
  };

  const calculateTotalPrice = () => {
    const totalPrice = purchasedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    return totalPrice;
  };

  const calculateDiscount = cartItems?.discount || 2;

  const calculateGrandTotal = calculateTotalPrice() - calculateDiscount;

  const renderItem = ({item}) => <FoodItem item={item} />;

  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleGoBack}
          hitSlop={hitSlop}>
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
          <TouchableOpacity style={styles.addButton} onPress={onHomePressed}>
            <Text style={{color: 'white', fontWeight: '500'}}>+ Add Items</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.promoCodeContainer}>
        <View style={styles.rowAndCenter}>
          <Feather
            name="gift"
            size={30}
            color="orange"
            style={{paddingLeft: 8}}
          />
          <Text style={styles.promoCodeText}>Add Promo Code</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={20} color="black" />
      </View>
      <View style={styles.amountContainer}>
        <View style={styles.amountSubContainer}>
          <Text style={styles.amountLabelText}>Item Total</Text>
          <Text style={styles.amountText}>${calculateTotalPrice()}</Text>
        </View>

        <View style={styles.amountSubContainer}>
          <Text style={styles.amountLabelText}>Discount</Text>
          <Text style={styles.amountText}>${calculateDiscount}</Text>
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
        <Text style={styles.totalText}>${calculateGrandTotal}</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.orderButton,
          purchasedItems.length === 0 ? styles.disabledOrderButton : null,
        ]}
        disabled={isLoading || purchasedItems.length === 0}
        onPress={onOrderPressed}>
        <View style={styles.rowAndCenter}>
          <Text
            style={[
              styles.orderText,
              isLoading ? styles.loadingOrderText : null,
            ]}>
            {isLoading ? 'Loading...' : 'Order'}
          </Text>
        </View>
        <Text style={styles.orderTotalText}>${calculateGrandTotal}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderScreen;
