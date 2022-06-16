import React from "react";
import './image-uploaded.scss'
 import Header from "../../components/header/Header";
 



function ImageUploaded({imageUrl}) {


    function onClick () {
        navigator.clipboard.writeText(imageUrl)
    }

    return (
        <>
          <Header>
              <h2>Uploaded Succesfully</h2>
          </Header>

           <div className="image__container">
               <img src= {imageUrl} alt=""/>
           </div>
         
          <div>
               <div>{imageUrl}</div>
               <button onClick = {onClick}>Copy Link</button>
          </div>
          
          
        </>
    )

}

export default ImageUploaded;