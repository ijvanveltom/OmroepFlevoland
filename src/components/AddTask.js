import Modal from "./Modal"
import React, { useState } from 'react'
import '../styles/addTask.css'
import { db } from './firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import '../styles/App.css';

//import Mui components
//import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
//import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

//import icons

//import (custom) ReactQuill components
import Editor from './Editor.js';
import EditorWithTabs from './EditorWithTabs.js';
import 'react-quill/dist/quill.snow.css';

import Parser from 'html-react-parser';





function AddTask({ onClick, open }) {

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


  const [title, setTitle] = useState('')
  const [locatie, setLocatie] = useState('')
  const [contact, setContact] = useState('')
  const [text, setText] = useState('')
  const [textLeft, setTextLeft] = useState('')
  const [datetext, setDate] = useState('')
  const [time, setTime] = useState('')
  const [auteur, setAuteur] = useState('')
  const [notitie, setNotitie] = useState('')
  const [textRight, setTextRight] = useState('')


  /* function to add new task to firestore */
  const handleSubmit = async (e) => {

    e.preventDefault()
    try {

      await addDoc(collection(db, 'tasks'), {
        title: title,
        locatie: locatie,
        contact: contact,
        textLeft: textLeft,
        textRight: textRight,
        completed: false,
        created: Timestamp.now(),
        datetext: datetext,
        notitie: notitie,
        auteur: auteur,
        time: time
      })
      onClick()

    } catch (err) {
      alert(err)
    };



  }






  return (
    <Modal modalLable='Voeg Story test toe' onClick={onClick} open={open}>
      <Box sx={{ width: '100%', height: '100%', overflow: 'auto', borderTop: '1px solid #c4c4c4', }}>

        <form onSubmit={handleSubmit} className='addTask' name='addTask'>
          <div className="App">
            <Box sx={{ width: '100%', height: '93vh', overflow: 'hidden', display: 'flex', }}>
              <Box sx={{ width: '100%', height: '100%', overflow: 'hidden', borderTop: '1px solid #c4c4c4', }}>
                <Box sx={{ width: '100%', height: '200px', overflow: 'auto', textAlign: 'left', paddingLeft: '10px', paddingTop: '10px', borderLeft: '1px solid #c4c4c4', }}>

                  <TextField InputLabelProps={{ required: true }}
                    id="outlined-basic"
                    label="Titel"
                    variant="outlined"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    sx={{
                      width: '500px',
                      marginRight: '10px',
                      marginBottom: '10px',
                    }} />
                  <TextField type="date"
                    onChange={(e) => setDate(e.target.value)}
                    value={datetext}
                    InputLabelProps={{ shrink: true, required: true }}
                    defaultValue={materialDateInput}
                    id="outlined-basic" label="Datum"
                    variant="outlined" sx={{
                      width: '200px',
                      marginRight: '10px', marginBottom: '10px',
                    }} />
                  <TextField
                    type="time"
                    InputLabelProps={{ shrink: true }}
                    //defaultValue="03:00" id="outlined-basic" 
                    defaultValue={Timestamp.now()}
                    label="Tijd"
                    onChange={(e) => setTime(e.target.value)}
                    value={time}
                    variant="outlined"
                    sx={{ width: '200px', marginRight: '10px', marginBottom: '10px', }} />

                  <FormControl>
                    <InputLabel id="select-label">Office</InputLabel>
                    <Select
                      sx={{ width: '200px', marginRight: '10px', marginBottom: '10px', }}
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
                  <TextField id="outlined-basic"
                    defaultValue={userName}
                    onChange={(e) => setAuteur(e.target.value)}
                    value={auteur}
                    label="Auteur"
                    variant="outlined"
                    sx={{ width: '350px', marginRight: '10px', marginBottom: '10px', }} />
                  <TextField id="outlined-basic"
                    label="Locatie"
                    onChange={(e) => setLocatie(e.target.value)}
                    value={locatie}
                    variant="outlined"
                    sx={{
                      width: '200px',
                      marginRight: '10px',
                      marginBottom: '10px',
                    }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Contact"
                    onChange={(e) => setContact(e.target.value)}
                    value={contact}
                    variant="outlined"
                    sx={{
                      width: '560px',
                      marginRight: '10px',
                      marginBottom: '10px',
                    }}
                  />
                  <br></br>
                  <FormControl>
                    <InputLabel id="select-label">Status</InputLabel>
                    <Select
                      sx={{ width: '150px', marginRight: '10px', marginBottom: '10px', }}
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
                  <TextField id="outlined-basic"
                    label="Notitie"
                    onChange={(e) => setNotitie(e.target.value)}
                    value={notitie}
                    variant="outlined"
                    sx={{ width: '970px', marginRight: '10px', marginBottom: '10px', }} />
                </Box>

                <button type='submit'>Toevoegen</button>

                <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', height: 'calc(100% - 200px)', overflow: 'hidden', }}>
                  <Box sx={{ display: 'flex', width: '50%', height: '100%', overflow: 'auto', }}>
                    <Editor
                      placeholder={"Begin een verhaal..."}
                      theme="snow" value={textLeft}
                      onChange={(e) => setTextLeft(e)}
                      sx={{ width: '100%', height: '100%', }} />

                  </Box>
                  <Box sx={{ display: 'flex', width: '50%', height: '100%', overflow: 'auto', }}>
                    <EditorWithTabs
                      placeholder={"Begin een verhaal..."}
                      theme="snow" value={textRight}
                      onChange={(e) => setTextRight(e)}
                      sx={{ width: '100%', height: '100%', }} />

                  </Box>

                </Box>
              </Box>
            </Box>
          </div>
        </form>
      </Box>
    </Modal>
  )
}

export default AddTask
