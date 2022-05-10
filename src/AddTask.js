import Modal from "./Modal"
import {useState} from 'react'
import './addTask.css'
import {db} from './firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

function AddTask({onClose, open}) {

  const [title, setTitle] = useState('')
  const [locatie, setLocatie] = useState('')
  const [contact, setContact] = useState('')
  const [text, setText] = useState('')

  /* function to add new task to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'tasks'), {
        title: title,
        locatie: locatie, 
        contact: contact, 
        text: text,
        completed: false,
        created: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Modal modalLable='Voeg Story toe' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='addTask' name='addTask'>
        <input 
          type='text' 
          name='title' 
          onChange={(e) => setTitle(e.target.value)} 
          value={title}
          placeholder='vul in titel'/>
          <input 
          type='text' 
          name='locatie' 
          onChange={(e) => setLocatie(e.target.value)} 
          value={locatie}
          placeholder='vul in locatie'/>
          <input 
          type='text' 
          name='contact' 
          onChange={(e) => setContact(e.target.value)} 
          value={contact}
          placeholder='vul in contact'/>
        <textarea 
          onChange={(e) => setText(e.target.value)}
          placeholder='vul in story text'
          value={text}></textarea>
        <button type='submit'>Klaar</button>
      </form> 
    </Modal>
  )
}

export default AddTask
