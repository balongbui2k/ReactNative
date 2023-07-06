const RESTAURANT_DATA = [
  {
    restaurantId: '100',
    name: "McDonald's",
    type: 'Take-Away',
    tags: ['burgers', 'chicken', 'coffee', 'tea', 'drinks', 'pizza', 'nuggets'],
    location: '13A Street, New york',
    distance: 5,
    time: 30,
    bannerImages: require('../src/assets/staticImages/gallery/square/hd/burgers.png'),
    images: require('../src/assets/staticImages/logo/mcdonalds.png'),
    categories: ['Burgers & Wraps', 'Snacks & sides', 'Desserts', 'Beverages'],
  },
  {
    restaurantId: '101',
    name: 'Burger King',
    type: 'Dine-In',
    tags: ['burgers', 'chicken', 'veg', 'grilled', 'fries'],
    location: '15th Avenue, New york',
    distance: 3.9,
    time: 25,
    bannerImages: require('../src/assets/staticImages/gallery/square/hd/burgerking.png'),
    images: require('../src/assets/staticImages/logo/burgerking.png'),
    categories: ['Burgers', 'Whopper', 'Chicken Wings', 'Sides'],
  },
  {
    restaurantId: '102',
    name: 'Dominos Pizza',
    type: 'Dine-In',
    time: 30,
    bannerImages: require('../src/assets/staticImages/gallery/square/hd/dominospizza.png'),
    distance: 5,
    tags: ['pizza', 'chicken', 'sausage', 'indian', 'veg', 'mexican', 'bread'],
    images: require('../src/assets/staticImages/logo/dominos.png'),
  },
  {
    restaurantId: '103',
    name: 'Pizza Hut',
    type: 'Dine-In',
    tags: ['Pizza', 'American Foods', 'Chicken', 'Meat'],
    location: '15th Avenue, New york',
    distance: 5.56,
    time: 31,
    bannerImages: require('../src/assets/staticImages/gallery/square/hd/pizzahut.png'),
    images: require('../src/assets/staticImages/logo/pizzahut.png'),
    categories: ['Pizzas', 'Sides', 'Desserts', 'Drinks', 'hihihihihi'],
  },
  {
    restaurantId: '104',
    name: 'KFC',
    type: 'Dine-In',
    tags: ['American Foods', 'Chicken'],
    location: '15th Avenue, New york',
    distance: 2.6,
    time: 16,
    bannerImages: require('../src/assets/staticImages/gallery/square/hd/kfc.png'),
    images: require('../src/assets/staticImages/logo/kfc.png'),
    categories: ['Chicken', 'Burgers', 'Rice Bowls', 'Snacks', 'Beverages'],
  },
];

export default RESTAURANT_DATA;
