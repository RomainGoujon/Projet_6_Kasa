import React from 'react';
import Housing from '../../Data/logements.json';
import './style.css';

function Card() {
    return (
        <div className='cards'>
            {Housing.map((data) => (
                <div key={data.id} className='housing'>
                    <img src={data.cover} alt={data.title} />
                    <h2>{data.title}</h2>
                </div>
            ))}
        </div>
    )
};

export default Card