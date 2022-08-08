
import React from 'react';


import { Routes, Route } from 'react-router-dom';


import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

const Router = () => {
return (

<Routes>

<Route path="/*" element={<Home/>} />
<Route path="/dash" element={<Dashboard/>} />
<Route path="/user/:id" element={<Profile/>} />
</Routes>
);
}


export default Router;

