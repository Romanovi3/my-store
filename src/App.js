import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import React, {useState, useEffect} from "react";
import Store from './components/Store'
import AboutUs from "./components/About-us";






function App() {


  const [product , setProduct] = useState([
    {
      id: 1,
      title: 'Светлое',
      price: 250,
      quantity: 1,
      category: 'light',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'light.png'
    },
    { id: 2,
      title: 'Темное',
      price: 300,
      quantity: 1,
      category: 'dark',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'dark.png'
    },
    { id: 3,
      title: 'Лагер',
      price: 500,
      quantity: 1,
      category: 'dark',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'dark.png'
    },
    { id: 4,
      title: 'Ипа',
      price: 420,
      quantity: 1,
      category: 'light',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'light.png'
    },
    { id: 5,
      title: 'Жигулек',
      price: 100,
      quantity: 1,
      category: 'light',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'light.png'
    },
    { id: 6,
      title: 'Сидр',
      price: 250,
      quantity: 1,
      category: 'light',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'light.png'
    },
    { id: 7,
      title: 'Водочка',
      price: 260,
      quantity: 1,
      category: 'strong',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'strong.png'
    },
    { id: 8,
      title: 'Подводочка',
      price: 200,
      quantity: 1,
      category: 'strong',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'strong.png'
    },
    { id: 9,
      title: 'Пивасик',
      price: 240,
      quantity: 1,
      category: 'light',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'light.png'
    },
    { id: 10,
      title: 'Бражка',
      price: 200,
      quantity: 1,
      category: 'strong',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'strong.png'
    },
    { id: 11,
      title: 'Винцо',
      price: 1200,
      quantity: 1,
      category: 'wine',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'wine.png'
    },
    { id: 12,
      title: 'Стаут',
      price: 500,
      quantity: 1,
      category: 'dark',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'dark.png'
    }])

  const [cartItems, setCartItems] = useState([])



  useEffect(() => {
    console.log(cartItems)
  }, [cartItems]);

  const addToCart = (item) => {
    let isInArray = false
    cartItems.forEach(el =>{
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray){
    setCartItems([...cartItems, item]);
  }};

  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart){
      setCartItems(JSON.parse(savedCart))
    }
  }, []);

  useEffect(() => {
    saveToStorage(cartItems);
  }, [cartItems]);

  const saveToStorage = (cartItems) =>{
    localStorage.setItem('cartItems' , JSON.stringify(cartItems))
  }


  return (
    <div>
      <Header
        cartItems={cartItems}
        setCartItems={setCartItems}
        product={product}
        setProduct={setProduct}
      />
        <Main/>
        <Store
          product={product}
          addToCart={addToCart}
          cartItems={cartItems}
        />
        <AboutUs/>
        <Footer/>

    </div>
  );

}

export default App;
