import React from 'react';
import './../styles/drawerToggleButton.css'
const drawerToggleButttot = props =>  {
  let toggleButton = ['toggle-button'];
  let decorLine = ['decor-line active']
      if (props.check) {
        toggleButton = ['toggle-button open'];
        decorLine = ['decor-line']
      }
      
    console.log(toggleButton);
    return (
       <div className="toggle-button__wrapper">  
        <button className={toggleButton} onClick={props.click}>
        
              <div className="toggle-button__line"></div>
              <div className="toggle-button__line"></div>
              <div className="toggle-button__line"></div>
         </button>
         <a onClick={props.click}>MENU</a>
         <div className={decorLine}></div>
        </div> 
      ) 
    };
  
  
  export default drawerToggleButttot;