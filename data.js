import bcrypt from 'bcryptjs';


const initialState = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],

  basket: [
    // {
    //   id: "343243452",
    //   title: "New apple phone with best price",
    //   price: 453.99,
    //   rating: 4,
    //   image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-green-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1566956144838'
    // },
    {
      title:"Banado the online platform",
      price:23.34,
      rating:4,
      image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
    },
    // {
    //   id: "343243452",
    //   title: "New apple phone with best price",
    //   price: 453.99,
    //   rating: 4,
    //   image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-green-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1566956144838'
    // },
    {
      title:"Mouse",
      price:233.34,
      rating:3,
      image:"https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-244337D24F250BSI._V533746475_.jpg"
    },
    {
      title:"Speako",
      price:465.34,
      rating:2,
      image:"https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2447E617EC5C463L._V533746472_.jpg"
    },
    
    {
      title:"tablet",
      price:2354.34,
      rating:4,
      image:"https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-244373AC9B3C4612._V533746474_.jpg"
    }
    ,
    {
      title:"Router",
      price:1465.34,
      rating:5,
      image:"https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-24480C97FFA81710._V533746472_.jpg"
    }
    ,
    {
      title:"Sports",
      price:165.34,
      rating:5,
      image:"https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2B6169B6EC05731T._V531815324_.jpg"
    }
    ,
    {
      title:"Fitness",
      price:65.34,
      rating:3,
      image:"https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2B65317E0B8AD9OG._V531809983_.jpg"
    }
    ,
    {
      title:"Engineer Choice",
      price:665.34,
      rating:5,
      image:"https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2B63B8584C765317._V531815324_.jpg"
    }
    ,
    {
      title:"Kitchin choixe",
      price:843.34,
      rating:3,
      image:"https://m.media-amazon.com/images/I/41N8AxIJq4L._AC_SY200_.jpg"
    }
    ,
    {
      title:"Juicer",
      price:7465.34,
      rating:5,
      image:"https://m.media-amazon.com/images/I/41AZOLr72bL._AC_SY200_.jpg"
    }



  ],
};

export default initialState;
