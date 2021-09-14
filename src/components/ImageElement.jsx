import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/product.scss'

function ImageElement(props){

    //console.log("pattern ->"+props.patternsrc)
    const path=`/:${props.patternsrc}`
    //console.log("rasta "+path)
    return(
        <NavLink exact to={`/expanded/:${props.src}/:${props.patternsrc}`} className="gallery__link">
        {/* <a href="#" target="_blank" className="gallery__link"> */}
                <figure className="gallery__thumb">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/${props.src}.jpeg`} alt={props.caption}
                        className="gallery__image"/>
                    <figcaption className="gallery__caption">{props.caption}</figcaption>
                </figure>
        {/* </a> */}
        </NavLink>
    )
}

export default ImageElement