import '../styles/task.css'
import {useState} from 'react'
import TaskItem from './TaskItem'
import EditTask from './EditTask'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DragHandle from '@mui/icons-material/DragHandle';
import DeleteForever from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from './firebase'

const Task = (props) => {
  const [checked, setChecked] = useState(props.completed)
  const [open, setOpen] = useState({edit:false, view:false})

  const handleClose = () => {
    setOpen({edit:false, view:false})
  }

  /* function to update firestore */
  const handleChange = async () => {
    const taskDocRef = doc(db, 'tasks', props.id)
    setChecked(this.event.target.checked);
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
    const taskDocRef = doc(db, 'tasks', props.id)
    try{
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }
  }

  const truncate = (str) => {
    if (str.length <= 60) { return str; }
    const subString = str.substr(0, 60-1); // the original check
    return (true ? subString.substr(0, subString.lastIndexOf(" ")) : subString) + "...";
  }

  const secondaryText = props.locatie + ": " + props.textLeft.replace(/<[^>]*>?/gm, '');;

  return (
    <ListItem disablePadding onClick={props.onClick}>
      <ListItemButton>
        <ListItemIcon>
          <DragHandle sx={{color:'#bf2133'}}/>
        </ListItemIcon>
        <ListItemText primary={truncate(props.title)} secondary={truncate(secondaryText)} sx={{minWidth:'50%',}}/>
        <Button className='task__deleteButton' onClick={handleDelete} sx={{position:'absolute', bottom:'5px', right:'15px', color:'#bf2133'}}><DeleteForever/></Button>
      </ListItemButton>
    </ListItem>
  )
}

export default Task