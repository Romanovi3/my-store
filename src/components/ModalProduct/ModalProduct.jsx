import './ModalProduct.css'
import React from 'react';

const ModalProduct = ({showModal, modalItem, addToCart}) => {
    return (
        <div className='modalProduct'>
            <div className='modalBlock'>
                <div className='modalBlock__imgSection'>
                    <img src={modalItem.image_url}
                         alt={modalItem.img}/>
                </div>
                <div className='modalBlock__info'>
                    <h2>{modalItem.name} - {modalItem.ibu}$</h2>
                    <h3>{modalItem.description}</h3>
                    <h4>@{modalItem.contributed_by} - </h4>
                    <p className='modalBlock__tips'>"{modalItem.brewers_tips}"</p>
                    <button onClick={()=>addToCart(modalItem)}>Круто! Беру.</button>
                </div>
                <button className='xBtn' onClick={()=> showModal()}>Х</button>
            </div>
        </div>
    );
};

export default ModalProduct;