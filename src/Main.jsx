import React from 'react';
import {
    Router,
    Route,
    Switch,
} from 'react-router';


import { NotFound } from './layouts/not-found'
import { About } from './layouts/about'
import { Home } from "./layouts/home";
import { Navigation } from "./components/navigation";
import './index.css'


export const Main = () => (
        <div className= 'main'>
            <Navigation/>
            <Switch>
                <Route exact={true} path='/' component={Home}/>
                <Route exact={true} path='/about' component={About}/>
                <Route component={NotFound}/>
            </Switch>
        </div>

)

