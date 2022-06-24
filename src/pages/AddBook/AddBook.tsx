import React from 'react';
import './AddBook.css';

import { User, Book } from '../../types/types';

import Navbar from '../../components/Navbar/Navbar';
import BookCardForm from '../../components/BookCardForm/BookCardForm';


const AddBook = () => {
  return (
    <>
        <div className='pageContainer'>
            <div className='navbarContainer'>
                <Navbar />
            </div>
            <div className='bookcardformContainer'>
              <div className='bookcardformBlock'>
                <BookCardForm />
              </div>
            </div>
        </div>
    </>
  )
}

export default AddBook