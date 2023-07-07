import React, {useEffect, useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {FlatList} from 'react-native-bidirectional-infinite-scroll';
import {hitSlop} from './../../constants/GeneralStyles';
import {useScrollToTop} from '@react-navigation/native';
import styles from '../OrderHistoryScreen/styles';

const OrderHistoryScreen = ({navigation}) => {
  const [orderHistory, setOrderHistory] = useState([]);
  const currentUser = auth().currentUser;
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const ref = useRef(null);
  useScrollToTop(ref);

  const refreshList = () => {
    if (ref.current) {
      ref.current.scrollToOffset({offset: 0});
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchOrderHistory();
    }
  }, [currentUser]);

  const fetchOrderHistory = async () => {
    try {
      const querySnapshot = await firestore()
        .collection('Order')
        .where('userEmail', '==', currentUser.email)
        .orderBy('createdAt', 'desc')
        .limit(3)
        .get();

      const history = querySnapshot.docs.map(doc => {
        const data = doc.data();
        const items = data.items.map(item => ({
          ...item,
          totalPrice: item.quantity * item.price,
          discount: data.discount,
        }));
        return {...data, items};
      });
      setOrderHistory(history);
    } catch (error) {
      console.error('Error fetching order history:', error);
    }
  };

  const loadMoreOrderHistory = async () => {
    if (isLoadingMore) {
      return;
    }

    setIsLoadingMore(true);

    try {
      const lastItem = orderHistory[orderHistory.length - 1];
      const querySnapshot = await firestore()
        .collection('Order')
        .where('userEmail', '==', currentUser.email)
        .orderBy('createdAt', 'desc')
        .startAfter(lastItem.createdAt)
        .limit(3)
        .get();

      const additionalHistory = querySnapshot.docs.map(doc => {
        const data = doc.data();
        const items = data.items.map(item => ({
          ...item,
          totalPrice: item.quantity * item.price,
        }));
        return {...data, items};
      });

      setOrderHistory(prevHistory => [...prevHistory, ...additionalHistory]);
    } catch (error) {
      console.error('Error fetching additional order history:', error);
    }

    setIsLoadingMore(false);
  };

  const renderOrderItem = ({item}) => {
    const renderItems = item.items.map((item, itemIndex) => (
      <View key={itemIndex} style={styles.itemContainer}>
        <Image
          source={{uri: item.image}}
          style={styles.itemImage}
          resizeMode="contain"
        />
        <View style={{flex: 1}}>
          <Text>{item.name}</Text>
          <Text>Quantity: {item.quantity}</Text>
          <Text>Discount: ${item.discount}</Text>
          <Text>Total Price: ${item.totalPrice}</Text>
        </View>
      </View>
    ));

    return (
      <View style={styles.orderContainer}>
        <View style={styles.orderDetailsContainer}>
          <Text style={styles.orderDetailsText}>Order Details:</Text>
          <Text style={styles.grandTotalText}>${item.grandTotal}</Text>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoText}>User: {item.userEmail}</Text>
          <Text>Date: {item.createdAt?.toDate().toString()}</Text>
        </View>
        {renderItems}
        <TouchableOpacity>
          <Text style={styles.reOrderButton}>Reorder</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderEmptyComponent = () => (
    <View style={styles.noItemsContainer}>
      <Text style={styles.noItemsText}>No order history found</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          hitSlop={hitSlop}
          onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={25} />
        </TouchableOpacity>
        <Text style={styles.title}>Order History</Text>
        <TouchableOpacity onPress={refreshList}>
          <Text style={styles.refreshButton}>Refresh</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        ref={ref}
        data={orderHistory}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderOrderItem}
        inverted={false} // Change the order list
        onEndReached={loadMoreOrderHistory}
        onEndReachedThreshold={0.1}
        ListEmptyComponent={renderEmptyComponent}
        ListFooterComponent={isLoadingMore ? <Text>Loading...</Text> : null}
      />
    </View>
  );
};

export default OrderHistoryScreen;
