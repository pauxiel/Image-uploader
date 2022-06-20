import React from "react";
import { useState } from "react";
import "./drag-drop.scss";
import logo from "../../assets/images/logo.svg";

function DragandDrop({ uploadImage }) {
  const [borderColor, setBorderColor] = useState('#2f80ed')
  const handleonDrop = (e) => {
    e.preventDefault();
    const imageFile = e.dataTransfer.files
    console.log('dropped')
    uploadImage(imageFile['0'])
    
    // console.log('dropped')
  };

  function handleOnDragOver(e) {
    e.preventDefault()
    setBorderColor('green')
  }

  const handleonDrag = (e) => {
    e.preventDefault();
  };

  const handleonDragLeave = (e) => {
    e.preventDefault();
  
  };

  const handleonDragEnter = (e) => {
    e.preventDefault();
    setBorderColor('green')
  };
  return (
    <div
      className="dropzone"
      onDragOver = {handleOnDragOver}
      onDrop={handleonDrop}
      onDrag={handleonDrag}
      onDragLeave={handleonDragLeave}
      onDragEnter={handleonDragEnter}
      style={{ border: `1px dashed ${borderColor}` }}
    >
     
      <div className="dropzone__logo">
        <img src={logo} height="150" alt="" />
      </div>
      <div className="dropzone__text">
        <p>Drag &amp; Drop your image here</p>
      </div>
    </div>
  );
}

export default DragandDrop;
