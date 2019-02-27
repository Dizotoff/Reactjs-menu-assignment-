import React from 'react';
import './../styles/searchBar.css'
import cross from './../img/icons/cross-symbol.svg';
import search from './../img/icons/musica-searcher.svg';

class searchBar extends React.Component {
    //variable which defines on and off states of search bar
    state = {
        searchActive: false
    };
    
    searchBarOn = () => {
        this.setState({searchActive:true})
    }

    searchBarOff = () => {
        this.setState({searchActive:false}) 
        document.getElementById("searchInput").value="";
    }

    search = () => {
        //check that text is ok and post request here 
    }

    render () {
        //if active change the class name of divs to affect their css parameters
        let searchClass = ['search'];
        let searchLineClass = ['searchLine'];
        if (this.state.searchActive) {
            searchClass = ['search active'];
            searchLineClass = ["searchLine active"]
          }
    return (
        <div>
        <div className={searchLineClass}></div>
        <div className={searchClass}>
            <a href="#"  onClick={this.search}><img className="lupa" src={search}  alt="menu icon"/></a>
            <input type="text" id="searchInput"onClick = {this.searchBarOn} placeholder="Etsi..." />
            <img className="cross" src={cross} onClick = {this.searchBarOff} alt="exit search icon"/></div>
        </div>
    );
    }
};

export default searchBar;