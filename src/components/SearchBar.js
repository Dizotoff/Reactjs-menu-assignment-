import React from 'react';
import './../styles/searchBar.css'
import pin from './../img/icons/pin.svg'
class searchBar extends React.Component {
    state = {
        searchActive: false
    };
    
    searchBarOn = () => {
        this.setState({searchActive:true})
    }

    searchBarOff = () => {
        this.setState({searchActive:false}) 
    }

    search = () => {
        //post request here 
    }

    render () {
        let searchClass = ['search'];
        let searchLineClass = ['searchLine'];
        if (this.state.searchActive) {
            searchClass = ['search active'];
            searchLineClass = ["searchLine active"]
          }
    return (
        <div>
        <div className={searchLineClass}></div>
        <div className={searchClass}><a href="#" onClick={this.search}><img src={pin}  alt="menu icon"/></a><input type="text" onClick = {this.searchBarOn} placeholder="Etsi..." /><img src={pin} onClick = {this.searchBarOff} alt="exit search icon"/></div>
        </div>
    );
}
};

export default searchBar;