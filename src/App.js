import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import React, {useState, useEffect} from "react";
import Store from './components/Store/Store'
import AboutUs from "./components/About-us/About-us";

function App() {

  const [product , setProduct] = useState([])
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
    setCartItems([...cartItems, {id:item.id , ibu:item.ibu, name:item.name, image: item.image_url, quantity: 1}])
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
