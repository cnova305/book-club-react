import React, { useEffect, useState } from 'react';
import './Library.css';

import { User, Book } from '../../types/types';


import Navbar from '../../components/Navbar/Navbar';
import BookCard from '../../components/BookCard/BookCard';

import { database } from '../../config/firebase';
import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const Library = () => {

    const [allBooks, setAllBooks] = useState<Book[]>()
    
    useEffect(()=> {
        const fetchBooks = async () => {
            let booklist: Book[] = []
            const queryBooks = await getDocs(collection(database, 'books'));
            queryBooks.forEach((doc) => {
                // console.log(doc.data())
                const book:Book = JSON.parse(JSON.stringify(doc.data()))
                booklist.push(book)
            })
            console.log(booklist)
            setAllBooks(booklist)
        }
        fetchBooks()
    },[])
    
  return (
    <>
        <div className='pageContainer'>
            <div className='navbarContainer'>
                <Navbar />
            </div>
            <div>
                {allBooks &&
                allBooks.map((book, index)=> {
                    return (
                        <div key={index}>
                            <BookCard book={book}/>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default Library