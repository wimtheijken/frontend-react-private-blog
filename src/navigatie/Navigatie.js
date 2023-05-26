import React from 'react';
import {Navigate, NavLink, useNavigate} from 'react-router-dom';
import './Navigatie.css';

function Navigatie( { isAuth, toggleAuth } ) {
    const navigate = useNavigate();

    return (
        <div className="navigatiebalk">
            <ul className="navigatie">
                <li><NavLink
                    className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                    to="/">
                    Home
                </NavLink></li>
                { isAuth && <li><NavLink
                    className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                    to="/blogposts">
                    Blog
                </NavLink></li> }
                { !isAuth && <li><NavLink
                    className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                    to="/login">
                    Login
                </NavLink></li> }
                { isAuth && <button type="button" className="button" onClick={()=> {
                    toggleAuth(false)
                    navigate("/uitloggen")
                }}>Uitloggen</button> }
            </ul>
        </div>
    );
}

export default Navigatie;