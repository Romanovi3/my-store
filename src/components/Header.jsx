import React, {useState} from 'react';
import { PiBasketLight } from "react-icons/pi";


const Header = () => {

    let [cartOpen , setCartOpen] = useState(false)
    return (
        <header>
            <div className="headerLogo">
                <h1>Dom Pivka</h1>
            </div>
            <div className="headerNav">
                <ul>
                    <li>Contact</li>
                    <li>Store</li>
                    <li>About us</li>
                </ul>
            </div>
            <PiBasketLight
                className='basketIcon'
                onClick={()=> setCartOpen(cartOpen = !cartOpen)}
                className={`basketIcon ${cartOpen && 'active'}`}
            />
            {cartOpen && (
                <div className='shopCart'>

                </div>
            )}
        </header>
    );
};

export default Header;