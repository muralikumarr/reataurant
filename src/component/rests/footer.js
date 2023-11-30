import React from "react";
import './footer.css';
import logoo from '../Assets/footer.png';

const Footer=()=>{
    return(
        <>
        <div class="main-div">
            <a href="https://www.sagehospitality.com/restaurant-concepts/">
                <div class="img-div">
                    <img class="img1" src={logoo} alt=""/>
                </div>
            </a>
        </div>
        <div class="div2">  
        <ul class="footer-ul">
                <li class="li-footer"><a href="#"></a>CAREERS</li>
                <li class="li-footer"><a href="#"></a>PRESS</li>
                <li class="li-footer"><a href="#"></a>CONTACT</li>
                <li class="li-footer"><a href="#"></a>PRIVACY</li>
                <li class="li-footer"><button class="li-but"><a href="#"></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EMAIL SIGNUP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></li>
            </ul> 
        </div>
        <a href="https://getbento.com/?utm_source=footer&utm_campaign=milepostzero.com">
        <div class="div33">

        </div>
        </a>
        </>
    )
}

export default Footer