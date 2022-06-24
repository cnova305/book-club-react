import React, { useState } from 'react';

import './BookCardForm.css'

import { Book } from '../../types/types';

import { database } from '../../config/firebase';
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const BookCardForm = () => {

    //Setting Up New book

    const [newbook, setNewbook] = useState({
        title: '',
        author: '',
        genre: '',
        year: '',
        user: {
            name: 'nova',
            uid: 'iUp8K7fsVDanijOetuv38eGCVoD2',
        }
    })

    // Setting Book Update Function

    const updateBook = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewbook({
            ...newbook,
            [e.target.name]: e.target.value,
        })
    }

    // Submitting New Book

    const submitBook = async (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(newbook)
        await addDoc(collection(database, 'books'), {
            ...newbook
        })
    }
  return (
    <div className='bookcardForm'>
      <div className='bookcardFormImage'>
        book card
      </div>
      <div className='bookcardFormDetails'>
        <form onSubmit={submitBook}>
            <input name='title' onChange={updateBook} type='text' placeholder='Title'/>
            <input name='author' onChange={updateBook} type='text' placeholder='Author'/>
            <input name='year' onChange={updateBook} type='text' placeholder='Year'/>
            <input name='genre' onChange={updateBook} type='text' placeholder='Genre'/>
            <input name='description' onChange={updateBook} type='text' placeholder='Description'/>
            <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default BookCardForm