import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Separator from '../../components/CustomHomeMenu/Separator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import CATEGORIES from '../../constants/Foods';
import FastImage from 'react-native-fast-image';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput} from 'react-native-gesture-handler';
import SortList from './SortList';
import RESTAURANT_DATA from './../../../init_data/restaurants';
import RestaurantDetails from './../../components/CustomRestaurants/RestaurantDetails';

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState();

  const CategoryMenuItem = ({name, logo}) => (
    <TouchableOpacity>
      <View style={styles.categoryMenuItem}>
        <View
          style={[
            styles.categoryMenuLogo,
            activeCategory === name && styles.activeCategoryMenuLogo === logo,
          ]}>
          <FastImage source={logo} style={{width: 25, height: 25}} />
        </View>
        <Text
          style={[
            styles.categoryMenuText,
            activeCategory === name && styles.activeCategoryMenuText,
          ]}
          onPress={() => setActiveCategory(name)}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );

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
              size={24}
              color="white"
              style={{position: 'absolute', right: 0}}
            />
            <View style={styles.alertBadge}>
              <Text style={styles.alertBadgeText}>12</Text>
            </View>
          </View>
          <View style={styles.searchContainer}>
            <View style={styles.searchSection}>
              <Ionicons name="search-outline" size={25} color="grey" />
              <TextInput
                style={styles.searchText}
                placeholder="Search..."
                // autoFocus={true}
              />
            </View>
            <Feather
              name="sliders"
              size={20}
              color="#ffc"
              style={{marginRight: 10}}
            />
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
        <View
          style={{
            ...styles.listContainer,
            flex: 1,
            height: '100%',
          }}>
          <View style={styles.horizontalListContainer}>
            <View style={styles.listHeader}>
              <Text style={styles.listHeaderTitle}>Top Rated</Text>
              <Text style={styles.listHeaderSubtitle}>See All</Text>
            </View>
            <SortList />
          </View>
          <ScrollView>
            {RESTAURANT_DATA?.map(item => (
              <RestaurantDetails {...item} key={item?.id} />
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    borderWidth: 1,
    marginBottom: -20,
  },
  backgroundCurvedContainer: {
    backgroundColor: '#c84',
    height: 2000,
    position: 'absolute',
    top: -1 * (2000 - 230),
    width: 2000,
    borderRadius: 2000,
    alignSelf: 'center',
    zIndex: -1,
  },
  headerContainer: {
    justifyContent: 'space-evenly',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
  },
  locationText: {
    color: 'white',
    marginLeft: 5,
    fontSize: 13,
    lineHeight: 13 * 1.4,
  },
  selectedLocationText: {
    color: '#ffc',
    marginLeft: 5,
    fontSize: 14,
    lineHeight: 14 * 1.4,
  },
  alertBadge: {
    borderRadius: 32,
    backgroundColor: '#ffc',
    justifyContent: 'center',
    alignItems: 'center',
    height: 16,
    width: 16,
    position: 'absolute',
    right: -2,
    top: -10,
  },
  alertBadgeText: {
    color: '#c84',
    fontSize: 10,
    lineHeight: 10 * 1.4,
    fontFamily: 'bold',
  },
  searchContainer: {
    backgroundColor: 'white',
    height: 45,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  searchText: {
    color: 'grey',
    fontSize: 16,
    lineHeight: 16 * 1.4,
    marginLeft: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  listContainer: {
    paddingVertical: 5,
  },
  horizontalListContainer: {
    marginTop: 30,
    justifyContent: 'space-around',
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  listHeaderTitle: {
    color: 'black',
    fontSize: 16,
    lineHeight: 16 * 1.4,
  },
  listHeaderSubtitle: {
    color: '#c84',
    fontSize: 13,
    lineHeight: 13 * 1.4,
  },
  // Logo
  categoryMenuLogo: {
    marginHorizontal: 8,
    marginBottom: 4,
    marginTop: 4,
    alignItems: 'center',
  },
  activeCategoryMenuLogo: {
    borderWidth: 1,
    color: 'red',
  },
});

export default HomeScreen;
