import React from 'react';
import users from '../../data/users.json';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../../componenten/Input";
import './Login.css';
import blogPost from "../blogpost/BlogPost";

function Login( { isAuth, toggleAuth } ) {

    const navigate = useNavigate();
    function handleFormSubmit( { name, password }  ) {
        { users.map((item) => {
            name === item.name && password === item.password
            && toggleAuth(true)
        }) }
        navigate("/blogposts")
    }

    const { register, handleSubmit } = useForm()

    return (
        <div className="outer-container">
            <div className="inner-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <Input
                        label="Naam"
                        id="name"
                        inputType="text"
                        name="name"
                        register={register}
                        placeholdeer="Uw naam"
                    />
                    <Input
                        label="Wachtwoord"
                        id="password"
                        inputType="password"
                        name="password"
                        placeholdeer="Uw wachtwoord"
                        register={register}
                    />
                    <button type="submit" className="submit">Inloggen
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;