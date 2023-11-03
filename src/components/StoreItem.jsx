import React from 'react';

const StoreItem = ({addToCart, item, showModal}) => {

    return (

        <div className='storeItem'>
            <div className='imgBlock'>
                <img
                    src={'./img/cardImg/' + item.img}
                    alt={item.img}
                    onClick={()=>showModal(item)}
                />
            </div>
            <div className='storeItem__block' >
                <h2>{item.title}</h2>
                <h3>vsego za {item.price}р</h3>
                <p>{item.description}</p>
                <div>
                    <button onClick={()=> addToCart(item)}>
                        Добавить в корзину!
                    </button>
                </div>
            </div>
        </div>

    );
};

export default StoreItem;