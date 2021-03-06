import React, { useState } from 'react';

import './BookCardForm.css'

import { Book } from '../../types/types';

import { database, storage } from '../../config/firebase';

import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import  { v1 } from 'uuid';

const BookCardForm = () => {

    //Setting Up New book

    const [newbook, setNewbook] = useState({
        title: '',
        author: '',
        genre: '',
        year: '',
        image: '',
        user: {
            name: 'nova',
            uid: 'iUp8K7fsVDanijOetuv38eGCVoD2',
        }
    })

    // Setting Up Image State

    const [bookimage, setBookimage] = useState(null)

    // Function to Preview Book Image

    const previewBookImage = (e:any) => {
      if (e.target.files && e.target.files.length > 0) {
        setBookimage(e.target.files[0])
      }
    }

    // Function to Remove Book Image Preview

    const removeBookImage = (e:any) => {
      setBookimage(null);
    }

    // funnction to upload Book Image

    const uploadBookImage = (e:any) => {
      if (bookimage != null) {
        const bookImageRef = ref(storage, `books/${v1()}`)
        uploadBytesResumable(bookImageRef, bookimage).then(() => {
          alert('Image')
        }
        )
      }

    }

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
        {bookimage && (
          <div>
            <img 
              src={URL.createObjectURL(bookimage)}
              alt='book' />
          </div>
        )}
        <input 
          accept='image/*'
          type='file' 
          onChange={previewBookImage}
        />
        <button onClick={removeBookImage}>
        Delete
      </button>
      <button onClick={uploadBookImage}>
        Upload
      </button>
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