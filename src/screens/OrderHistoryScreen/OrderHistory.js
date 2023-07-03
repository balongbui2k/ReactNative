import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import FOOD_DATA from './../../../init_data/foods';
import auth from '@react-native-firebase/auth';
import {FlatList} from 'react-native-bidirectional-infinite-scroll';

const OrderHistoryScreen = ({navigation}) => {
  const [orderHistory, setOrderHistory] = useState([]);
  const currentUser = auth().currentUser;
  const [isLoadingMore, setIsLoadingMore] = useState(false);

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

  const renderOrderItem = ({item}) => (
    <View style={styles.orderContainer}>
      <View style={styles.orderDetailsContainer}>
        <Text style={styles.orderDetailsText}>Order Details:</Text>
        <Text style={styles.grandTotalText}>${item.grandTotal}</Text>
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={styles.userInfoText}>User: {item.userEmail}</Text>
        <Text>Date: {item.createdAt?.toDate().toString()}</Text>
      </View>
      {/* {console.log('item>>>', JSON.stringify(item, null, 2))} */}
      {item.items?.map((item, itemIndex) => (
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
      ))}
      <TouchableOpacity>
        <Text style={styles.reOrderButton}>Reorder</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}
          onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={25} />
        </TouchableOpacity>
        <Text style={styles.title}>Order History</Text>
      </View>
      {orderHistory.length > 0 ? (
        <FlatList
          data={orderHistory}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderOrderItem}
          inverted={false} // Change the order list
          onEndReached={loadMoreOrderHistory}
          onEndReachedThreshold={0.1}
          ListEmptyComponent={
            <View style={styles.noItemsContainer}>
              <Text style={styles.noItemsText}>No order history found</Text>
            </View>
          }
          ListFooterComponent={isLoadingMore ? <Text>Loading...</Text> : null}
        />
      ) : (
        <View style={styles.noItemsContainer}>
          <Text style={styles.noItemsText}>No order history found</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  backButton: {
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '23%',
  },
  orderContainer: {
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    paddingRight: 8,
    elevation: 3,
    backgroundColor: '#fff',
  },
  orderDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  orderDetailsText: {
    fontWeight: '800',
    fontSize: 16,
    color: '#199',
    marginRight: 10,
  },
  grandTotalText: {
    fontWeight: 'bold',
    fontSize: 23,
    color: '#fb4',
    marginLeft: 'auto',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  userInfoContainer: {
    marginBottom: 10,
  },
  userInfoText: {
    fontWeight: '600',
    marginBottom: 4,
  },
  itemImage: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 6,
  },
  reOrderButton: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#fb4',
    borderRadius: 4,
    color: '#fff',
    marginLeft: '72%',
    alignSelf: 'center',
    fontWeight: '700',
  },
  noItemsContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  noItemsText: {
    fontStyle: 'italic',
    color: '#888',
    marginTop: '80%',
    fontSize: 16,
  },
});

export default OrderHistoryScreen;
