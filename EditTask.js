import Modal from "./Modal"
import {useState} from 'react'
import './editTask.css'
import { doc, updateDoc } from "firebase/firestore";
import {db} from './firebase'

function EditTask({open, onClick, toEditTitle, toEditLocatie, toEditContact, toEditText, id}) {

  const [title, setTitle] = useState(toEditTitle)
  const [locatie, setLocatie] = useState(toEditLocatie)
  const [contact, setContact] = useState(toEditContact)
  const [text, setText] = useState(toEditText)

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault()
    const taskDocRef = doc(db, 'tasks', id)
    try{
      await updateDoc(taskDocRef, {
        title: title,
        locatie: locatie,
        contact: contact,
        text: text
      })
      onClick()
    } catch (err) {
      alert(err)
    }
    
  }

  return (
    <Modal modalLable='Edit Task' onClick={onClick} open={open}>
      <form onSubmit={handleUpdate} className='editTask'>
      <input type='text' name='title' onChange={(e) => setTitle(e.target.value.toUpperCase())} value={title}/>
      <input type='text' name='locatie' onChange={(e) => setLocatie(e.target.value.toUpperCase())} value={locatie}/>
      <input type='text' name='contact' onChange={(e) => setContact(e.target.value.toUpperCase())} value={contact}/>
        <textarea onChange={(e) => setText(e.target.value)} value={text}></textarea>
        <button type='submit'>Edit</button>
      </form> 
    </Modal>
  )
}

export default EditTask
