import React from 'react';

const Categories = ({filterProduct}) => {

    const cat= [
        {
            category: 'all',
            name: 'Всё'
        },
        {
            category: 'lite',
            name: 'Легкое',
        },
        {
            category: 'medium',
            name: 'Средненькое',
        },
        {
            category: 'strong',
            name: 'Крепкое',
        },
        {
            category: 'hell',
            name: 'Полный отвал',
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