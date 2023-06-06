import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

function Restricted(props) {
    const [ timer, setTimer ] = useState(5)
    const navigate = useNavigate()

    setTimeout(()=> {navigate("/login")}, 5000)
    setInterval(()=>{setTimer(timer -1)},1000)
    return (
        <div className="outer-container">
            <div className="inner-container">
                <h1>Restricted</h1>
                <p>U heeft geen toegang tot deze pagina wanneer u niet bent ingelogd. U heeft een geldige gebruikersnaam en wachtwoord nodig.</p>
                <p>U wordt in <strong>{timer}</strong> seconden teruggestuurd naar de inlogpagina.</p>
            </div>
        </div>
    );
}

export default Restricted;