import React from 'react';

const StoreItem = ({addToCart, item, showModal}) => {

    return (

        <div className='storeItem'>
            <div className='imgBlock'>
                <img
                    src={item.image_url}
                    alt={item.image_url}
                    onClick={()=>showModal(item)}
                />
            </div>
            <div className='storeItem__block' >
                <h2>{item.name}</h2>
                <h3>{item.abv} abv , {item.ph} ph - {item.ibu}$</h3>
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