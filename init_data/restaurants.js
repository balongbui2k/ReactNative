const RESTAURANT_DATA = [
  {
    id: '100',
    name: "McDonald's",
    type: 'Take-Away',
    tags: ['burgers', 'chicken', 'coffee', 'tea', 'drinks', 'pizza', 'nuggets'],
    location: '13A Street, New york',
    distance: 5000,
    time: 30,
    images: {
      logo: require('../src/assets/staticImages/logo/mcdonalds.png'),
    },
    categories: ['Burgers & Wraps', 'Snacks & sides', 'Desserts', 'Beverages'],
  },
  {
    id: '101',
    name: 'Burger King',
    type: 'Dine-In',
    tags: ['burgers', 'chicken', 'veg', 'grilled', 'fries'],
    location: '15th Avenue, New york',
    distance: 3900,
    time: 25,
    images: {
      logo: require('../src/assets/staticImages/logo/burgerking.png'),
    },
    categories: ['Burgers', 'Whopper', 'Chicken Wings', 'Sides'],
  },
  {
    id: '102',
    name: 'Dominos Pizza',
    type: 'Dine-In',
    time: 30,
    distance: 5000,
    tags: ['pizza', 'chicken', 'sausage', 'indian', 'veg', 'mexican', 'bread'],
    images: {
      logo: require('../src/assets/staticImages/logo/dominos.png'),
    },
  },
  {
    id: '107',
    name: 'KFC',
    type: 'Dine-In',
    tags: ['American Foods', 'Chicken'],
    location: '15th Avenue, New york',
    distance: 2600,
    time: 16,
    images: {
      logo: require('../src/assets/staticImages/logo/kfc.png'),
    },
    categories: ['Chicken', 'Burgers', 'Rice Bowls', 'Snacks', 'Beverages'],
  },
];

export default RESTAURANT_DATA;
