import React from "react";
import './about us.css'
import lowlogo from '../Assets/low-logo.png'

const Adout=()=>{
    return(
        <div class="bg-img" id="q1">
            <img class="logo-it" src={lowlogo} />
            <p class="about-p">Welcome to Milepost Zero – your home-base for simply great, convenient food and<br></br> drinks in the heart of McGregor Square.</p><br></br>
            <a herf="#q2"><button class="logo-but" herf="#w">About Us</button></a>
        </div>
    )
}

export default Adout;