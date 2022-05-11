import '../styles/task.css'
import {useState} from 'react'
import TaskItem from '../components/TaskItem'
import EditTask from './EditTask'
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from '../components/firebase'

function Task({id, title, locatie, contact, text, completed}) {

  const [checked, setChecked] = useState(completed)
  const [open, setOpen] = useState({edit:false, view:false})

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
        <input 
          id={`checkbox-${id}`} 
          className='checkbox-custom'
          name="checkbox" 
          checked={checked}
          onChange={handleChange}
          type="checkbox" />
        <label 
          htmlFor={`checkbox-${id}`} 
          className="checkbox-custom-label" 
          onClick={() => setChecked(!checked)} ></label>
      </div>
      <div className='task__body'>
        <h2>{title}</h2>
        <p>{locatie}</p>
        <p>{contact}</p>
        <p>{text}</p>
        <div className='task__buttons'>
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
        </div>
      </div>

      {open.view &&
        <TaskItem 
        onClick={handleClose} 
          title={title} 
          locatie={locatie}
          contact={contact}
          text={text} 
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