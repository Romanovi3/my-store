import React from 'react';
import { FaRegTrashCan } from "react-icons/fa6";

const Basket = ({cartItems , setCartItems}) => {


    const removeFromCart = (itemToRemove) => {
        setCartItems(cartItems.filter((item) => item !== itemToRemove))
    };
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);}
    const handleIncrease = (item) =>{
        setCartItems(cartItems.map((el)=> {
                if (item.id === el.id){
                    return {...el, quantity: el.quantity+1}
                }
                return el
            }
        ))
    }
    const handleDecrease = (item) =>{
        setCartItems(cartItems.map((el)=> {
                if (item.id === el.id){
                    return {...el, quantity: el.quantity - 1}

                }
                return el
            }
        ))
        if ( item.quantity === 1){
            removeFromCart(item)
        }
    }

    return (
        <div className='shopCart'>
            {cartItems.length === 0 && <p className='emptyCart'>Your cart is empty</p>}
            {cartItems.length > 0 && cartItems.map((item)=>(
                <div key={item.id}>
                    <div className='cartBlock'>
                        <div>
                            <h2>{item.title} - {item.quantity}шт.</h2>
                            <p>{item.price} р.</p>
                        </div>
                        <div className='cartBtns'>
                            <button onClick={()=> handleIncrease(item)}>+</button>
                            <button onClick={()=>handleDecrease(item)}>-</button>
                            <FaRegTrashCan
                                className='trash'
                                onClick={()=>removeFromCart(item)}
                            />
                        </div>
                    </div>
                </div>
            ))}
            {cartItems.length > 0 && (
                <div>
                    <p className='totalCart'>Общая сумма: {calculateTotal()}р</p>
                </div>
            )}
        </div>

    );


};

export default Basket;