// import { useState } from 'react'
// import logo from './logo.svg'
import "./App.scss";
import Container from "./layout/container/Container";
import ImageInput from "./views/image-input/ImageInput";
// import DragandDrop from "./components/drag-and-drop/DragandDrop";

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Container>
          <ImageInput/>
           {/* <DragandDrop/> */}
        </Container>
    </div>
  );
}

export default App;
