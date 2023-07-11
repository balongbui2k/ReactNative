import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeAreaView: {flex: 1, zIndex: 99},
  container: {
    backgroundColor: 'white',
    flex: 1,
    borderWidth: 1,
    marginBottom: -20,
  },
  backgroundCurvedContainer: {
    backgroundColor: '#fb4',
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
  bellIcon: {
    position: 'absolute',
    right: 0,
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
    height: 13,
    width: 13,
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
    width: '100%',
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 25,
  },
  category: {
    alignItems: 'center',
  },
  categoryIcon: isActive => ({
    height: 31.5,
    width: 31.5,
    opacity: isActive ? 1 : 0.3,
  }),
  categoryText: isActive => ({
    fontSize: 11.5,
    lineHeight: 10 * 1.4,
    color: 'white',
    marginTop: 5,
    opacity: isActive ? 1 : 0.3,
  }),
  restaurantListContainer: {
    flex: 1,
    height: '100%',
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
    color: 'white',
  },
});

export default styles;
