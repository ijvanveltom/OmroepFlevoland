import Modal from "./Modal"
import '../styles/taskItem.css'

function TaskItem({onClick, open, title, locatie, contact, text}) {

  return (
    <Modal modalLable='Task Item' onClick={onClick} open={open}>
      <div className='taskItem'>
        <h2>{title}</h2>
        <p>{locatie}</p>
        <p>{contact}</p>
        <p>{text}</p>
      </div>
    </Modal>
  )
}

export default TaskItem