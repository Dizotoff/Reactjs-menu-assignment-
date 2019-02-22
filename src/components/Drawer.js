import React from 'react';
import './../styles/drawer.css';
import pin from './../img/pin.svg';
import liga from './../img/liiga-logo_128x128.png';
import SearchBar from './../components/SearchBar'
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
                      <li><a href="/"><img src={pin}  alt="menu icon"/></a><a href="/">Etsi kauppa</a></li>
                      <li><a href="/"><img src={pin}  alt="menu icon"/></a><a href="/">Etsi ohjeita</a></li>
                      <li><a href="/"><img src={pin}  alt="menu icon"/></a><a href="/">Kysy Yhteisöltä</a></li>
                      <li><a href="/"><img src={pin}  alt="menu icon"/></a><a href="/">Ota yhteyttä</a></li>
                  </ul>
                  <SearchBar/>
               </section>
               <section className={"lowerDrawer"}>
                  <ul>  
                      <li><a href="/"><img src={liga}  alt="menu icon"/></a><a href="/">Laitteet</a></li>
                      <li><a href="/"><img src={liga}  alt="menu icon"/></a><a href="/">Liittymät</a></li>
                      <li><a href="/"><img src={liga}  alt="menu icon"/></a><a href="/">Laajakaistat</a></li>
                      <li><a href="/"><img src={liga}  alt="menu icon"/></a><a href="/">Dot</a></li>
                  </ul>
                  <ul>
                      <li><a href="/"><img src={liga}  alt="menu icon"/></a><a href="/">TV ja viihde</a></li>
                      <li><a href="/"><img src={liga}  alt="menu icon"/></a><a href="/">Palvelut</a></li>
                      <li><a href="/"><img src={liga}  alt="menu icon"/></a><a href="/">Tarjoukset</a></li>
                      <li><a href="/"><img src={liga}  alt="menu icon"/></a><a href="/">Liiga</a></li>
                  </ul>
               </section>
            </nav>
          </div>
        )
    }
export default drawer;

