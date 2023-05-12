import React from 'react';
import Housing from '../../Data/logements.json';
import './style.css';
import { Link } from "react-router-dom";

function Card() {
    return (
        <div className='cards'>
            {Housing.map((data) => (
                <div key={data.id}>
                    <Link to={`/housing/${data.id}`}>
                        <div className='housing'>
                            <img src={data.cover} alt={data.title} />
                            <h2>{data.title}</h2>
                        </div>
                    </Link>
                </div>     
            ))}
        </div>
    )
};

export default Card