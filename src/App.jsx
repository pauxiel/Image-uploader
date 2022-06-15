import { useState } from 'react'
import React from 'react';
// import logo from './logo.svg'
import "./App.scss";
import Container from "./layout/container/Container";
import ImageInput from "./views/image-input/ImageInput";
import Loading from './views/loading/Loading';
import ImageUploaded from './views/image-uploaded/ImageUploaded';
// import DragandDrop from "./components/drag-and-drop/DragandDrop";
import { storage } from './firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

function App() {
  // const [count, setCount] = useState(0)
  const [state, setState] = useState('choosing');
  const [imageUrl, setImageUrl] = useState('');

  const uploadImage =async(file) => {
    setState('uploading');
           try {
              const imageRef = ref(storage, `images/${file.name + v4()}`)
              uploadBytes(imageRef, file).then(() => {
                alert("image uploaded")
              })
           } catch {

           }
  }

  return (
    <div className="App">
      <Container>
          <ImageInput uploadImage = {uploadImage}/>
           {/* <DragandDrop/> */}
           {/* <Loading/> */}
           {/* <ImageUploaded/> */}
        </Container>
    </div>
  );
}

export default App;
