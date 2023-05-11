import React from "react";
import logo from '../../assets/Image/logo/logo_footer.png';
import './style.css'

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} className="logo" alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
};

export default Footer