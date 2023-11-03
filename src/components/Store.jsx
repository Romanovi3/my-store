import React, {useState} from 'react';
import StoreItem from "./StoreItem";
import Categories from "./Categories";
import ModalProduct from "./ModalProduct";

const Store = ({product , addToCart, cartItems}) => {

    const [currentProduct, setCurrentProduct] = useState(product)
    let [showFull, setShowFull] = useState(false)
    const showModal =()=>{
        setShowFull( showFull = !showFull)
    }


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
            {showFull && <ModalProduct
                showModal={showModal}
            />}
            <div className='store'>
                {currentProduct.map((item)=>
                    <StoreItem
                        item={item}
                        key={item.id}
                        addToCart={addToCart}
                        cartItems={cartItems}
                        showModal={showModal}
                    />
                )}
            </div>
        </div>
    );
};

export default Store;