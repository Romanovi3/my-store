import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import React, {useState, useEffect} from "react";
import Store from './components/Store'
import AboutUs from "./components/About-us";

function App() {


  const [product , setProduct] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    console.log(cartItems)
  }, [cartItems]);


   const addQuantity = ()=>{
     if (cartItems.quantity === undefined) {
       for (let i = 0; i < cartItems.length; i++) {
         cartItems[i].quantity = 1;
       }
     }
     else{
       return
     }
  }

  const addToCart = (item) => {
    let isInArray = false
    cartItems.forEach(el =>{
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray){
    setCartItems([...cartItems, item])
  }};

  useEffect(() => {
    addQuantity()
  }, [addToCart]);

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

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
        .then(response => response.json())
        .then(product => {
          setProduct(product);
        })
  }, []);

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
