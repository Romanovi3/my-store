import React from 'react';

const ModalProduct = ({showModal}) => {
    return (
        <div className='modalProduct'>
            <button onClick={()=> showModal()}>X</button>
            <div className='modalBlock'>
                <h3>popka</h3>
                <h2>piska</h2>

            </div>
        </div>
    );
};

export default ModalProduct;