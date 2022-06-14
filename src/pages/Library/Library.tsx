import React, { useEffect, useState } from 'react';

import './Library.css';

import { User } from '../../types/types'

import { database } from '../../config/firebase';
import { getFirestore, doc, getDoc, collection } from "firebase/firestore";

const Library = () => {

    // Setting Up User State

    const [userdata, setUserdata] = useState<User>({
        firstname: '',
        lastname: '',
        email: '',
        number: '',
        username: '',
    })

    const member_uid = sessionStorage.getItem('bookclub_member_uid') || ''

    
    const userDoc = async () => {
        const firestore = getFirestore();
        const fetchUserDoc = doc(firestore, 'users', member_uid)
        const activeuser = await getDoc(fetchUserDoc)
        return activeuser.data();
    }

    useEffect(() => {
        userDoc()
    }, [] )

    
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