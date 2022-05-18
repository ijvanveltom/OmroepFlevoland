//import React, { useState } from "react";
import './styles/App.css';
import React from 'react'

import 'react-quill/dist/quill.snow.css';

//test
console.log('test')

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.js"
import Stories from "./pages/stories.js"
import Draaiboeken from "./pages/draaiboeken.js"
import Media from "./pages/media.js"
import Home from "./pages/home.js"
//change
console.log('change because github')
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/draaiboeken' element={<Draaiboeken />} />
          <Route path='/media' element={<Media />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
