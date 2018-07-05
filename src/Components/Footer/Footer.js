import React from 'react';
import './Footer.css'
const date = new Date();
const year = date.getFullYear();


export const Footer = props => {
    return (
        <footer className="Green-background" id="Footer">
            <p>{'\u00A9 ' + year} Christopher White. All rights reserved.</p>
        </footer>
    );
};

