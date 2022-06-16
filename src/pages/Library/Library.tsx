import React, { useEffect, useState } from 'react';

import './Library.css';

import { User } from '../../types/types'

import { database } from '../../config/firebase';
import { doc, getDoc } from "firebase/firestore";

const Library = () => {

    // Setting Up User State

    const [userdata, setUserdata] = useState<User>({
        uid: '',
        firstname: '',
        lastname: '',
        email: '',
        number: '',
        username: '',
    })

    const member_uid = sessionStorage.getItem('bookclub_member_uid') || ''

    const userDoc = async () => {
     const docSnap = await getDoc( doc(database, 'users', "H8krTvDr9lYoXonlnUOwHWeKo5z1"));
     if (docSnap.exists()) {
        console.log(docSnap.data())
     } else {
        console.log('nope')}
    }

    useEffect(() => {
        userDoc()
        }, []);



    
  return (
    <>
        <div className='pageContainer'>
            <div className='libraryContentContainer'>
                <div className='libraryProfileContainer'>
                    <div className='libraryProfileCard'>
                        <div className='libraryProfileCardInfo'>
                            <div>
                                <h1>
                                    Super-Nova
                                </h1>
                                <p>Books Added: 5</p>
                            </div>
                            <div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Library