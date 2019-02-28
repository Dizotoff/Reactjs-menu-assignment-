import React from 'react';
import './../styles/drawer.css';
import SearchBar from './../components/SearchBar';

import liga from './../img/icons/cup.svg';
import pin from './../img/pin.svg';
import chat from './../img/icons/chat.svg';
import community from './../img/icons/team.svg';
import smartphones from './../img/icons/smartphones-couple.svg';
import band from './../img/icons/worlwide-transmission.svg';
import dot from './../img/icons/DOT_pallo2.png';
import question from './../img/icons/question-mark-on-a-circular-black-background.svg';
import simcard from './../img/icons/simcard.svg';
import bag from './../img/icons/shopping-bag.svg';
import dots from './../img/icons/big-and-small-dots.svg';
import tv from './../img/icons/monitor.svg';

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
                      <li><a href="/"><img src={pin}  alt="pin"/></a><a href="/">Etsi kauppa</a></li>
                      <li><a href="/"><img src={question}  alt="question mark"/></a><a href="/">Etsi ohjeita</a></li>
                      <li><a href="/"><img src={community}  alt="group of people"/></a><a href="/">Kysy Yhteisöltä</a></li>
                      <li><a href="/"><img src={chat}  alt="chatting"/></a><a href="/">Ota yhteyttä</a></li>
                  </ul>
                  <SearchBar/>
               </section>
               <section className={"lowerDrawer"}>
                  <ul>  
                      <li><a href="/"><img src={smartphones}  alt="two mobile phone"/></a><a href="/">Laitteet</a></li>
                      <li><a href="/"><img src={simcard}  alt="simcard"/></a><a href="/">Liittymät</a></li>
                      <li><a href="/"><img src={band}  alt="wifi signal"/></a><a href="/">Laajakaistat</a></li>
                      <li><a href="/"><img src={dot} alt="pink dot"/></a><a href="/">Dot</a><br></br><span> Laite piste perinteisille liittymille.</span></li>
                  </ul>
                  <ul>
                      <li><a href="/"><img src={tv}  alt="tv screen and remote"/></a><a href="/">TV ja viihde</a></li>
                      <li><a href="/"><img src={dots}  alt="dots"/></a><a href="/">Palvelut</a></li>
                      <li><a href="/"><img src={bag}  alt="shopping bag"/></a><a href="/">Tarjoukset</a></li>
                      <li><a href="/"><img src={liga}  alt="winner trophy"/></a><a href="/">Liiga</a><br></br><span> Telia on Liigan uusi koti.</span></li>
                  </ul>
               </section>
            </nav>
          </div>
        )
    }
    
export default drawer;

