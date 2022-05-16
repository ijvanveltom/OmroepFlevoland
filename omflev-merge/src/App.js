import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import Stories from "./pages/stories"
import Draaiboeken from "./pages/draaiboeken"
import Media from "./pages/media"
import Home from "./pages/home"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/stories' element={<Stories/>} />
        <Route path='/draaiboeken' element={<Draaiboeken/>} />
        <Route path='/media' element={<Media/>} />
      </Routes>
    </Router>
  );
}

export default App;