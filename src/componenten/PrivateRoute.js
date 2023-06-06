import React from 'react';
import Blog from "../pages/blog/Blog";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute( { isAuth } ) {
    console.log(isAuth)
    return (
        isAuth === true ? <Outlet/> : <Navigate to="/restricted"/>
    );
}

export default PrivateRoute;

// <Route path={path} element={isAuth === true ? {page} : <Navigate to="/restricted"/>}/>