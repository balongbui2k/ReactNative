import React, {useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Separator from './../CustomHomeMenu/Separator';
import RESTAURANT_DATA from './../../../init_data/restaurants';
import Images from '../../constants/Images';
import CategoryListItem from './../CustomHomeMenu/CategoryListItem';
import FoodCart from './../CustomCart/FoodCart';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ListHeader = () => (
  <View
    style={{
      flexDirection: 'row',
      flex: 1,
      width: 40,
      justifyContent: 'flex-end',
    }}>
    <View
      style={{
        backgroundColor: '#fb4',
        width: 40,
      }}
    />
  </View>
);

const ListFooter = () => (
  <View
    style={{
      flexDirection: 'row',
      flex: 1,
      width: 40,
    }}>
    <View
      style={{
        backgroundColor: '#fb4',
        width: 40,
      }}
    />
  </View>
);

const RestaurantScreen = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState();

  const restaurantId = RESTAURANT_DATA.find(item => item.id === '100');

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" translucent backgroundColor="transparent" />
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Ionicons name="chevron-back-outline" size={30} color="white" />
      </TouchableOpacity>
      <Image
        source={require('../../assets/staticImages/gallery/square/hd/burgers.png')}
        style={styles.backgroundImage}
      />

      <Separator height={35} />
      <View style={{backgroundColor: 'transparent', flex: 1}}>
        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{restaurantId.name}</Text>
          </View>
          <Text style={styles.tagText}>{restaurantId?.tags?.join(' • ')}</Text>
          <View style={styles.ratingReviewsContainer}>
            <Feather name="star" size={18} color="orange" />
            <Text style={styles.ratingText}>4.2</Text>
            <Text style={styles.reviewsText}>(455 Reviews)</Text>
          </View>
          <View style={styles.deliveryDetailsContainer}>
            <View style={styles.rowAndCenter}>
              <Image
                style={styles.deliveryDetailIcon}
                source={Images.DELIVERY_CHARGE}
              />
              <Text style={styles.deliveryDetailText}>Free Delivery</Text>
            </View>
            <View style={styles.rowAndCenter}>
              <Image
                style={styles.deliveryDetailIcon}
                source={Images.DELIVERY_TIME}
              />
              <Text style={styles.deliveryDetailText}>
                {restaurantId.time} min
              </Text>
            </View>
            <View style={styles.rowAndCenter}>
              <Image style={styles.deliveryDetailIcon} source={Images.MARKER} />
              <Text style={styles.deliveryDetailText}>
                {restaurantId?.distance}km
              </Text>
            </View>
            <View style={styles.restaurantType}>
              <Text style={styles.restaurantTypeText}>
                {restaurantId?.type}
              </Text>
            </View>
          </View>
          <View style={styles.categoriesContainer}>
            <FlatList
              data={restaurantId?.categories}
              keyExtractor={item => item}
              horizontal
              ListHeaderComponent={ListHeader}
              ListFooterComponent={ListFooter}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <CategoryListItem
                  name={item}
                  isActive={item === selectedCategory}
                  selectCategory={() => setSelectedCategory(item)}
                />
              )}
            />
          </View>
          <FoodCart key={restaurantId?.id} {...restaurantId} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  backgroundImage: {
    position: 'absolute',
    width: 400,
    height: 370,
  },
  mainContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    height: '75%',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 15,
  },
  title: {
    fontSize: 23,
    lineHeight: 23 * 1.4,
    fontWeight: 'bold',
    color: 'black',
  },
  tagText: {
    marginHorizontal: 25,
    marginTop: 5,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    fontWeight: 'bold',
    color: 'grey',
  },
  ratingReviewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 10,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    fontWeight: 'bold',
    color: 'black',
  },
  reviewsText: {
    marginLeft: 5,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    fontWeight: 'medium',
    color: 'black',
  },
  deliveryDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  deliveryDetailText: {
    marginLeft: 3,
    fontSize: 12,
    lineHeight: 12 * 1.4,
    fontWeight: 'medium',
    color: 'black',
  },
  deliveryDetailIcon: {
    height: 16,
    width: 16,
  },
  rowAndCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantType: {
    backgroundColor: '#ffe9c2',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 8,
  },
  restaurantTypeText: {
    fontSize: 12,
    lineHeight: 12 * 1.4,
    fontWeight: '600',
    color: 'orange',
  },
  categoriesContainer: {
    marginTop: 5,
    borderRadius: 2,
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 9,
    padding: 5,
    borderRadius: 20,
  },
});

export default RestaurantScreen;
