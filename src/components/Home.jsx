import React, { Component } from 'react';
import LogoQuery from './LogoQuery';
import { Icon, InlineIcon } from '@iconify/react';
import dotGrid from '@iconify/icons-akar-icons/dot-grid';
import '../styles/home.scss'
import HeadingHome from './HeadingHome';
import OvalImage from './OvalImage';
import { NavLink } from 'react-router-dom';
function Home(){
    return (
      <div className="home">
        <div className="home-main-content">
          <HeadingHome subHeading="spring edition" mainHeading1="maple" mainHeading2="oak"/>
          <div className="images-section-parent">
            <div className="images-section">
              <OvalImage id="1"/>
              <OvalImage id="2"/>
              <OvalImage id="3"/>
            </div>
          </div>
          <div className="dots">
            <NavLink className="nav-item"
            to="/product"
            activeClassName="selected">
            <button className="gallery">
              {/* <Icon icon={dotGrid} /> */}
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="galleryDots">
                  <g id="topleft">
                  <path id="Vector" d="M1.625 3.5C1.625 4.53553 2.46447 5.375 3.5 5.375C4.53553 5.375 5.375 4.53553 5.375 3.5C5.375 2.46447 4.53553 1.625 3.5 1.625C2.46447 1.625 1.625 2.46447 1.625 3.5Z" stroke="white" stroke-width="2"/>
                  </g>
                  <path id="Vector_2" d="M16.625 3.5C16.625 4.53553 17.4645 5.375 18.5 5.375C19.5355 5.375 20.375 4.53553 20.375 3.5C20.375 2.46447 19.5355 1.625 18.5 1.625C17.4645 1.625 16.625 2.46447 16.625 3.5Z" stroke="white" stroke-width="2"/>
                  <g id="topright">
                  <path id="Vector_3" d="M31.625 3.5C31.625 4.53553 32.4645 5.375 33.5 5.375C34.5355 5.375 35.375 4.53553 35.375 3.5C35.375 2.46447 34.5355 1.625 33.5 1.625C32.4645 1.625 31.625 2.46447 31.625 3.5Z" stroke="white" stroke-width="2"/>
                  </g>
                  <path id="Vector_4" d="M1.625 18.5C1.625 19.5355 2.46447 20.375 3.5 20.375C4.53553 20.375 5.375 19.5355 5.375 18.5C5.375 17.4645 4.53553 16.625 3.5 16.625C2.46447 16.625 1.625 17.4645 1.625 18.5Z" stroke="white" stroke-width="2"/>
                  <path id="Vector_5" d="M16.625 18.5C16.625 19.5355 17.4645 20.375 18.5 20.375C19.5355 20.375 20.375 19.5355 20.375 18.5C20.375 17.4645 19.5355 16.625 18.5 16.625C17.4645 16.625 16.625 17.4645 16.625 18.5Z" stroke="white" stroke-width="2"/>
                  <path id="Vector_6" d="M31.625 18.5C31.625 19.5355 32.4645 20.375 33.5 20.375C34.5355 20.375 35.375 19.5355 35.375 18.5C35.375 17.4645 34.5355 16.625 33.5 16.625C32.4645 16.625 31.625 17.4645 31.625 18.5Z" stroke="white" stroke-width="2"/>
                  <g id="bottomleft">
                  <path id="Vector_7" d="M1.625 33.5C1.625 34.5355 2.46447 35.375 3.5 35.375C4.53553 35.375 5.375 34.5355 5.375 33.5C5.375 32.4645 4.53553 31.625 3.5 31.625C2.46447 31.625 1.625 32.4645 1.625 33.5Z" stroke="white" stroke-width="2"/>
                  </g>
                  <path id="Vector_8" d="M16.625 33.5C16.625 34.5355 17.4645 35.375 18.5 35.375C19.5355 35.375 20.375 34.5355 20.375 33.5C20.375 32.4645 19.5355 31.625 18.5 31.625C17.4645 31.625 16.625 32.4645 16.625 33.5Z" stroke="white" stroke-width="2"/>
                  <g id="bottomright">
                  <path id="Vector_9" d="M31.625 33.5C31.625 34.5355 32.4645 35.375 33.5 35.375C34.5355 35.375 35.375 34.5355 35.375 33.5C35.375 32.4645 34.5355 31.625 33.5 31.625C32.4645 31.625 31.625 32.4645 31.625 33.5Z" stroke="white" stroke-width="2"/>
                  </g>
                  </g>
              </svg>
            </button>
            </NavLink>
          </div>  
        </div>
        
      </div>
    )
  
}
export default Home;