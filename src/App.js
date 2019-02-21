import React from 'react';
import './App.css';
import Backdrop from './components/Backdrop';
import Drawer from './components/Drawer';
import Toolbar from './components/Toolbar';

class App extends React.Component {
  state = {
      DrawerOpen: false
  };
 
  drawerToggleClickHandler = () => {
      this.setState((prevState)=>{
          return {DrawerOpen: !prevState.DrawerOpen};
      });
  };
  
  backdropClickHandler = () => {
    this.setState({DrawerOpen:false})
    console.log(this.state.DrawerOpen);
    if(this.state.DrawerOpen) {
    console.log("FIRE!");
    }
  }

  render() {
      let backdrop;
      if (this.state.DrawerOpen) {
          backdrop = <Backdrop click={this.backdropClickHandler}/>
      }
      return (
          <div style={{height: '100%'}}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
          <Drawer show={this.state.DrawerOpen}/>
          {backdrop}
          
          <main style={{marginTop: '80px'}}>
              <p>test</p>
          </main>
      </div>    
      );
  }
}

export default App;
