import React from 'react';

const ModalProduct = ({showModal, modalItem, addToCart}) => {
    return (
        <div className='modalProduct'>
            <div className='modalBlock'>
                <div className='modalBlock__imgSection'>
                    <img src={'./img/cardImg/' + modalItem.img}
                         alt={modalItem.img}/>
                </div>
                <div className='modalBlock__info'>
                    <h2>{modalItem.title}</h2>
                    <p>{modalItem.description}</p>
                    <button onClick={()=>addToCart(modalItem)}>Круто! Беру.</button>
                </div>
                <button className='xBtn' onClick={()=> showModal()}>Х</button>
            </div>
        </div>
    );
};

export default ModalProduct;