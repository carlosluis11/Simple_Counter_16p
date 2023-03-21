//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0;
setInterval(() => {
    counter = counter + 1;
    const firstSecond = counter % 10;
    const secondSecond = Math.floor((counter / 10) % 10);
    const thirdSecond = Math.floor ((counter / 100) % 10);
    const fourthSecond = Math.floor ((counter / 1000) % 10);
    const fifthSecond = Math.floor ((counter / 10000) % 10);
    ReactDOM.render(
        <div className="container bg-black mt-5">
            <div className="row p-4">
                <div className="col-2 border bg-dark rounded text-center text-light fs-1">
                    <i className="far fa-clock"></i>
                </div>
                <Home time = {fifthSecond}/>
                <Home time = {fourthSecond}/>
                <Home time = {thirdSecond} />
                <Home time = {secondSecond} />
                <Home time = {firstSecond} />
            </div>
        </div>
        ,document.querySelector("#app")
        );
}, 1000);
