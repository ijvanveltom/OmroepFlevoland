//import React, { useState } from "react";
import './styles/App.css';
import {db} from './components/firebase'
import {collection, addDoc, Timestamp, query, orderBy, onSnapshot} from 'firebase/firestore'
import Modal from "./components/Modal"
import React, {useState, useEffect} from 'react'
import AddTask from './components/AddTask'
import Task from './components/Task'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import SideBarDrawer from './components/SideBarDrawer';

import ReactQuill from 'react-quill';
import Editor from './components/Editor.js';
import EditorWithTabs from './components/EditorWithTabs.js';
import 'react-quill/dist/quill.snow.css';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.js"
import Stories from "./pages/stories.js"
import Draaiboeken from "./pages/draaiboeken.js"
import Media from "./pages/media.js"
import Home from "./pages/home.js"

function App(onClick, open) {
 


  return (
<div className="App">
<Router>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/stories' element={<Stories/>} />
        <Route path='/draaiboeken' element={<Draaiboeken/>} />
        <Route path='/media' element={<Media/>} />
      </Routes>
    </Router>

    
  </div> 
  
  );
}

export default App;
