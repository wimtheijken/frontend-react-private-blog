import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function Uitloggen(props) {
    const [ timer, setTimer ] = useState(3)
    const navigate = useNavigate()
    setTimeout(()=> {navigate("/")}, 3000)
    setInterval(()=>{setTimer(timer -1)},1000)
    return (
        <div className="outer-container">
            <div className="inner-container">
                <h1>Uitloggen</h1>
                <p>U wordt nu uitgelogd.</p>
                <p>U wordt in <strong>{timer}</strong> seconden teruggestuurd naar de homepagina.</p>
            </div>
        </div>
    );
}

export default Uitloggen;