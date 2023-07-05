import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  //* Item Count text
  foodContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: 'white',
  },
  image: {
    width: 100,
    height: 100,
    margin: 6,
  },
  detailContainer: {
    marginHorizontal: 6,
    width: '64%',
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
    width: '86%',
    fontSize: 16,
    lineHeight: 16 * 1.4,
    marginBottom: 8,
  },
  descriptionText: {
    width: '100%',
    fontSize: 13,
    lineHeight: 13 * 1.4,
    marginBottom: 8,
  },
  priceText: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 14 * 1.4,
    width: '40%',
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    width: '100%',
  },
  itemAddContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

  itemCountText: {
    color: 'black',
    fontSize: 16,
    lineHeight: 15 * 1.4,
    paddingHorizontal: 6,
    borderRadius: 3,
  },
  //Cart Box-Notification
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listContainer: {
    paddingBottom: 64, // Add more space in Flat list
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
    fontWeight: '700',
  },
});
export default styles;
