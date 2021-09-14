import React from 'react'
import reactDom from 'react-dom'
function getWidthOfText(txt, fontname, fontsize){

    //accesses a member c of the object on which the function is called on 
    if(getWidthOfText.c === undefined){
        getWidthOfText.c=document.createElement('canvas');
        getWidthOfText.ctx=getWidthOfText.c.getContext('2d'); // returns a drawing context on the canvas here 2d 
    }

    var fontspec = fontsize + ' ' + fontname;
    //console.log("font "+ fontspec +" "+getWidthOfText.ctx.font)

    if(getWidthOfText.ctx.font !== fontspec)
        getWidthOfText.ctx.font = fontspec;

    //console.log(getWidthOfText.ctx.measureText(txt))
    return getWidthOfText.ctx.measureText(txt).width; 
    //measureText() method returns an object that contains the width of the specified text, in pixels.
}

function HeadingHome(props){
    const style = {
        fontSize:"75px",
        width:"0"
    }

    //calculating width of the entire main heading which is heading1 + heading2
    style.width=getWidthOfText(props.mainHeading1, "Prata", style.fontSize) + 
    getWidthOfText(props.mainHeading2, "Princess Sofia", style.fontSize)
    
    return(
        <div className="heading-text">
            <div className="sub-heading">
              {props.subHeading}
            </div>
            <div className="main-heading" style={style}>
              <div className="main-heading-1">
                {props.mainHeading1}
              </div>
              <div className="main-heading-2">
                {props.mainHeading2}
              </div>
            </div>
          </div>
    )
}

export default HeadingHome