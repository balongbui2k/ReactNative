import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 23,
  },
  backButton: {
    marginTop: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 20 * 1.4,
    width: 90,
    textAlign: 'center',
    marginLeft: 100,
    marginTop: 16,
  },
  foodList: {
    paddingBottom: 10,
  },
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
  //* Empty Order screen
  emptyCartContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 20,
  },
  emptyCartImage: {
    width: 100,
    height: 100,
  },
  emptyCartTitle: {
    color: '#199',
    fontWeight: '500',
    fontSize: 20,
    marginTop: 16,
  },
  emptyCartText: {
    textAlign: 'center',
    marginTop: 8,
  },
  addButton: {
    width: 90,
    height: 32,
    backgroundColor: '#fb4',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    borderRadius: 4,
  },
  promoCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    justifyContent: 'space-between',
  },
  promoCodeText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    marginLeft: 10,
  },
  rowAndCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  //* Calculating
  amountContainer: {
    paddingVertical: 20,
    borderBottomWidth: 0.5,
  },
  amountSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  amountLabelText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    paddingHorizontal: 8,
  },
  amountText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    paddingRight: 8,
  },
  totalContainer: {
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  totalLabelText: {
    fontSize: 25,
    fontWeight: '500',
    paddingLeft: 8,
    color: 'black',
  },
  totalText: {
    fontSize: 23,
    fontWeight: '600',
    color: 'black',
    paddingTop: 4,
    paddingRight: 8,
  },
  //* Order
  orderButton: {
    flexDirection: 'row',
    backgroundColor: '#199',
    alignSelf: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 14,
    marginBottom: 16,
    width: '95%',
  },
  disabledOrderButton: {
    backgroundColor: 'grey',
    opacity: 0.7,
  },
  orderText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  orderTotalText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginLeft: '62%',
  },
});

export default styles;
