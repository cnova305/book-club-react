import React, { useState } from 'react';

import './SignUp.css'

import authImage from '../../assets/Auth.svg'






const SignUp = () => {

    // Setting Up Input States
    // const [firstname, setFirstname] = useState('')
    // const [lastname, seLastname] = useState('')
    // const [email, setEmail] = useState('')
    // const [number, setNumber] = useState('')
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    // const [confirmpassword, setConfirmpassword] = useState('')
    //Setting Up Sign Up User
    const [user, setUser] = useState({
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
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    // Submitting User Sign Up Form

    const submitUser = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(user)
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
                    <img src={authImage} alt='home' />
                </div>
            </div>
        </div>
      </>
    
  )
}

export default SignUp