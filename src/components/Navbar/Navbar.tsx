import React from 'react';

import { useNavigate } from 'react-router-dom';

import './Navbar.css'

import logo from '../../assets/logo.png';

const Navbar = () => {

    // Setting Up The Navigation Function
    let navigator = useNavigate()


  return (
    <div className='navbarBlock'>
        <img src={logo} alt='logo' />
        <div className='navbarLinks'>
            <div onClick={()=> {
                navigator('/library')
            }}>
                <span>Library</span>
            </div>
            <div onClick={()=> {
                navigator('/profile')
            }}>
                <span>Profile</span>
            </div>
            <div onClick={()=> {
                navigator('/my-books')
            }}>
                <span>My Books</span>
            </div>
            <div onClick={()=> {
                navigator('/add-books')
            }}>
                <span>Add Books</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar