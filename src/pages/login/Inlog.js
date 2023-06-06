import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function Inlog( { isAuth } ) {
    console.log(isAuth)
    const [ timer, setTimer ] = useState(3)
    const navigate = useNavigate()
    // isAuth ? navigate("/blogpsots") :
    setTimeout(()=> {navigate("/login")}, 3000)
    setInterval(()=>{setTimer(timer -1)},1000)

    return (
        <div className="outer-container">
            <div className="inner-container">
                <h1>Onjuiste inlog</h1>
                <p>U heeft onjuiste gebruikersnaam en/of wachtwoord ingevuld.</p>
                <p>U wordt in <strong>{timer}</strong> seconden teruggestuurd naar de inlogpagina.</p>
            </div>
        </div>
    );
}

export default Inlog;