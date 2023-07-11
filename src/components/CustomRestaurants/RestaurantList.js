import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Images from '../../constants/Images';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../constants/routeNames';

const RestaurantList = ({
  name,
  time,
  distance,
  tags,
  images,
  restaurantId,
  bannerImages,
}) => {
  const navigation = useNavigation();
  const onRestaurantScreenPressed = () => {
    navigation.navigate(ROUTES.RESTAURANT_DETAILS, {
      restaurantId,
      bannerImages,
    });
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableWithoutFeedback
          activeOpacity={0.8}
          onPress={onRestaurantScreenPressed}>
          <View style={styles.container}>
            <View>
              <Image
                source={images}
                style={{
                  width: 100,
                  height: 100,
                  alignSelf: 'center',
                  borderRadius: 8,
                  margin: 10,
                }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.labelContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{name}</Text>
                <View style={styles.rowAndCenter}>
                  <FontAwesome name="star" color="orange" />
                  <Text style={styles.ratingText}>4.2</Text>
                  <Text style={styles.reviewsText}>(233)</Text>
                </View>
              </View>
              <Text style={styles.tagsText}>{tags?.join(' • ')}</Text>
              <View style={styles.deliveryDetailsContainer}>
                <View style={styles.rowAndCenter}>
                  <Image
                    source={Images.DELIVERY_CHARGE}
                    style={styles.deliveryDetailsIcon}
                  />
                  <Text style={styles.deliveryDetailsText}>Free Delivery</Text>
                </View>
                <View style={styles.rowAndCenter}>
                  <Image
                    source={Images.DELIVERY_TIME}
                    style={styles.deliveryDetailsIcon}
                  />
                  <Text style={styles.deliveryDetailsText}>{time} min</Text>
                </View>
                <View style={styles.rowAndCenter}>
                  <Text style={styles.deliveryDetailsText}>{distance} km</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    elevation: 3,
    borderRadius: 8,
    backgroundColor: 'white',
    marginTop: 8,
    marginBottom: 4,
  },
  labelContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  deliveryDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 14 * 1.4,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  tagsText: {
    fontSize: 11,
    lineHeight: 11 * 1.4,
    color: 'grey',
    marginBottom: 7,
  },
  deliveryDetailsText: {
    marginLeft: 3,
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: 'black',
  },
  deliveryDetailsIcon: {
    height: 16,
    width: 16,
  },
  rowAndCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 10,
    lineHeight: 10 * 1.4,
    fontWeight: 'bold',
    color: 'black',
  },
  reviewsText: {
    fontSize: 10,
    lineHeight: 10 * 1.4,
    color: 'black',
  },
});

export default RestaurantList;
