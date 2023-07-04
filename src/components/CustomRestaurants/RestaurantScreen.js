import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Separator from './../CustomHomeMenu/Separator';
import RESTAURANT_DATA from './../../../init_data/restaurants';
import Images from '../../constants/Images';
import CategoryListItem from './../CustomHomeMenu/CategoryListItem';
import styles from '../CustomRestaurants/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FOOD_DATA from './../../../init_data/foods';
import {FoodItem} from '../../components/CustomCart/FoodCart';
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

const RestaurantScreen = ({navigation: {goBack}}) => {
  const [selectedCategory, setSelectedCategory] = useState();

  const [searchText, setSearchText] = useState('');
  const [filteredFoods, setFilteredFoods] = useState([]);

  const handleSearchTextChange = text => {
    setSearchText(text);
    console.log('text', text);
  };

  useEffect(() => {
    const filtered = FOOD_DATA.filter(food =>
      food.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredFoods(filtered);
  }, [searchText]);

  const restaurantId = RESTAURANT_DATA.find(item => item.id === '100');

  console.log('filteredFoods', filteredFoods);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" translucent backgroundColor="transparent" />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => goBack()}
        hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}>
        <Ionicons name="chevron-back-outline" size={30} color="white" />
      </TouchableOpacity>
      {/* Search Bar */}
      <View style={{flexDirection: 'row', zIndex: 9}}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchText}
            placeholder="Search..."
            value={searchText}
            onChangeText={handleSearchTextChange}
          />
        </View>
        <View style={styles.searchSection}>
          <Ionicons name="search-outline" size={25} color="white" />
        </View>
      </View>
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
          <ScrollView style={{height: 1000}}>
            {filteredFoods.map(item => (
              <FoodItem item={item} />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default RestaurantScreen;
