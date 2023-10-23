import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {useState} from "react";
import Store from "./components/Store";
import Basket from "./components/Basket";


function App() {
  let [item , setItem] = useState([
    { id: 1 , title: 'Светлое', price: 250 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { id: 2 , title: 'Темное', price: 300 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { id: 3 , title: 'Лаггер', price: 500 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { id: 4 , title: 'Ипа', price: 420 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { id: 5 , title: 'Жигулек', price: 100 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { id: 6 , title: 'Сидр', price: 250 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { id: 7 , title: 'Сидр', price: 250 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { id: 8 , title: 'Сидр', price: 250 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { id: 9 , title: 'Сидр', price: 250 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { id: 10 , title: 'Сидр', price: 250 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { id: 11 , title: 'Сидр', price: 250 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { id: 12 , title: 'Сидр', price: 250 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
  ])
  let [basket, setBasket] = useState([])
  return (
    <div>
      <Header/>
      <Basket basket={basket}/>
        <Main/>
          <Store item={item} basket={basket}/>
        <Footer/>

    </div>
  );
}

export default App;
