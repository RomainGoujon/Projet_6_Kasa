import React from "react";
import { Link } from 'react-router-dom';
import './style.css';

function Error404() {
    return (
        <main className='error-main'>
            <p className="error-404">404</p>
            <p className="message-error">Oups! La page que vous demandez n'existe pas.</p>
            <Link className='link' to='/'>Retourner sur la page d'accueil</Link>
        </main>
    );
};

export default Error404