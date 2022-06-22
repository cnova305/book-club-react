import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './SignIn.css';

import authImage from '../../assets/Auth.svg';

// Importing Firebase Functions
import {auth, firebaseSignIn} from '../../config/firebase';


const SignIn = () => {


    // Setting Up The Navigation Function
    let navigator = useNavigate()
    

    //Setting Up Sign Up User
    const [user, setUser] = useState({
        email:'',
        password:'',
    })

    //Setting Up Error Message
    const [errmsg, setErrmsg] = useState(false)

    // Setting User Update Function

    const updateUser = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    // Submitting User Sign Up Form

    const submitUser = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        firebaseSignIn(auth, user.email, user.password)
            .then((userCredential) => {
                const returning_user = userCredential.user.uid;
                console.log(returning_user)
                sessionStorage.setItem("bookclub_member_uid", JSON.stringify(returning_user))
                navigator('/library')
            })
            .catch((error) => {
                setErrmsg(true)
  });

    }

  return (
      <>
        <div className='pageContainer'>
            <div className='signInContentContainer'>
                <div className='signInFormContainer'>
                    <h1>Welcome Back !</h1>
                    <form onSubmit={submitUser}>
                        <input name='email' onChange={updateUser}  className='signInFormInputBig' type='text' placeholder='    Email' />
                        <input name='password' onChange={updateUser}  className='signInFormInputBig' type='password' placeholder='    Password' />
                        {errmsg && (<span>Wrong Email or Password</span>)}
                        <button type='submit' className='signInFormButton'>Sign In</button>
                    </form>
                    
                </div>
                <div className='authImageContainer'>
                    <img src={authImage} alt='auth' />
                </div>
            </div>
        </div>
      </>
    
  )
}

export default SignIn