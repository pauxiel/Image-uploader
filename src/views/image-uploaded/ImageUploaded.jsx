import React from "react";

 import Header from "../../components/header/Header";


function ImageUploaded() {

    return (
        <>
          <Header>
              <h2>Uploaded Succesfully</h2>
          </Header>

           <div className="image__container">
               <img src="" alt=""/>
           </div>
         
          <Button className = "btn">Copy Link</Button>
          
          
        </>
    )

}

export default ImageUploaded;