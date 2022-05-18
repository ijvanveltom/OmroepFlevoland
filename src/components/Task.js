import '../styles/task.css'
import {useState} from 'react'
import TaskItem from './TaskItem'
import EditTask from './EditTask'
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from './firebase'
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link } from 'react-router-dom';

function Task({id, title, locatie, auteur, contact, text, textLeft, completed}) {

  const [checked, setChecked] = useState(completed)
  const [open, setOpen] = useState({edit:false, view:false})
  const [openAddModal, setOpenAddModal] = useState(false)

  const handleClose = () => {
    setOpen({edit:false, view:false})
  }

  /* function to update firestore */
  const handleChange = async () => {
    const taskDocRef = doc(db, 'tasks', id)
    try{
      await updateDoc(taskDocRef, {
        completed: checked
      })
    } catch (err) {
      alert(err)
    }
  }

  /* function to delete a document from firstore */ 
  const handleDelete = async () => {
    const taskDocRef = doc(db, 'tasks', id)
    try{
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }
  }
 
  return (
     
    <div className={`task ${checked && 'task--borderColor'}`}>
      
      <div>
                    <Link className='aList' to="/#"><DehazeIcon /></Link>
      </div>
      <div className='task__body'>
        <h2>{title}</h2>
        <p>{auteur}</p>
        {/*<div className='task__buttons'>
          <div className='task__deleteNedit'>
            <button 
              className='task__editButton' 
              onClick={() => setOpen({...open, edit : true})}>
              Aanpassen
            </button>
            <button className='task__deleteButton' onClick={handleDelete}>Verwijderen</button>
          </div>
          <button 
            onClick={() => setOpen({...open, view: true})}>
            Open
          </button>
  </div> */}
      </div>

      {open.view &&
        <TaskItem 
        onClick={handleClose} 
          title={title} 
          locatie={locatie}
          contact={contact}
          text={text} 
          textLeft={textLeft}
          open={open.view} />
      }

      {open.edit &&
        <EditTask 
        onClick={handleClose} 
          toEditTitle={title} 
          toEditLocatie={locatie} 
          toEditContact={contact} 
          toEditText={text} 
          open={open.edit}
          id={id} />
      }

    </div>
  )
}

export default Task