import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

function PageNotFound(props) {
    const [ timer, setTimer ] = useState(3)
    const navigate = useNavigate()
    setTimeout(()=> {navigate("/")}, 3000)
    setInterval(()=>{setTimer(timer -1)},1000)
    return (
        <div className="outer-container">
            <div className="inner-container">
                <h1>Page not found</h1>
                <p>Deze pagina bestaat niet.</p>
                <p>U wordt in <strong>{timer}</strong> seconden teruggestuurd naar de homepagina.</p>
            </div>
        </div>
    );
}

export default PageNotFound;