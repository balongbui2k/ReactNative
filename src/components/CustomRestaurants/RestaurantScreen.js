import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  useWindowDimensions,
} from 'react-native';
import {useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import Separator from './../CustomHomeMenu/Separator';
import RESTAURANT_DATA from './../../../init_data/restaurants';
import Images from '../../constants/Images';
import CategoryListItem from './../CustomHomeMenu/CategoryListItem';
import styles from '../CustomRestaurants/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FOOD_DATA from './../../../init_data/foods';
import {FoodItem} from '../../components/CustomCart/FoodCart';
import {OrderBox} from '../../components/CustomCart/FoodCart';
import {hitSlop} from './../../constants/GeneralStyles';
import CustomStatusBar from '../../constants/GeneralStyles';

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
  const {height} = useWindowDimensions();
  const [selectedCategory, setSelectedCategory] = useState();
  const [searchText, setSearchText] = useState('');
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [showTextInput, setShowTextInput] = useState(false);

  const handleSearchPress = () => {
    setShowTextInput(!showTextInput);
    if (!showTextInput) {
      setSearchText('');
    }
  };

  const handleSearchTextChange = text => {
    setSearchText(text);
  };

  useEffect(() => {
    const filtered = FOOD_DATA.filter(food =>
      food.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredFoods(filtered);
  }, [searchText]);

  const restaurantInfo = RESTAURANT_DATA.find(item => item.id === '100');

  const cartItems = useSelector(state => state.cartStore?.carts);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    Object.values().forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  const totalQuantity = Object.values(cartItems).reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <KeyboardAvoidingView
      style={{height}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <View style={styles.container}>
        <CustomStatusBar />
        <TouchableOpacity
          style={styles.backButton}
          onPress={navigation.goBack}
          hitSlop={hitSlop}>
          <Ionicons name="chevron-back-outline" size={30} color="white" />
        </TouchableOpacity>
        {/* Search Bar */}
        <View style={{flexDirection: 'row', zIndex: 9}}>
          {showTextInput ? (
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchText}
                placeholder="Search..."
                value={searchText}
                onChangeText={handleSearchTextChange}
              />
              <Ionicons
                name="close-outline"
                size={30}
                color="white"
                hitSlop={hitSlop}
                onPress={handleSearchPress}
                style={{marginLeft: 8}}
              />
            </View>
          ) : (
            <Ionicons
              style={styles.searchSection}
              name="search-outline"
              size={25}
              color="white"
              hitSlop={hitSlop}
              onPress={handleSearchPress}
            />
          )}
        </View>

        <Image
          source={require('../../assets/staticImages/gallery/square/hd/burgers.png')}
          style={styles.backgroundImage}
        />
        <Separator height={35} />
        <View style={{backgroundColor: 'transparent', flex: 1}}>
          <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{restaurantInfo.name}</Text>
            </View>
            <Text style={styles.tagText}>
              {restaurantInfo?.tags?.join(' • ')}
            </Text>
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
                  {restaurantInfo.time} min
                </Text>
              </View>
              <View style={styles.rowAndCenter}>
                <Image
                  style={styles.deliveryDetailIcon}
                  source={Images.MARKER}
                />
                <Text style={styles.deliveryDetailText}>
                  {restaurantInfo?.distance}km
                </Text>
              </View>
              <View style={styles.restaurantType}>
                <Text style={styles.restaurantTypeText}>
                  {restaurantInfo?.type}
                </Text>
              </View>
            </View>
            <View style={styles.categoriesContainer}>
              <FlatList
                data={restaurantInfo?.categories}
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
            <ScrollView>
              <View style={{paddingBottom: 64}}>
                {filteredFoods.map(item => (
                  <FoodItem key={item.id} item={item} />
                ))}
              </View>
            </ScrollView>
            {/* OrderBox */}
            {Object.keys(cartItems).length > 0 && (
              <TouchableWithoutFeedback>
                <OrderBox
                  totalQuantity={totalQuantity}
                  totalPrice={calculateTotalPrice()}
                  onPress={() => navigation.navigate('OrderScreen')}
                />
              </TouchableWithoutFeedback>
            )}
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RestaurantScreen;
