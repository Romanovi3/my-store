import React from 'react';

const Categories = ({filterProduct}) => {

    const cat= [
        {
            category: 'all',
            name: 'Всё'
        },
        {
            category: 'light',
            name: 'Светлое'
        },
        {
            category: 'dark',
            name: 'Темное'
        },
        {
            category: 'strong',
            name: 'Крепкое'
        },
        {
            category: 'wine',
            name: 'Вино'
        }
    ]
    return (
        <div className='categories'>
            {cat.map(el=>
                <h3
                    key={el.category}
                    onClick={()=>filterProduct(el.category)}
                    id='store'
                >{el.name}</h3>
            )}
        </div>
    );
};

export default Categories;