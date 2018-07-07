import React from 'react';
import NavBar from './NavBar'
import './Header.css'
import '../../App.css'

export const Header = props => {
    return(
        <header id="Header">
            <NavBar className="Green-background" />
        </header>
    );
}