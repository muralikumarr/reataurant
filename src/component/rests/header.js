import React from "react";
import './header.css';
import logo from '../Assets/main-logo.png';

const Header=()=>{
    return(
        <div class="container-header" id="w">
            <nav class="first">
            <a class="a-logo" href="https://www.youtube.com/watch?v=kfgI-fxrLQ8">
            <img src={logo} class="logo1" alt=""/>
            </a> 
            <ul class="nav">
                <li class="li-header" ><a id="id1" href="">HOURS & LOCATION</a></li>
                <li class="li-header" ><a id="id2" href="#q3">FOOD STALLS</a></li>
                <li class="li-header" ><a id="id3" herf="#q2">BAR & BEER WALL</a></li>
                <li class="li-header" ><a id="id4" href="#q1">ABOUT US</a></li>
                <li class="li-header" ><a id="id5" href="#q2">PRIVATE EVENTS</a></li>
                <li class="li-header" ><a id="id6" href="#">HAPPENINGS</a></li>
                <li class="li-header-li"><button class="li-div"><a href="#"></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ORDER ONLINE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></li>
            </ul>
            </nav>
        </div>
    )
}

export default Header;