import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import CATEGORIES from '../../constants/Foods';
import FastImage from 'react-native-fast-image';
import SortList from './SortList';
import RESTAURANT_DATA from '../../../init_data/restaurants';
import RestaurantDetails from './../../components/CustomRestaurants/RestaurantDetails';
import styles from './styles';
import SearchBar from './SearchBar';
import CustomStatusBar from '../../constants/GeneralStyles';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from './../../constants/routeNames';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const handleSearchTextChange = text => {
    setSearchText(text);
  };

  const CategoryMenuItem = ({
    name,
    logo,
    activeCategory,
    setActiveCategory,
  }) => {
    return (
      <TouchableOpacity
        onPress={() => setActiveCategory(name)}
        style={styles.category}>
        <FastImage
          source={logo}
          style={styles.categoryIcon(activeCategory === name)}
        />
        <Text style={styles.categoryText(activeCategory === name)}>{name}</Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    const filtered = RESTAURANT_DATA.filter(restaurant =>
      restaurant.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredRestaurants(filtered);
  }, [searchText]);

  const onOrderHistoryPressed = () => {
    navigation.navigate(ROUTES.ORDER_HISTORY);
  };

  return (
    <SafeAreaView style={{flex: 1, marginBottom: 16}}>
      <View style={styles.container}>
        <CustomStatusBar />

        <View style={styles.backgroundCurvedContainer} />
        <View style={styles.headerContainer}>
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={15} color="white" />
            <Text style={styles.locationText}>Delivered to</Text>
            <Text style={styles.selectedLocationText}>HOME</Text>
            <MaterialIcons name="keyboard-arrow-down" size={16} color="#ffc" />
            <Feather
              name="bell"
              size={22}
              color="white"
              style={{position: 'absolute', right: 0}}
              onPress={onOrderHistoryPressed}
            />
            <View style={styles.alertBadge}>
              <Text style={styles.alertBadgeText}></Text>
            </View>
          </View>
          {/* Search Bar */}
          <SearchBar
            searchText={searchText}
            handleSearchTextChange={handleSearchTextChange} //* Nhớ truyền props
          />
          <View style={styles.categoriesContainer}>
            {CATEGORIES?.map(({name, logo}) => (
              <CategoryMenuItem
                key={name}
                name={name}
                logo={logo}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            ))}
          </View>
        </View>
        <View style={{flex: 1, height: '100%'}}>
          <View style={styles.horizontalListContainer}>
            <View style={styles.listHeader}>
              <Text style={styles.listHeaderTitle}>Top Rated</Text>
              <Text style={styles.listHeaderSubtitle}>See All</Text>
            </View>
            <SortList />
          </View>
          <ScrollView>
            {filteredRestaurants.map(item => (
              <RestaurantDetails {...item} key={item?.restaurantId} />
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
