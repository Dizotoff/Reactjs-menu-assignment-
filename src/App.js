import React from 'react';
import './App.css';
import Backdrop from './components/Backdrop';
import Drawer from './components/Drawer';
import Toolbar from './components/Toolbar';

class App extends React.Component {
  state = {
      drawerOpen: false
  };
 // event listener for toggle button 
  drawerToggleClickHandler = () => {
      this.setState((prevState)=>{
          return {drawerOpen: !prevState.drawerOpen};
      });
  };
  // event listener for backdrop click
  backdropClickHandler = () => {
    this.setState({drawerOpen:false})
  }

  render() {
      let backdrop;
      if (this.state.drawerOpen) {
          backdrop = <Backdrop click={this.backdropClickHandler}/>
      }
      return (
          <div>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} open={this.state.drawerOpen}/>
          <Drawer show={this.state.drawerOpen}/>
          {backdrop}
      </div>    
      );
  }
}

export default App;
