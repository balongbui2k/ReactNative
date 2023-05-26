import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';

const SortList = () => {
  const [activeSortItem, setActiveSortItem] = useState('recent');

  const sortStyle = isActive =>
    isActive
      ? styles.sortListItem
      : {...styles.sortListItem, borderBottomColor: 'white'};

  return (
    <SafeAreaView>
      <View style={styles.sortListContainer}>
        <TouchableOpacity
          style={sortStyle(activeSortItem === 'recent')}
          activeOpacity={0.8}
          onPress={() => setActiveSortItem('recent')}>
          <Text style={styles.sortListItemText}>Recent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={sortStyle(activeSortItem === 'favorite')}
          activeOpacity={0.8}
          onPress={() => setActiveSortItem('favorite')}>
          <Text style={styles.sortListItemText}>Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={sortStyle(activeSortItem === 'rating')}
          activeOpacity={0.8}
          onPress={() => setActiveSortItem('rating')}>
          <Text style={styles.sortListItemText}>Rating</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={sortStyle(activeSortItem === 'popular')}
          activeOpacity={0.8}
          onPress={() => setActiveSortItem('popular')}>
          <Text style={styles.sortListItemText}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={sortStyle(activeSortItem === 'trending')}
          activeOpacity={0.8}
          onPress={() => setActiveSortItem('trending')}>
          <Text style={styles.sortListItemText}>Trending</Text>
        </TouchableOpacity>
        <View></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sortListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 1,
  },
  sortListItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
    height: 32,
  },
  sortListItemText: {
    marginTop: 8,
    color: 'black',
    fontSize: 13,
    lineHeight: 13 * 1.4,
    fontWeight: 'bold',
  },
});
export default SortList;
