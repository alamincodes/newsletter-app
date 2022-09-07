import "./App.css";
import Home from "./Components/Home";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Components/Form";

function App() {
  return (
    <StrictMode>
      <div className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newsletter" element={<Form />} />
            {/* <Route path="/notes" element={<Notes />} /> */}
          </Routes>
          
        </BrowserRouter>
      </div>
    </StrictMode>
  );
}

export default App;
