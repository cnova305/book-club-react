import React, { useEffect, useState } from 'react';
import './Library.css';

import { User, Book } from '../../types/types'


import Navbar from '../../components/Navbar/Navbar';

import { database } from '../../config/firebase';
import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const Library = () => {

    const [allBooks, setAllBooks] = useState<Book[]>()
    const [book, setBook] = useState<Book>()
    
    useEffect(()=> {
        const fetchBooks = async () => {
            const queryBooks = await getDocs(collection(database, 'books'));
            queryBooks.forEach((doc) => {
                console.log(doc.data())
            })
        }
        fetchBooks()
    },[])

    // Setting Up User State

    const [userdata, setUserdata] = useState<User>({
        uid: '',
        firstname: '',
        lastname: '',
        email: '',
        number: '',
        username: '',
    })
    // const member_uid = JSON.parse(sessionStorage.getItem('bookclub_member_uid') || '');

    // const userDoc = async () => {
    //  const docSnap = await getDoc( doc(database, 'users', member_uid));
    //  if (docSnap.exists()) {
    //     console.log(docSnap.data())
    //     const member = JSON.parse(JSON.stringify(docSnap.data()))
    //     setUserdata(member)
    //  } else {
    //     console.log('nope')}
        
    // }

    // useEffect(() => {
    //     userDoc()
    //     }, []);



    
  return (
    <>
        <div className='pageContainer'>
            <div className='navbarContainer'>
                <Navbar />
            </div>

        </div>
    </>
  )
}

export default Library