import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  backButton: {
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '23%',
  },
  refreshButton: {
    fontSize: 15,
    color: 'orange',
    marginLeft: 70,
    marginTop: 8,
  },
  orderContainer: {
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    paddingRight: 8,
    elevation: 3,
    backgroundColor: '#fff',
  },
  orderDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  orderDetailsText: {
    fontWeight: '800',
    fontSize: 16,
    color: '#199',
    marginRight: 10,
  },
  grandTotalText: {
    fontWeight: 'bold',
    fontSize: 23,
    color: '#fb4',
    marginLeft: 'auto',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  userInfoContainer: {
    marginBottom: 10,
  },
  userInfoText: {
    fontWeight: '600',
    marginBottom: 4,
  },
  itemImage: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 6,
  },
  reOrderButton: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#fb4',
    borderRadius: 4,
    color: '#fff',
    marginLeft: '72%',
    alignSelf: 'center',
    fontWeight: '700',
  },
  noItemsContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  noItemsText: {
    fontStyle: 'italic',
    color: '#888',
    marginTop: '80%',
    fontSize: 16,
  },
});

export default styles;
