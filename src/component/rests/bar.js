import React from "react";
import "./bar.css"
import { Button } from "react-bootstrap";

const Bar=()=>{
    return(
    <div>
        <div class="bar-div" id="q2">
            <h2 class="bar-h">Bar & Beer Wall</h2>
            <p>--------------</p>
            <p class="bar-p">Find out what's mixing behind the MPZ bar!</p>
            <a class="bar-a" href="">
                <button id="bar-but">Bar & Beer Wall</button>
            </a>
        </div>
        <div class="mur">
            <h2 class="mur-head">fellow us</h2>
        </div>
    </div>
    )
}

export default Bar;