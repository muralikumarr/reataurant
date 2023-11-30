import React from "react";
import './menu.css';
import menuimg1 from '../Assets/pic1.png';
import menuimg2 from '../Assets/pic2.png';
import menuimg3 from '../Assets/pic3.png';
import menuimg4 from '../Assets/pic4.png';
import menuimg5 from '../Assets/pic5.png';

const Menu=()=>{
    return(
        <div class="menu-div" id="q3">
            <h2 class="font-h2">meet the menu</h2>
            <div class="meet-menu">
            <div class="menu1img">
                <a href="#" class="idd">
                <img class="menu1" src={menuimg1}/>
                </a>
                <p class="para">Anthony's Pizza & Pasta</p>
            </div>
            <div class="menu1img">
                <a href="#" class="idd">
                <img class="menu1" src={menuimg2}/>
                </a>
                <p class="para">Burgers & Dreams</p>
            </div>
            <div class="menu1img">
                <a href="#" class="idd">
                <img class="menu1" src={menuimg3}/>
                </a>
                <p class="para">TaCO!</p>
            </div>
            </div>
            <div class="meet-menu1">
            <div class="menu1img">
                <a href="#" class="idd">
                <img class="menu1" src={menuimg4}/>
                </a>
                <p class="para">Tora Sushi + Ramen</p>
            </div>
            <div class="menu1img">
                <a href="#" class="idd">
                <img class="menu1" src={menuimg5}/>
                </a>
                <p class="para">Zeps epiq Sandwiches</p>
            </div>
            </div>
        </div>
    )
}

export default Menu;