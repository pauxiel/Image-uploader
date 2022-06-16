import { useState } from "react";
import React from "react";
// import logo from './logo.svg'
import "./App.scss";
import Container from "./layout/container/Container";
import ImageInput from "./views/image-input/ImageInput";
import Loading from "./views/loading/Loading";
import ImageUploaded from "./views/image-uploaded/ImageUploaded";
// import DragandDrop from "./components/drag-and-drop/DragandDrop";
import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function App() {
  // const [count, setCount] = useState(0)
  const [state, setState] = useState("choosing");
  const [imageUrl, setImageUrl] = useState("");

  const uploadImage = async (file) => {
    setState("uploading");
    try {
      const imageRef = ref(storage, `images/${file.name + v4()}`);
      uploadBytes(imageRef, file).then((snapshot) => {
        alert("file uploaded");
        // console.log(getDownloadURL(snapshot.ref));
        getDownloadURL(snapshot.ref).then((imageUrl) => {
          console.log(imageUrl);
          setImageUrl(imageUrl);
          setState('success');
        });
      });
    } catch (e) {
       console.error(e);
       setImageUrl('');
       setState('choosing')

    }
  };


  const renderComponent = () => {
    switch (state) {
      case 'choosing':
        return <ImageInput uploadImage={uploadImage} />
      case 'uploading':
        return <Loading/>
      case 'success':
         return <ImageUploaded imageUrl = {imageUrl}/>
        case 'error':
        return <p>Error</p>

       
    }
  }

  return (
    <div className="App">
      <Container>
        {renderComponent()}
      </Container>
    </div>
  );
}

export default App;
