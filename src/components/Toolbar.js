import React from 'react';
import './../styles/toolbar.css';
import pin from './../img/pin.svg';
import logo from './../img/logo.svg';
import DrawerToggleButtton from './DrawerToggleButton.js';
const toolbar = props =>  (
        <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__logo"><a href='/'><img src={logo}  alt="telia logo"/></a></div>
            <div className="spacer"/>
            <div className="toolbar__navigation-items">
                <ul>
                    <li><DrawerToggleButtton click={props.drawerClickHandler}/></li>
                    <li><img src={pin}  alt="menu icon"/><a href="/">LOGIN</a></li>
                    <li><a href="/">BUY</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;