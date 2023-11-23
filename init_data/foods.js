const FOOD_DATA = [
  {
    id: '2000',
    restaurantId: '100',
    name: 'McSpicy Chicken',
    price: 2,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/mcspicychicken.png?alt=media&token=aebcb8b0-2771-4657-8c9a-253e8108237e',
    category: 'Burgers & Wraps',
    description: 'Zesty and redolent whole muscle leg meat patty',
  },
  {
    id: '2001',
    restaurantId: '100',
    name: 'McSpicy Panner',
    price: 2,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/mcspicypaneer.png?alt=media&token=53a1e561-5bfc-426e-9da6-70ea4c1e3aa5',
    category: 'Burgers & Wraps',
    description:
      'Crispy and spicy panner patty with creamy tandoori sauce and crispy lettuce topping.',
  },
  {
    id: '2002',
    restaurantId: '100',
    name: 'McChicken',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/mcspicychicken.png?alt=media&token=aebcb8b0-2771-4657-8c9a-253e8108237e',
    category: 'Burgers & Wraps',
    description:
      'Batter & breaded chicken patty containing green peas, carrots,',
  },

  {
    id: '2003',
    restaurantId: '100',
    name: 'Chicken Maharaja Mac',
    price: 2,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/chickenmaharajamac.png?alt=media&token=a652c6f5-29fa-4670-8cb5-218dba247a22',
    category: 'Burgers & Wraps',
    description: 'A double-decker toasted Maharaja bun sandwiched',
  },
  {
    id: '2004',
    restaurantId: '100',
    name: 'Pizza McPuff',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/pizzamcpuff.png?alt=media&token=2dfd7068-698c-4cf9-9fa5-02641679615f',
    category: 'Burgers & Wraps',
    description:
      'A blend of assorted vegetables (carrot, beans,capsicum, onion & green peas',
  },
  {
    id: '2005',
    restaurantId: '100',
    name: 'Our World Famous Fries',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/ourworldfamousfries.png?alt=media&token=1025c3b2-b307-400f-bb34-92838c90d31f',
    category: 'Burgers & Wraps',
    description: 'The crisp, fan favorite: our World Famous Fries®',
  },

  {
    id: '2006',
    restaurantId: '100',
    name: 'Sundae (Chocolate Brownie)',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/sundaechocolatebrownie.png?alt=media&token=360bcc22-adb0-4232-8458-3183ba4cbeeb',
    category: 'Burgers & Wraps',
    description: 'An iconic premium dessert option',
  },

  {
    id: '2007',
    restaurantId: '100',
    name: 'McFlurry (Chocolate Crunch)',
    price: 2,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/mcflurrychococrunch.png?alt=media&token=b8d35a9f-3f22-4c6c-9f9b-929cdd5dc640',
    category: 'Burgers & Wraps',
    description:
      'Milk-based frozen dessert with chocolate crispy and chocolate dip.',
  },
  //*
  {
    id: '2008',
    restaurantId: '101',
    name: 'McSwirl Chocolate',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/mcswirlchocolate.png?alt=media&token=30081a7b-224b-4092-8403-1812d2d28171',
    category: 'Desserts',
    description: 'Delightful soft-serve with a delectable chocolate topping.',
    ingredients: 'Soft serve mix (100% diary product), Chocolate dip.',
  },
  {
    id: '2009',
    restaurantId: '101',
    name: 'Sundae (Strawberry)',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/sundaestrawberry.png?alt=media&token=d99cb8dd-92e5-4309-9a1f-c0422046eed1',
    category: 'Desserts',
    description: 'Creamy vanilla soft-serve with strawberry topping.',
    ingredients: 'Soft serve mix (100% diary), Strawberry topping.',
  },
  {
    id: '2010',
    restaurantId: '101',
    name: 'Tea with Milk',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/teawithmilk.png?alt=media&token=d8c14ec3-5e00-4443-a1bd-ee4e42035a54',
    category: 'Beverages',
    description: "It's always a good time for tea.",
    ingredients: 'hihihuhuhaha',
  },
  {
    id: '2011',
    restaurantId: '101',
    name: 'Iced Tea',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/icedtea.png?alt=media&token=b00ad53f-3c81-48b5-8cbe-ee6017e66457',
    category: 'Beverages',
    description: 'A blend of aromatic tea and the fruity flavour of lemon.',
    ingredients: 'hihihuhuhaha',
  },
  {
    id: '2012',
    restaurantId: '101',
    name: 'Hot Coffee',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/hotcoffee.png?alt=media&token=23ead800-c179-4763-8f09-22906d6b5648',
    category: 'Beverages',
    description: 'Perfectly brewed for any time of the day.',
    ingredients: 'hihihuhuhaha',
  },
  {
    id: '2013',
    restaurantId: '101',
    name: 'Cold Coffee',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/coldcoffee.png?alt=media&token=619660ab-191e-45a9-ae86-3a4a57a5af76',
    category: 'Beverages',
    description: 'Rich, creamy and indulgent cold coffee.',
    ingredients: 'hihihuhuhaha',
  },

  {
    id: '2014',
    restaurantId: '101',
    name: 'Crispy Veg Burger',
    price: 3,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/crispyvegburger.png?alt=media&token=183dedac-6278-4a27-b0c8-f3530ed27d29',
    category: 'Burgers',
    ingredients: 'hihihuhuhaha',
    description: 'So Yummy and nhiều nước',
  },
  {
    id: '2015',
    restaurantId: '101',
    name: 'Crispy Veg Double Patty',
    price: 2,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/crispyvegdoublepatty.png?alt=media&token=c732241f-d41d-4196-96d0-560e63f2d652',
    category: 'Burgers',
    ingredients: 'hihihuhuhaha',
    description: 'So Yummy and nhiều nước',
  },
  //*
  {
    id: '2016',
    restaurantId: '102',
    name: 'Spicy Grill Chicken Burger',
    price: 2,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/spicygrillchickenburger.png?alt=media&token=0138e387-d24b-44db-90c0-02d7f1e20f10',
    category: 'Burgers',
    ingredients: 'hihihuhuhaha',
    description: 'So Yummy and nhiều nước',
  },
  {
    id: '2017',
    restaurantId: '102',
    name: 'Chicken Whopper',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/chickenwhopper.png?alt=media&token=941b1478-7d79-43c8-af6a-cf4c8b1c0fb6',
    category: 'Whopper',
    ingredients: 'hihihuhuhaha',
    description: 'So Yummy and nhiều nước',
  },
  {
    id: '2018',
    restaurantId: '102',
    name: 'Chicken Twisted Whopper',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/chickentwistedwhopper.png?alt=media&token=bba2c926-9c2f-413c-99ec-d76ad9daf158',
    category: 'Whopper',
    ingredients: 'hihihuhuhaha',
    description: 'So Yummy and nhiều nước',
  },
  {
    id: '2019',
    restaurantId: '102',
    name: 'Chicken Wings',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/chickenwings.png?alt=media&token=5ac068d0-be76-4ecc-8415-a468a9c45da1',
    category: 'Chicken Wings',
    ingredients: 'hihihuhuhaha',
    description: 'So Yummy and nhiều nước',
  },
  {
    id: '2020',
    restaurantId: '102',
    name: 'Grilled Chicken Wings',
    price: 2,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/grilledchickenwings.png?alt=media&token=20994942-9ef7-4dca-a3b4-48a880098e44',
    category: 'Chicken Wings',
    ingredients: 'hihihuhuhaha',
    description: 'So Yummy and nhiều nước',
  },

  {
    id: '2021',
    restaurantId: '102',
    name: 'Fries (Small)',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/fries.png?alt=media&token=8bb0481d-81fe-4dc2-8701-3ee707b5feb2',
    category: 'Sides',
    ingredients: 'hihihuhuhaha',
    description: 'So Yummy and nhiều nước',
  },
  {
    id: '2022',
    restaurantId: '102',
    name: 'Chicken Fries',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/chickenfries.png?alt=media&token=e9a0302c-127f-4523-8b97-48960b6eaafb',
    category: 'Sides',
    ingredients: 'hihihuhuhaha',
    description: 'So Yummy and nhiều nước',
  },
  {
    id: '2023',
    restaurantId: '102',
    name: 'Pepper Barbeque Chicken',
    price: 3,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/pepperbarbequechicken.png?alt=media&token=c578772f-2421-49dd-8ae4-2ddda505daf2',
    category: 'Non-Veg Pizza',
    ingredients: 'hihihuhuhaha',
    description: 'So Yummy and nhiều nước',
  },
  //*
  {
    id: '2024',
    restaurantId: '103',
    name: 'Chicken Sausage',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/chickensausage.png?alt=media&token=9a72e057-c659-46c5-8b86-d78350822593',
    category: 'Non-Veg Pizza',
    ingredients: 'hihihuhuhaha',
    description: 'So Yummy and nhiều nước',
  },
  {
    id: '2025',
    restaurantId: '103',
    name: 'Chicken Golden Delight',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/chickengoldendelight.png?alt=media&token=2c910d7a-1e03-4942-acca-0e313a698ded',
    category: 'Non-Veg Pizza',
    ingredients: 'hihihuhuhaha',
    description: 'So Yummy and nhiều nước',
  },
  {
    id: '2026',
    restaurantId: '103',
    name: 'Indian Chicken Tikka',
    price: 3,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/indianchickentikka.png?alt=media&token=ddea6c5d-b80f-4540-b57f-1ac56dc38930',
    category: 'Non-Veg Pizza',
    ingredients: 'hihihuhuhaha',
    description: 'So Yummy and nhiều nước',
  },
  {
    id: '2027',
    restaurantId: '103',
    name: 'Margherita',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/margherita.png?alt=media&token=4c06259b-9b96-4bd1-8db6-b7065966113d',
    category: 'Veg Pizza',
    ingredients: 'hihihuhuhaha',
    description: 'So Yummy and nhiều nước',
  },
  //*
  {
    id: '2028',
    restaurantId: '103',
    name: 'Veg Extravaganza',
    price: 3,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/vegextravaganza.png?alt=media&token=e392d8f9-c984-403f-938a-d275dbaa6be1',
    category: 'Veg Pizza',
  },
  {
    id: '2029',
    restaurantId: '103',
    name: 'Mexican Green Wave',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/mexicangreenwave.png?alt=media&token=b3ca58be-3671-40a0-8c38-22ff58322506',
    category: 'Veg Pizza',
    ingredients: 'hihihuhuhaha',
    description: 'So Yummy and nhiều nước',
  },
  {
    id: '2030',
    restaurantId: '103',
    name: 'Indian Tandoori Paneer',
    price: 2,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/indiantandooripaneer.png?alt=media&token=0eb0d981-ef56-44d3-a969-e11aa5ede47d',
    category: 'Veg Pizza',
    ingredients: 'hihihuhuhaha',
    description: 'So Yummy and nhiều nước',
  },
  {
    id: '2031',
    restaurantId: '103',
    name: 'Veg Loaded',
    price: 1.9,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/vegloaded.png?alt=media&token=c7578c72-7f45-4377-876f-157ec71ac1ab',
    category: 'Pizza Mania',
    ingredients: 'hihihuhuhaha',
    description: 'So Yummy and nhiều nước',
  },
  //*
  {
    id: '2032',
    restaurantId: '104',
    name: 'Paneer & Onion',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/paneerandonion.png?alt=media&token=7bcc9f22-0c0e-4f55-a2d2-2bc490716762',
    category: 'Pizza Mania',
    ingredients: 'hihihuhuhaha',
    description: 'So Yummy and nhiều nước',
  },
  {
    id: '2033',
    restaurantId: '104',
    name: 'Garlic Breadsticks',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/garlicbreadsticks.png?alt=media&token=4164bfbf-fc54-400d-889d-73b675843a05',
    category: 'Sides and Beverages',
    ingredients: 'hihihuhuhaha',
    description: 'So Yummy and nhiều nước',
  },
  {
    id: '2034',
    restaurantId: '104',
    name: 'Stuffed Garlic Bread',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/stuffedgarlicbread.png?alt=media&token=b51cf079-4008-4c04-941a-2f71f5f754cb',
    category: 'Sides and Beverages',
    ingredients: 'hihihuhuhaha',

    description: 'So Yummy and nhiều nước',
  },
  //*
  {
    id: '2035',
    restaurantId: '104',
    name: 'Veggie Supreme',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/veggiesupreme.png?alt=media&token=8d7a911c-025f-417a-bde1-2518aa045f4f',
    category: 'Pizzas',
    description: 'So Yummy and nhiều nước',
    ingredients:
      'Black Olives, Green Capsicum, Mushroom, Onion, Red Paprika, Sweet Corn',
  },
  {
    id: '2036',
    restaurantId: '104',
    name: 'Spiced Chicken Meatballs',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/spicedchickenmeatballs.png?alt=media&token=79089302-db58-48ac-a8d1-6a2a60dc85e4',
    category: 'Pizzas',
    description: 'So Yummy and nhiều nước',
    ingredients: 'Schezwan Chicken Meatball, Onion',
  },
  {
    id: '2037',
    restaurantId: '104',
    name: 'Italian Chicken Feast',
    price: 2,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/italianchickenfeast.png?alt=media&token=e20b312c-f236-4643-b6ba-7996c6520f52',
    category: 'Pizzas',
    description: 'So Yummy and nhiều nước',
    ingredients:
      'Chicken Sausage, Chicken Pepperoni, Sweet Corn, Black Olive, Jalapeno',
  },
  {
    id: '2038',
    restaurantId: '104',
    name: 'Zesty Chicken Pocket',
    price: 1,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/zestychickenpocket.png?alt=media&token=d064850f-e167-4882-8530-126529ba8c7b',
    category: 'Sides',
    description: 'So Yummy and nhiều nước',
    ingredients:
      'Freshly Baked Pocket Stuffed With Chicken, Veggies & Smoked Texas Garlic Sauce',
  },
  {
    id: '2039',
    restaurantId: '104',
    name: 'Spiced Tomato Twist Non Veg',
    price: 2,
    images:
      'https://firebasestorage.googleapis.com/v0/b/delivery-app-b198e.appspot.com/o/spicedtomatotwistnonveg.png?alt=media&token=72257fe2-f9d7-464f-9aee-0588501fb28c',
    category: 'Sides',
    description: 'So Yummy and nhiều nước',
    ingredients:
      'Tangy Flavorful Red Sauce Pasta Infused With Heavenly Herbs & Spices Topped With Chicken Sausage',
  },
];

export default FOOD_DATA;
