import React from "react";
import "./drag-drop.scss";
import logo from "../../assets/images/logo.svg";

function DragandDrop(props) {
  const handleonDrop = (e) => {
    e.preventDefault();
  };

  const handleonDrag = (e) => {
    e.preventDefault();
  };

  const handleonDragLeave = (e) => {
    e.preventDefault();
  };

  const handleonDragEnter = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="dropzone"
      onDrop={handleonDrop}
      onDrag={handleonDrag}
      onDragLeave={handleonDragLeave}
      onDragEnter={handleonDragEnter}
    >
      upload your image box with dash lined and iamge inside
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
