import React, {useState} from 'react';
import { PiBasketLight } from "react-icons/pi";
import Basket from "./Basket";




const Header = ({cartItems , setCartItems, product, setProduct}) => {

    let [cartOpen , setCartOpen] = useState(false)


    return (
        <header>
            <div className="headerLogo">
                <h1>Domik Pivki</h1>
            </div>
            <div className="headerNav">
                <ul>
                    <li><a href="#store">Store</a></li>
                    <li><a href="#aboutus">About us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <PiBasketLight
                onClick={()=> setCartOpen(cartOpen = !cartOpen)}
                className={`basketIcon ${cartOpen && 'active'}`}
            />
            {cartOpen && (
                <Basket
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    product={product}
                    setProduct={setProduct}
                    key={product.id}
                />
            )}
        </header>
    );
};

export default Header;