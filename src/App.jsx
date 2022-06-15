// import { useState } from 'react'
// import logo from './logo.svg'
import "./App.scss";
import Container from "./layout/container/Container";
import ImageInput from "./views/image-input/ImageInput";
import Loading from './views/loading/Loading';
import ImageUploaded from './views/image-uploaded/ImageUploaded';
// import DragandDrop from "./components/drag-and-drop/DragandDrop";

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Container>
          {/* <ImageInput/> */}
           {/* <DragandDrop/> */}
           <Loading/>
           {/* <ImageUploaded/> */}
        </Container>
    </div>
  );
}

export default App;
