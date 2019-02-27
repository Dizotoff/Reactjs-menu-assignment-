import React from 'react';
import './../styles/drawerToggleButton.css'

import closeIcon from './../img/icons/cross-symbol.svg'
const drawerToggleButttot = props =>  {
  let toggleButton = ['toggle-button'];
  let decorLine = ['decor-line active'];
  let closeCross = ['close'];
    if (props.check) {
      toggleButton = ['toggle-button open'];
      decorLine = ['decor-line'];
      closeCross = ['close active'];
    }
    return (
      <div className="toggle-button__wrapper">  
       <div className="close"><img src={closeIcon}></img></div>
        <button className={toggleButton} onClick={props.click}>
          <div className="toggle-button__line"></div>
          <div className="toggle-button__line"></div>
          <div className="toggle-button__line"></div>
        </button>
       <a href="#" onClick={props.click}>MENU</a>
       <div className={decorLine}></div>
      </div> 
    ) 
 };
  
  
  export default drawerToggleButttot;