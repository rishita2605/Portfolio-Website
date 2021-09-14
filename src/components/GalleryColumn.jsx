import React from 'react';
import '../styles/product.scss'
import ImageElement from './ImageElement';

//use {`${process.env.PUBLIC_URL}/assets/images/pattern-1.jpeg`} instead of using import statements
// import pattern1 from '../images/pattern-1.jpeg'
// import pattern2 from '../images/pattern-2.jpeg'


const routes = Array
  .from({ length: 2 }) // create array of 2 elements
  .map((elem, i) => require(`../images/pattern-${i + 1}.jpeg`)) // map each element to an imported file using the index


function GalleryColumn(props){
    //console.log("gallery "+props.total)
    const imageColumn=[]
    let numPicInCol=0
    
    const imageCaptions=[
        "Pastel Colour Floral Pattern",
        "Joe Mo",
        "Joe Mor",
        "Joe Mort",
        "Joe Morte",
        "Joe Mortel",
        "Joe Mortell",
        "Joe Mortello",
        "Joe Mortellop",
        "Joe Mortellopi",
        "Joe Mortellopiu",
        "Joe Mortellopius"
    ]

    


    numPicInCol=Math.floor(props.numImages/4)//dividing number of pictures equally in each column
    //console.log("num images"+props.numImages)
    
    for(let i=0; i<numPicInCol; i++){
        let propName="src"+i;
        //imageColumn[i]=<ImageElement src={imageSrcs[props.start+i]} caption={imageCaptions[props.start+i]} patternsrc={`pattern-${i+1}`}/>
        imageColumn[i]=<ImageElement src={`image-${props.start+i}`} caption={imageCaptions[props.start+i]} patternsrc={`pattern-${props.start+i}`}/>
    }

    return(
        <div className="gallery__column">
            {imageColumn}
        </div>
    )
}

export default GalleryColumn