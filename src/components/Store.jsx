import React from 'react';
import StoreItem from "./StoreItem";

const Store = ({product , addToCart}) => {
    return (
        <div className='store' id='store'>
            {product.map((item)=>
                <StoreItem
                    item={item}
                    key={item.id}
                    addToCart={addToCart}
                />
            )}
        </div>
    );
};

export default Store;