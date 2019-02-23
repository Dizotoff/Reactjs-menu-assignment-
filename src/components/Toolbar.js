import React from 'react';
import './../styles/toolbar.css';
import pin from './../img/pin.svg';
import logo from './../img/logo.svg';
import DrawerToggleButtton from './DrawerToggleButton.js';
const toolbar = props =>  {
    return (
        <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__logo"><a href='/'><img src={logo}  alt="telia logo"/></a></div>
            <div className="spacer"/>
            <div className="toolbar__mobile">
                <DrawerToggleButtton click={props.drawerClickHandler} check={props.open}/> 
                <a href="/"><img src={pin}  alt="menu icon"/></a> 
                <a href="/"><img src={pin}  alt="menu icon"/></a>
            </div>
            <div className="toolbar__navigation-items">
                <ul>
                    <li><DrawerToggleButtton click={props.drawerClickHandler} check={props.open} /></li>
                    <li><a href="/"><img src={pin}  alt="menu icon"/></a><a className="toolbar-login"href="/">LOGIN</a></li>
                    <li><a href="/"><img src={pin}  alt="menu icon"/></a></li>
                </ul>
            </div>
        </nav>
    </header>
    )
}

export default toolbar;