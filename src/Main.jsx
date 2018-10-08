import React from 'react';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';


import { About } from './layouts/about'
import { Contact } from './layouts/contact'
import { Footer } from "./components/footer"
import { Home } from "./layouts/home"
import { Navigation } from "./components/navigation"
import { NotFound } from './layouts/not-found'
import { Photography } from "./layouts/photography"
import { Portfolio} from "./layouts/portfolio"
import './index.css'


export const Main = () => (
    <HashRouter>
        <div className= 'main'>
            <Navigation/>
            <Switch>
                <Route exact={true} path='/' component={Home}/>
                <Route exact={true} path='/about' component={About}/>
                <Route exact={true} path='/contact' component={Contact}/>
                <Route exact={true} path='/portfolio' component={Portfolio}/>
                <Route exact={true} path='/photography' component={Photography}/>
                <Route component={NotFound}/>
            </Switch>
            <Footer/>
        </div>
    </HashRouter>

)

