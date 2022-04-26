console.log('Hello world from index.js')

//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, onSnapshot, 
  addDoc, deleteDoc, doc,
  query, where,
  orderBy, serverTimestamp, 
  getDoc, updateDoc
} from 'firebase/firestore'

/*const firebaseConfig = {
  apiKey: "AIzaSyDmXgb_58lO7aK_ujN37pGlNxzWGEU0YpI",
  authDomain: "fb9-sandbox.firebaseapp.com",
  projectId: "fb9-sandbox",
  storageBucket: "fb9-sandbox.appspot.com",
  messagingSenderId: "867529587246",
  appId: "1:867529587246:web:dc754ab7840c737f47bdbf"
}*/

const firebaseConfig = {
  apiKey: "AIzaSyAtypkuR8hGrI0Woke-UAdbP7dsV9ZUqGc",
  authDomain: "omroep-flevoland-1.firebaseapp.com",
  projectId: "omroep-flevoland-1",
  storageBucket: "omroep-flevoland-1.appspot.com",
  messagingSenderId: "597794115445",
  appId: "1:597794115445:web:14de0cba447ece0dc70d3c"
}

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'Story')

// queries
//const q = query(colRef, where("author", "==", "Ron Groenink"), orderBy('createdAt'))
const q = query(colRef, orderBy('createdAt'))

// real time collection data
/*getDocs(colRef)
  .then(snapshot => {
     console.log(snapshot.docs)
    let Story = []
    snapshot.docs.forEach(doc => {
      Story.push({ ...doc.data(), id: doc.id })
    })
    console.log(Story)
  })
  .catch(err => {
    console.log(err.message)
  })

  onSnapshot(colRef, (snapshot) => {
  */

  onSnapshot(q, (snapshot) => {
    console.log(snapshot.docs)
    let Story = []
    snapshot.docs.forEach(doc => {
      Story.push({ ...doc.data(), id: doc.id })
    })
    console.log(Story)

  })


  // adding docs
const addStoryForm = document.querySelector('.add')
addStoryForm.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(colRef, {
    title: addStoryForm.title.value,
    author: addStoryForm.author.value,
    createdAt: serverTimestamp()
  })
  .then(() => {
    addStoryForm.reset()
  })
})

// deleting docs
const deleteStoryForm = document.querySelector('.delete')
deleteStoryForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const docRef = doc(db, 'Story', deleteStoryForm.id.value)

  deleteDoc(docRef)
    .then(() => {
      deleteStoryForm.reset()
    })
})

//get a single document 
const docRef = doc(db, 'Story', 'TbIsmfbCZJVdhjcYEZg8')

 //getDoc(docRef)
 //  .then(doc => {
 //    console.log(doc.data(), doc.id)
 //  })

onSnapshot(docRef, (doc) => {
  console.log(doc.data(), doc.id)
})

// updating a document
const updateForm = document.querySelector('.update')
updateForm.addEventListener('submit', (e) => {
  e.preventDefault()

  let docRef = doc(db, 'Story', updateForm.id.value)

  updateDoc(docRef, {
    title: 'updated title'
  })
  .then(() => {
    updateForm.reset()
  })
})