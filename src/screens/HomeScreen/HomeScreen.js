import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import Separator from '../../components/Separator';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#2e8fda"
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.backgroundCurve} />
      <View style={styles.headerContainer}>
        <View style={styles.locationContainer}>
          <Text>Home</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundCurve: {
    backgroundColor: '#2e8fda',
    height: 2000,
    position: 'absolute',
    top: -1 * (2000 - 230),
    width: 2000,
    borderRadius: 3000,
    alignSelf: 'center',
    zIndex: -1,
  },
  headerContainer: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationContainer: {},
});

export default HomeScreen;
