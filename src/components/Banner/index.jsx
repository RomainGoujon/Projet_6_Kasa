import React from 'react';
import backgroundHome from '../../assets/Image//banner/mer.png';
import backgroundAbout from '../../assets/Image/banner/montagne.png';
import './style.css';

function Banner(props) {

    if (props.page=== 'home') {
        return (
        <section className='banner'>
            <div className='banner-container'>
                <img src={backgroundHome} className='banner-image' alt='vue sur mer' title='Chez vous, partout et ailleurs' />  
            </div>
            <div className='banner-container'>
                <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
            </div>
        </section>
    );
    } else if (props.page === 'about') {
        return (
            <section className='banner'>
            <div className='banner-container'>
                <img src={backgroundAbout} className='banner-image' alt='vue sur montagne' title='vue sur montagne' />  
            </div>
            </section>
        )
    };

};

export default Banner