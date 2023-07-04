import React from 'react';
import {View, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const SearchBar = ({searchText, handleSearchTextChange}) => {
  //* Truyền giá trị tham số
  return (
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
    </View>
  );
};

export default SearchBar;
