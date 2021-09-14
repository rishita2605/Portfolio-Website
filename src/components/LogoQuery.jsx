import React from 'react';
import reactDom from 'react-dom';
import { NavLink } from 'react-router-dom';
import '../styles/navAndHeader.scss'
function LogoQuery(){
    return (
        <div className="logo-query">
            <NavLink className="logo-home"
            exact to="/">
            <div className="logo"></div>
            </NavLink>
            <div className="query">
                
                <NavLink className="nav-item"
                exact to="/comments" 
                activeClassName="selected">
                HAVE A QUERY?
                </NavLink>
              
            </div>
        </div>
    )
}

export default LogoQuery
