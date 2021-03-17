import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'


import Curriculo from '../pages/Curriculo'
import Home from '../pages/Home'


const Routes = () => (
    <BrowserRouter>
 
        <Route exact path="/" component={Home} />
        
        <Route exact path="/curriculo" component={Curriculo} />
    </BrowserRouter>
);

export default Routes