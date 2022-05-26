import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css'

import homeImage from '../../assets/Home.svg'

const Home = () => {

    // Setting Up The Navigation Function
    let navigator = useNavigate()

  return (
      <>
        <div className='pageContainer'>
            <div className='homeContentContainer'>
                <div className='homeImageContainer'>
                    <img src={homeImage} alt='home' />
                </div>
                <div className='homeTitleContainer'>
                    <h1>Welcome To Avid Readers Book Club</h1>
                    <div className='homeButtonsContainer'>
                        <button onClick={() =>navigator('sign-up')}>Sign Up</button>
                        <button onClick={() =>navigator('sign-in')}>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
      </>
    
  )
}

export default Home