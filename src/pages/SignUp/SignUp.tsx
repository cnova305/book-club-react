import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './SignUp.css';

import authImage from '../../assets/Auth.svg';


// Importing Firebase Functions
import {auth, signIn, signUp} from '../../config/firebase';
import { database } from '../../config/firebase';
import { addDoc, collection, doc, setDoc } from "firebase/firestore";






const SignUp = () => {

    // Setting Up The Navigation Function
    let navigator = useNavigate()

    //Setting Up Sign Up User
    const [userdata, setUserdata] = useState({
        firstname:'',
        lastname:'',
        email:'',
        number:'',
        username:'',
        password:'',
        confirmpassword:'',
    })

    // Setting User Update Function

    const updateUser = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUserdata({
            ...userdata,
            [e.target.name]: e.target.value,
        })
    }

    // Submitting User Sign Up Form

    const submitUser = async (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(userdata)
        // Creating User In Firebase
       const newUser =  await signUp(auth, userdata.email, userdata.password);
       // Creating User In Firebase Users Collection
        await setDoc(doc(database, "users", newUser.user.uid), {
            ...userdata
          });
          sessionStorage.setItem("bookclub_member_uid", JSON.stringify(newUser.user.uid))
          navigator('/library')

    }

  return (
      <>
        <div className='pageContainer'>
            <div className='signUpContentContainer'>
                <div className='signUpFormContainer'>
                    <h1>Welcome To The Club</h1>
                    <form onSubmit={submitUser}>
                        <div className='signUpFormInputSmallContainer'>
                            <input name='firstname' onChange={updateUser}  className='signUpFormInputSmall' type='text' placeholder='    First Name' />
                            <input name='lastname' onChange={updateUser}   className='signUpFormInputSmall' type='textl' placeholder='    Last Name' />
                            <input name='email' onChange={updateUser}  className='signUpFormInputSmall' type='email'  placeholder='    Email Address'/>
                            <input name='number' onChange={updateUser}  className='signUpFormInputSmall' type='text'  placeholder='    Phone Number'/>
                        </div>
                        <input name='username' onChange={updateUser}  className='signUpFormInputBig' type='text' placeholder='    Username' />
                        <input name='password' onChange={updateUser}  className='signUpFormInputBig' type='password' placeholder='    Password' />
                        <input name='confirmpassword' onChange={updateUser}  className='signUpFormInputBig' type='password' placeholder='    Confirm Password' />
                        <button type='submit' className='signUpFormButton'>Sign Up</button>
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

export default SignUp