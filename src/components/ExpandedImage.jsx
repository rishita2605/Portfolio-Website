import React from 'react';
import '../styles/expanded-image.scss'
import ReactRough, { Circle, Rectangle } from 'react-rough';
import { useParams } from 'react-router-dom';

function ExpandedImage(props){
    //console.log("expanded text->"+props.text)
    //console.log("match -> "+String(props.match.params))
    const { text, match: { params } } = props;
    const { name }  = params;
    let { src, pattern } = useParams();
    src=src.replace(":","")
    pattern=pattern.replace(":","")
    //console.log("naam ",src,pattern)
    return(
        <div className="expanded-image">
            {/* <div className="expanded-image-main-content">

            </div> */}
            <div className="main-img-parent">
                    <div className="main-img" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/assets/images/${src}.jpeg)`}}>
                        
                    </div>
                    {/* <img className="main-img" src={`${process.env.PUBLIC_URL}/assets/images/${src}.jpeg`}/> */}
            </div>
            <div className="pattern">
                <div className="pattern-heading">
                    Pattern
                </div>
                <div className="fake-div">
                    
                </div>
                <div className="pattern-img-parent">
                    <div className="pattern-img" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/assets/images/${pattern}.jpeg)`}}>

                    </div>
                    {/* <img className="pattern-img" src={`${process.env.PUBLIC_URL}/assets/images/${pattern}.jpeg`}/> */}
                </div>
            </div>
            
        </div>
    )
}

export default ExpandedImage