import React from 'react';
import StoreItem from "./StoreItem";
const Store = ({item}) => {
    return (
        <div className='store'>
            {item.map((item)=>
            <StoreItem item={item} key={item.id}/>
            )}
        </div>
    );
};

export default Store;