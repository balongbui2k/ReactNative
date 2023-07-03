import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Pressable,
} from 'react-native';
import Separator from '../../components/CustomHomeMenu/Separator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import CATEGORIES from '../../constants/Foods';
import FastImage from 'react-native-fast-image';
import SortList from './SortList';
import RESTAURANT_DATA from '../../../init_data/restaurants';
import RestaurantDetails from './../../components/CustomRestaurants/RestaurantDetails';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const handleSearchTextChange = text => {
    setSearchText(text);
    console.log('text', text);
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
    // console.log('filtered>>>', JSON.stringify(filtered, null, 2));
  }, [searchText]);

  return (
    <SafeAreaView style={{flex: 1, marginBottom: 16}}>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#c84"
          translucent
        />
        <Separator height={StatusBar.currentHeight} />
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
              onPress={() => navigation.navigate('OrderHistory')}
            />
            <View style={styles.alertBadge}>
              <Text style={styles.alertBadgeText}></Text>
            </View>
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <View style={styles.searchSection}>
              <Ionicons name="search-outline" size={25} color="grey" />
              <TextInput
                style={styles.searchText}
                placeholder="Search..."
                value={searchText}
                onChangeText={handleSearchTextChange}
              />
            </View>
            <View style={styles.cancelContainer}>
              <Pressable>
                <Text style={styles.cancelText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
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
        <View style={{...styles.listContainer, flex: 1, height: '100%'}}>
          <View style={styles.horizontalListContainer}>
            <View style={styles.listHeader}>
              <Text style={styles.listHeaderTitle}>Top Rated</Text>
              <Text style={styles.listHeaderSubtitle}>See All</Text>
            </View>
            <SortList />
          </View>
          <ScrollView>
            {filteredRestaurants.map(item => (
              <RestaurantDetails {...item} key={item?.id} />
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
