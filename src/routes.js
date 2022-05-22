import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Repositories from './Repositories/Repositories';
import Home from './Home/Home';

export default function Rota(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact  path='/'  element={<Home/>} />
                <Route path='/repositories' element={<Repositories/>} />
            </Routes>
        </BrowserRouter>
    )
}