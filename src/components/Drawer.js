import React from 'react';
import './../styles/drawer.css';
import pin from './../img/pin.svg';
import liga from './../img/liiga-logo_128x128.png';
const drawer = props => {
      let drawerClases = ['drawer'];
      if (props.show) {
        drawerClases = ['drawer open'];
      }
        return (
          
          <div>
            <nav className={drawerClases}>
               <section className={"upperDrawer"}>
                  <ul>  
                      <li className="test"><img src={pin}  alt="menu icon"/><a href="/">Etsi kauppa</a></li>
                      <li><img src={pin} alt="menu icon"/><a href="/">Etsi ohjeita</a></li>
                      <li><img src={pin} alt="menu icon"/><a href="/">Kysy Yhteisöltä</a></li>
                      <li><img src={pin} alt="menu icon"/><a href="/">Ota yhteyttä</a></li>
                  </ul>
                  <div className="search"><form><img src={pin} alt="search icon"/><input type="text" placeholder="Etsi..." /><img src={pin} alt="exit search icon"/></form></div>
               </section>
               <section className={"lowerDrawer"}>
                  <ul>  
                      <li><img src={liga} alt="menu icon"/><a href="/">Laitteet</a></li>
                      <li><img src={liga} alt="menu icon"/><a href="/">Liittymät</a></li>
                      <li><img src={liga} alt="menu icon"/><a href="/">Laajakaistat</a></li>
                      <li><img src={liga} alt="menu icon"/><a href="/">Dot</a></li>
                  </ul>
                  <ul>
                      <li><img src={liga} alt="menu icon"/><a href="/">TV ja viihde</a></li>
                      <li><img src={liga} alt="menu icon"/><a href="/">Palvelut</a></li>
                      <li><img src={liga} alt="menu icon"/><a href="/">Tarjoukset</a></li>
                      <li><img src={liga} alt="menu icon"/><a href="/">Liiga</a></li>
                  </ul>
               </section>
            </nav>
          </div>
        )
    }
export default drawer;