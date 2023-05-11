import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../../pages/Home";
import About from '../../pages/About';
import Header from '../Header';
import Footer from '../Footer';
import Error404 from '../../pages/Error';

function Router() {
    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='*' element={<Error404 />} />
                <Route path='/about' element={<About />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default Router;
