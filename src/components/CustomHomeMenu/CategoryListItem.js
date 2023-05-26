import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CategoryListItem = ({name, isActive, selectCategory}) => {
  return (
    <View style={styles.container}>
      <Text
        style={
          isActive ? styles.activeCategoryText : styles.inActiveCategoryText
        }
        onPress={() => selectCategory(name)}>
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fb4',
    paddingHorizontal: 15,
    height: 50,
    justifyContent: 'center',
  },
  activeCategoryText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    // fontWeight: 'bold',
    color: 'black',
  },
  inActiveCategoryText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CategoryListItem;
