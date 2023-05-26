import React, { useState } from 'react';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Blog from "./pages/blog/Blog";
import Blogpost from "./pages/blogpost/BlogPost";
import Navigatie from "./navigatie/Navigatie";
import Restricted from "./componenten/Restricted";
import Uitloggen from "./componenten/Uitloggen";
import PageNotFound from "./componenten/PageNotFound";
import PrivateRoute from "./componenten/PrivateRoute";
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);
  console.log(isAuthenticated)
  return (
    <div>
        <Navigatie
        isAuth={isAuthenticated}
        toggleAuth={toggleIsAuthenticated}/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login
                isAuth={isAuthenticated}
                toggleAuth={toggleIsAuthenticated}/>}/>
            <Route element={<PrivateRoute isAuth={isAuthenticated}/>}>
                <Route path="/blogposts" exact element={<Blog/>}/>
                <Route path="/blogposts/:blogId" element={<Blogpost/>}/>
            </Route>
            <Route path="/restricted" element={ <Restricted/> }/>
            <Route path="/uitloggen" element={ <Uitloggen/> }/>
            <Route path="*" element={ <PageNotFound/> }/>
        </Routes>
    </div>
  );
}

export default App;