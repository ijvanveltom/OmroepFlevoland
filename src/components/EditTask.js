import Modal from "./Modal"
import React, { useState } from 'react'
import '../styles/addTask.css'
import { db } from './firebase'
import { doc, collection, updateDoc, Timestamp } from 'firebase/firestore'

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

const EditTask = (props) =>  {
  const [title, setTitle] = useState(props.title)
  const [locatie, setLocatie] = useState(props.locatie)
  const [contact, setContact] = useState(props.contact)
  const [textLeft, setTextLeft] = useState(props.textLeft)
  const [datetext, setDate] = useState(props.datetext)
  const [time, setTime] = useState(props.time)
  const [auteur, setAuteur] = useState(props.auteur)
  const [notitie, setNotitie] = useState(props.notitie)
  const [textRight, setTextRight] = useState(props.text)
  const [office, setOffice] = useState(props.office)

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault()
    const taskDocRef = doc(db, 'tasks', props.id)
    try{
      await updateDoc(taskDocRef, {
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
      props.onClick()
    } catch (err) {
      alert(err)
    }
    
  }

  return (
    <Modal onClick={props.onClick} open={props.open}>
      <Box sx={{ width: '100%', height: '100%', overflow: 'hidden', borderTop: '1px solid #c4c4c4', }}>
        <form onSubmit={handleUpdate} className='addTask' name='addTask'>
          <div className="App">
            <Box sx={{ width: '100%', height: 'calc(100% - 88px)', overflow: 'hidden', display: 'flex', }}>
              <Box sx={{ width: '100%', height: '100%', overflow: 'hidden', borderTop: '1px solid #c4c4c4', }}>
                <Box sx={{ width: '99%', height: '200px', overflow: 'auto', textAlign: 'left', paddingLeft: '10px', paddingTop: '10px', borderLeft: '1px solid #c4c4c4', }}>

                  <TextField InputLabelProps={{ required: true }}
                    id="outlined-basic"
                    label="Titel"
                    variant="outlined"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    sx={{
                      width: '50%',
                      marginRight: '10px',
                      marginBottom: '10px',
                    }} />
                  <TextField type="date"
                    onChange={(e) => setDate(e.target.value)}
                    value={datetext}
                    InputLabelProps={{ shrink: true, required: true }}
                    id="outlined-basic" 
                    label="Datum"
                    variant="outlined" 
                    sx={{
                      width: '15%',
                      marginRight: '10px', 
                      marginBottom: '10px',
                    }} />
                  <TextField
                    type="time"
                    InputLabelProps={{ shrink: true }}
                    label="Tijd"
                    onChange={(e) => setTime(e.target.value)}
                    value={time}
                    variant="outlined"
                    sx={{ 
                      width: '15%', 
                    marginRight: '10px', 
                    marginBottom: '10px', }} />

                  <FormControl
                   sx={{width: '18%'}}
                  >
                    <InputLabel id="select-label">Office</InputLabel>
                   
                    <Select
                      sx={{  
                      marginRight: '10px',
                       marginBottom: '10px', }}
                      labelId="Office-select-label"
                      id="Office-select"
                      value={office}
                      label="Office"
                      onChange={setOffice}
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
                    onChange={(e) => setAuteur(e.target.value)}
                    value={auteur}
                    label="Auteur"
                    variant="outlined"
                    sx={{ width: '40%', marginRight: '10px', marginBottom: '10px', }} />
                  <TextField id="outlined-basic"
                    label="Locatie"
                    onChange={(e) => setLocatie(e.target.value)}
                    value={locatie}
                    variant="outlined"
                    sx={{
                      width: '18%',
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
                      width: '40%',
                      marginRight: '10px',
                      marginBottom: '10px',
                    }}
                  />
                  <br></br>
                  <FormControl
                  sx={{width: '19%'}}
                  >
                    <InputLabel id="select-label">Status</InputLabel>
                    <Select
                      sx={{  marginRight: '10px', marginBottom: '10px', }}
                      labelId="status-select-label"
                      id="status-select"
                      value='10'
                      label="Status"
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
                    sx={{ width: '69%', marginRight: '10px', marginBottom: '10px', }} />
                  <button  className='klaar' type='submit'>Klaar</button>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', height: 'calc(100% - 200px)', overflow: 'hidden', }}>
                  <Box sx={{ display: 'flex', width: '50%', height: '100%', overflow: 'auto', }}>
                    <Editor
                      placeholder={"Begin een verhaal..."}
                      theme="snow" value={textLeft}
                      onChange={(e) => setTextLeft(e)}
                      sx={{ width: '100%', height: '100%' }} />
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

export default EditTask
