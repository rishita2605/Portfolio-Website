import React from 'react';

import '../styles/product.scss'
import GalleryColumn from './GalleryColumn';

/*NOTE: Declare/change ImageSrcs Arrays in both Product.jsx and GalleryColumn.jsx
In Product.jsx the lenght of array is used to calculat start of each GalleryColumn */
function Product(){
    
    const numOfImages=12 //<----------- ENTER NUMBER OF IMAGES HERE!

    let numPicInCol=Math.floor(numOfImages/4)//dividing number of pictures equally in each column
    return(
        <div className="product">
            <div className="product-main-content" >
                <div className="gallery">
                    <GalleryColumn key={1} start={numPicInCol*0} numImages={numOfImages}/>
                    <GalleryColumn key={2} start={numPicInCol*1} numImages={numOfImages}/>
                    <GalleryColumn key={3} start={numPicInCol*2} numImages={numOfImages}/>
                    <GalleryColumn key={4} start={numPicInCol*3} numImages={numOfImages}/>
                </div>
            </div>
        </div>
    )
}

export default Product