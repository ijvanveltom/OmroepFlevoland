import * as React from "react";
import Box from '@mui/material/Box';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AppBar from '@mui/material/AppBar';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import Stories from "./pages/stories"
import Draaiboeken from "./pages/draaiboeken"
import Media from "./pages/media"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/stories' element={<Stories/>} />
        <Route path='/draaiboeken' element={<Draaiboeken/>} />
        <Route path='/media' element={<Media/>} />
      </Routes>
    </Router>
  );
}

export default App;