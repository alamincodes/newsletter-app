import "./App.css";
import Home from "./Components/Home";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Newsletter from "./Components/Newsletter";
import Notes from "./Components/Notes";
import CreateNote from "./Components/CreateNote";
import Team from "./Components/Team";

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
            <Route path="/team" element={<Team/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </StrictMode>
  );
}

export default App;
