import React from "react";
 import ButtonInput from '../../components/button-input/ButtonInput';
 import DragandDrop  from '../../components/drag-and-drop/DragandDrop';
 import Header from "../../components/header/Header";




 function handleImageUpload(evt) {
    uploadImage(evt.target.files[0])
  }


function ImageInput({ uploadImage }) {

    return (
        <>
          <Header>
              <h2>Upload Image</h2>
              <p>The file should be jpg</p>
          </Header>
         <DragandDrop uploadImage = { uploadImage }/>
          <ButtonInput handleImageUpload = {handleImageUpload}/>
          
          
        </>
    )

}

export default ImageInput;