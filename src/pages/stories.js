//import React, { useState } from "react";
import '../styles/App.css';
import {db} from '../components/firebase'
import {collection, addDoc, Timestamp, query, orderBy, onSnapshot} from 'firebase/firestore'
import React, {useState, useEffect} from 'react'
import AddTask from '../components/AddTask'
import Task from '../components/Task'
import EditTask from '../components/EditTask'

import Box from '@mui/material/Box';
import SideBarDrawer from '../components/SideBarDrawer';

import 'react-quill/dist/quill.snow.css';

const StoryPage = () =>{
  //Metadata values
  const [status, setStatus] = React.useState('10');
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const [Office, setOffice] = React.useState("10");
  const handleOfficeChange = (event) => {
    setOffice(event.target.value);
  };

    //data values
  const [title, setTitle] = useState('')

  const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    await addDoc(collection(db, 'tasks'), {
      title: title,
    })
  // onClose()
  } catch (err) {
    alert(err)
  }
  }

  //taskmanager.js
  const [openAddModal, setOpenAddModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [tasks, setTasks] = useState([])
  const [selectForEdit, setSelectForEdit] = useState('')

  /* function to get all tasks from firestore in realtime */ 
  useEffect(() => {
  const taskColRef = query(collection(db, 'tasks'), orderBy('created', 'desc'))
  onSnapshot(taskColRef, (snapshot) => {
    setTasks(snapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data()
    })))
  })
  },[])

  const clickFix = (task) =>{
    setOpenEditModal(false);
    setOpenAddModal(false);
    setOpenEditModal(true);
    setSelectForEdit(task);
  }

  return (
    <Box sx={{width:'100%', height: '100%', overflow: 'hidden', display: 'flex',}}>
    <Box sx={{width:'80px', height: '100%', overflow: 'auto', borderTop: '1px solid #c4c4c4', borderRight: '1px solid #c4c4c4',}}>
      <SideBarDrawer/>
    </Box>
    <Box sx={{width:'20%', height: '100%', overflow: 'auto', borderTop: '1px solid #c4c4c4', paddingTop:'15px'}}>
    <div className='taskManager'>
      <div className='taskManager__container'>
      <button className='addStory' onClick={() => {setOpenAddModal(true); setOpenEditModal(false)}}>+&nbsp;Nieuwe Story</button>
        <div className='taskManager__tasks' style={{marginTop:'15px'}}>
          {tasks.map((task) => (
            <Task
              id={task.id}
              key={task.id}
              title= {task.data.title}
              locatie= {task.data.locatie} 
              contact= {task.data.contact} 
              textLeft= {task.data.textLeft}
              textRight= {task.data.textRight}
              completed= {task.data.completed}
              datetext = {task.data.datetext}
              office = {task.data.Office}
              status = {task.data.status}
              notitie ={task.data.notitie}
              auteur = {task.data.auteur}
              time = {task.data.time}
              onClick={() => { clickFix(task) }}
            />
          ))}
        </div>
      </div>
    </div>
    </Box>
    
    <div className='taskManager'>
      <div className='taskManager__container'>
        <div className='taskManager__tasks'>
        </div>
      </div>
      <Box sx={{width:'100%', height: '100%', overflow: 'hidden', borderTop: '1px solid #c4c4c4',}}>
        {openAddModal &&
          <AddTask PaperProps = {{width:'76%', height: '100%', overflow: 'auto', borderTop: '1px solid #c4c4c4',}} onClick={() => setOpenAddModal(false)} open={openAddModal}/>
        }
        {openEditModal &&
          <EditTask 
          id={selectForEdit.id}
          title= {selectForEdit.data.title}
          locatie= {selectForEdit.data.locatie} 
          contact= {selectForEdit.data.contact} 
          textLeft= {selectForEdit.data.textLeft}
          textRight= {selectForEdit.data.textRight}
          completed= {selectForEdit.data.completed}
          datetext = {selectForEdit.data.datetext}
          office = {selectForEdit.data.Office}
          status = {selectForEdit.data.status}
          notitie ={selectForEdit.data.notitie}
          auteur = {selectForEdit.data.auteur}
          time = {selectForEdit.data.time}
          PaperProps = {{width:'76%', height: '100%', overflow: 'auto', borderTop: '1px solid #c4c4c4',}} onClick={() => setOpenEditModal(false)} open={openEditModal}/>
        }
      </Box> 
    </div>
    </Box>
  );
}
export default StoryPage;