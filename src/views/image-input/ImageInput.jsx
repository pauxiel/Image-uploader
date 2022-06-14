import React from "react";
 import Button from '../../components/button/Button';
 import DragandDrop  from '../../components/drag-and-drop/DragandDrop';
 import Header from "../../components/header/Header";


function ImageInput() {

    return (
        <>
          <Header>
              <h2>Upload Image</h2>
              <p>The file should be jpg</p>
          </Header>
         <DragandDrop/>
          <Button className = "btn">Choose File</Button>
          
          
        </>
    )

}

export default ImageInput;