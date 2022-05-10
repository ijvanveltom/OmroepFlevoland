import React, { useState } from "react";
import './App.css';

//import Mui components
//import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

//import custom Mui components
import SideBarDrawer from './components/SideBarDrawer.js';

//import icons

//import (custom) ReactQuill components
import Editor from './components/Editor.js';
import EditorWithTabs from './components/EditorWithTabs.js';
import 'react-quill/dist/quill.snow.css';

function App() {
  //Metadata values
  const [status, setStatus] = React.useState('10');
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const [Office, setOffice] = React.useState("10");
  const handleOfficeChange = (event) => {
    setOffice(event.target.value);
  };

  const dateNow = new Date(); // Creating a new date object with the current date and time
  const year = dateNow.getFullYear();
  const monthWithOffset = dateNow.getUTCMonth() + 1; // January is 0 by default in JS. Offsetting +1 to fix date for calendar.
  const month =
    monthWithOffset.toString().length < 2 // Checking if month is < 10 and pre-prending 0 to adjust for date input.
      ? `0${monthWithOffset}`
      : monthWithOffset;
  const date =
    dateNow.getUTCDate().toString().length < 2 // Checking if date is < 10 and pre-prending 0 if not to adjust for date input.
      ? `0${dateNow.getUTCDate()}`
      : dateNow.getUTCDate();
  const materialDateInput = `${year}-${month}-${date}`; // combining to format for defaultValue or value attribute of material <TextField>

  var userName = "Julie Olree";

  //Editor values
  const [valueLeft, setValueLeft] = useState('');
  const [valueRight, setValueRight] = useState('');

  //Main page
  return (
    <div className="App">
      <Toolbar position="absolute" sx={{height: '7vh', overflow: 'hidden', backgroundColor: 'primary.main', color: 'white',}}>
        <h1>Dashboard </h1>
      </Toolbar>
      <Box sx={{width:'100%', height: '93vh', overflow: 'hidden', display: 'flex',}}>
        <Box sx={{width:'4%', height: '100%', overflow: 'auto', borderTop: '1px solid #c4c4c4', borderRight: '1px solid #c4c4c4',}}>
          <SideBarDrawer/>
        </Box>
        <Box sx={{width:'20%', height: '100%', overflow: 'auto', borderTop: '1px solid #c4c4c4',}}>
          Hello World
        </Box>
        <Box sx={{width:'76%', height: '100%', overflow: 'hidden', borderTop: '1px solid #c4c4c4',}}>
          <Box sx={{width:'100%', height: '200px', overflow: 'auto', textAlign: 'left', paddingLeft: '10px', paddingTop: '10px', borderLeft: '1px solid #c4c4c4',}}>
              <TextField InputLabelProps={{required: true}} id="outlined-basic" label="Titel" variant="outlined" sx={{width:'500px', marginRight: '10px', marginBottom: '10px',}}/>
              <TextField type="date" InputLabelProps={{shrink: true, required: true}} defaultValue={materialDateInput } id="outlined-basic" label="Datum" variant="outlined" sx={{width:'200px', marginRight: '10px', marginBottom: '10px',}}/>
              <TextField type="time" InputLabelProps={{shrink: true}} defaultValue="03:00" id="outlined-basic" label="Tijd" variant="outlined" sx={{width:'200px', marginRight: '10px', marginBottom: '10px',}}/>
              <FormControl>
                <InputLabel id="select-label">Office</InputLabel>
                <Select
                  sx={{width:'200px', marginRight: '10px', marginBottom: '10px',}}
                  labelId="Office-select-label"
                  id="Office-select"
                  value={Office}
                  label="Office"
                  onChange={handleOfficeChange}
                >
                  <MenuItem value={10}>Nieuws</MenuItem>
                  <MenuItem value={20}>Red Almere</MenuItem>
                  <MenuItem value={30}>Sport</MenuItem>
                  <MenuItem value={40}>Story</MenuItem>
                  <MenuItem value={50}>Varia</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <TextField id="outlined-basic" defaultValue={userName} label="Auteur" variant="outlined" sx={{width:'350px', marginRight: '10px', marginBottom: '10px',}}/>
              <TextField id="outlined-basic" label="Locatie" variant="outlined" sx={{width:'200px', marginRight: '10px', marginBottom: '10px',}}/>
              <TextField id="outlined-basic" label="Contact" variant="outlined" sx={{width:'560px', marginRight: '10px', marginBottom: '10px',}}/>
              <br></br>
              <FormControl>
                <InputLabel id="select-label">Status</InputLabel>
                <Select
                  sx={{width:'150px', marginRight: '10px', marginBottom: '10px',}}
                  labelId="status-select-label"
                  id="status-select"
                  value={status}
                  label="Status"
                  onChange={handleStatusChange}
                >
                  <MenuItem value={10}>Uitzoeken</MenuItem>
                  <MenuItem value={20}>Bellen</MenuItem>
                  <MenuItem value={30}>Meenemen</MenuItem>
                  <MenuItem value={40}>Productie</MenuItem>
                  <MenuItem value={50}>Niet</MenuItem>
                </Select>
              </FormControl>
              <TextField id="outlined-basic" label="Notitie" variant="outlined" sx={{width:'970px', marginRight: '10px', marginBottom: '10px',}}/>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'row', width:'100%', height: 'calc(100% - 200px)', overflow: 'hidden',}}>
            <Box sx={{display: 'flex', width:'50%', height: '100%', overflow: 'auto',}}>
              <Editor placeholder={"Begin een verhaal..."} theme="snow" value={valueLeft} onChange={setValueLeft} sx={{width: '100%', height: '100%',}}/>
            </Box>
            <Box sx={{display: 'flex', width:'50%', height: '100%', overflow: 'auto',}}>
              <EditorWithTabs placeholder={"Begin een verhaal..."} theme="snow" value={valueRight} onChange={setValueRight} sx={{width: '100%', height: '100%',}}/>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;