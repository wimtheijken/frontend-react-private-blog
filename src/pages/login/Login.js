import React from 'react';
import users from '../../data/users.json';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../../componenten/Input";
import './Login.css';

function Login( { isAuth, toggleAuth } ) {

    // console.log(users)
    const navigate = useNavigate();

    // console.log(isAuth)
    function handleFormSubmit( { name, password }  ) {
        console.log("\nstart")
        console.log(name)
        console.log(password)
        console.log(isAuth)
        { users.map((item) => {
            name === item.name && password === item.password
            && toggleAuth(true)
        }) }
        console.log(isAuth) // hier is isAuth 'nog' niet
        isAuth ? navigate("/blogposts") : navigate("/") // ik navigeer hier dus naar restricted maar ondertussen ben ik wel ingelogd
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