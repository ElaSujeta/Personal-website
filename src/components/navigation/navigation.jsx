import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom';

import './navigation.css'



export class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        }
    }
    handleHideMenu = () => {
        this.setState ({
            display: false
        })
    };
    handleShowMenu = () => {
        this.setState ({
            display: true,
        })
    };
    render() {
        return(
            <div className='navigation-wrapper'>
            <div className='nav-container'>
            <div className='logo'> </div>
            <div className='navigationStyle'>
               
                <NavLink className= 'navigationLinkStyle' exact to="/">Strona główna</NavLink>
                <NavLink className= 'navigationLinkStyle' to="/about">Poznaj moją historię</NavLink>
                <NavLink className= 'navigationLinkStyle' to="/portfolio">Zobacz moje portfolio</NavLink>
                <NavLink className= 'navigationLinkStyle' to="/photography">Kilka zdjęć z mojej galerii</NavLink>
                <NavLink className= 'navigationLinkStyle' to="/contact">Skontaktuj się ze mną</NavLink>
            </div>
            </div>
            </div>
            
        )
    }
}

