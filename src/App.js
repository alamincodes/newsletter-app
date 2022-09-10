import "./App.css";
import Home from "./Components/Home";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Newsletter from "./Components/Newsletter";
import Notes from "./Components/Notes";
import CreateNote from "./Components/CreateNote";

function App() {
  return (
    <StrictMode>
      <div className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/createNote" element={<CreateNote/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </StrictMode>
  );
}

export default App;
