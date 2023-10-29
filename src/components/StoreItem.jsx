import React from 'react';

const StoreItem = ({addToCart, item }) => {

    return (

        <div className='storeItem'>
            <div className='storeItem__block'>
                <h2>{item.id}. {item.title}</h2>
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