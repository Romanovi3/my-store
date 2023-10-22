import React from 'react';

const Footer = () => {

    const dataYear = new Date()
    return (
        <footer>
            <h3>All rights reserved &copy;</h3>
            <div>
                {dataYear.getFullYear()} г.
            </div>
        </footer>
    );
};

export default Footer;