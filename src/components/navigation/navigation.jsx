import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom';

import './navigation.css'

export class Navigation extends Component {
    render() {
        return(
            <div className='navigation-wrapper'>
            <div className='container'>
            <Fragment className='navigationStyle'>
                <div className='logo'> </div>
                <NavLink className= 'navigationLinkStyle' exact to="/">Strona główna</NavLink>
                <NavLink className= 'navigationLinkStyle' to="/about">Poznaj moją historię</NavLink>
                <NavLink className= 'navigationLinkStyle' to="/portfolio">Zobacz moje portfolio</NavLink>
                <NavLink className= 'navigationLinkStyle' to="/photography">Kilka zdjęć z mojej galerii</NavLink>
                <NavLink className= 'navigationLinkStyle' to="/contact">Skontaktuj się ze mną</NavLink>
            </Fragment>
            </div>
            </div>
        )
    }
}