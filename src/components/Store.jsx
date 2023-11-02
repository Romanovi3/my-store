import React, {useState} from 'react';
import StoreItem from "./StoreItem";
import Categories from "./Categories";

const Store = ({product , addToCart, cartItems}) => {

    const [currentProduct, setCurrentProduct] = useState(product)

        const filterProduct =(category)=>{
            setCurrentProduct(
                 product.filter(el=>el.category === category)
            )
            if (category === 'all') {
                setCurrentProduct(product)
            }
        }

    return (
        <div>
            <div>
                <Categories
                    product={product}
                    currentProduct={currentProduct}
                    setCurrentProduct={setCurrentProduct}
                    filterProduct={filterProduct}
                />
            </div>
            <div className='store'>
                {currentProduct.map((item)=>
                    <StoreItem
                        item={item}
                        key={item.id}
                        addToCart={addToCart}
                        cartItems={cartItems}
                    />
                )}
            </div>
        </div>
    );
};

export default Store;