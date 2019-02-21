import React from 'react';
import './../styles/drawerToggleButton.css'
const drawerToggleButttot = props =>  (
       <div className="toggle-button__wrapper">  
        <button className="toggle-button" onClick={props.click}>
        
              <div className="toggle-button__line"></div>
              <div className="toggle-button__line"></div>
              <div className="toggle-button__line"></div>
         </button>
         <a onClick={props.click}>MENU</a>
        </div> 
      );
  
  
  export default drawerToggleButttot;