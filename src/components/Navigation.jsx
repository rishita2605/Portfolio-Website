import React from 'react';
import ReactDOM from "react-dom"
import { NavLink } from 'react-router-dom';
import '../styles/navAndHeader.scss'

function Navigation(){
    return(
        <nav className="navigation">
              <NavLink className="nav-item"
                exact to="/" 
                activeClassName="selected">
                HOME
              </NavLink>
              <NavLink className="nav-item"
                to="/about" 
                activeClassName="selected">
                ABOUT
              </NavLink>
              <NavLink className="nav-item"
                to="/product" 
                activeClassName="selected">
                PRODUCT
              </NavLink>
              <NavLink className="nav-item"
                to="/comments" 
                activeClassName="selected">
                LEAVE A REVIEW
              </NavLink>
        </nav>
    )
}
export default Navigation