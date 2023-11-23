import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  //* Search
  searchContainer: {
    backgroundColor: 'white',
    height: 45,
    width: '73%',
    borderRadius: 8,
    marginLeft: 60,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchSection: {
    flexDirection: 'row',
    marginLeft: '90%',
    marginTop: 11.5,
  },
  searchText: {
    color: 'grey',
    fontSize: 16,
    lineHeight: 16 * 1.4,
    width: '100%',
  },
  closeOutlineIcon: {
    marginLeft: 8,
  },
  backgroundImage: {
    position: 'absolute',
    width: 400,
    height: 370,
  },
  mainContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    height: 540,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 15,
  },
  title: {
    fontSize: 23,
    lineHeight: 23 * 1.4,
    fontWeight: 'bold',
    color: 'black',
  },
  tagText: {
    marginHorizontal: 25,
    marginTop: 5,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    fontWeight: 'bold',
    color: 'grey',
  },
  ratingReviewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 10,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    fontWeight: 'bold',
    color: 'black',
  },
  reviewsText: {
    marginLeft: 5,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    fontWeight: 'medium',
    color: 'black',
  },
  deliveryDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  deliveryDetailText: {
    marginLeft: 3,
    fontSize: 12,
    lineHeight: 12 * 1.4,
    fontWeight: 'medium',
    color: 'black',
  },
  deliveryDetailIcon: {
    height: 16,
    width: 16,
  },
  rowAndCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantType: {
    backgroundColor: '#ffe9c2',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 8,
  },
  restaurantTypeText: {
    fontSize: 12,
    lineHeight: 12 * 1.4,
    fontWeight: '600',
    color: 'orange',
  },
  categoriesContainer: {
    marginTop: 5,
    borderRadius: 2,
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 10,
    zIndex: 9999,
    padding: 5,
    borderRadius: 20,
  },
  checkoutContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 14,
    borderTopColor: '#ddd',
  },
  listContainer: {
    paddingBottom: 64, // Add more space in Flat list
  },
  cartIcon: {
    marginLeft: 16,
  },
  totalQuantityAlert: {
    position: 'absolute',
    backgroundColor: 'orange',
    borderRadius: 10,
    width: 13,
    height: 13,
    justifyContent: 'center',
    alignItems: 'center',
    top: 13,
    left: 26,
    marginLeft: 25,
  },
  totalQuantityText: {
    fontSize: 7.8,
    color: 'white',
    fontWeight: '500',
    padding: 1,
    paddingLeft: 1,
  },
  cartText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 5,
  },
  cartTotalPrice: {
    color: 'orange',
    fontWeight: '800',
    fontSize: 16,
    marginLeft: '32%',
  },
  checkoutButton: {
    marginLeft: 'auto',
    backgroundColor: 'orange',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 4,
    marginRight: 16,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
