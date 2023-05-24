import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../../pages/Home";
import About from '../../pages/About';
import Housing from '../../pages/Housing';
import Error404 from '../../pages/Error';

function Router() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/about' element={<About />} /> 
                <Route path='/housing/:id' element={<Housing />} />  
                <Route path='/*' element={<Error404 />} />
            </Routes>
        </div>
    );
};

export default Router
