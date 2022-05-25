import React from 'react';

import './Home.css'

import homeImage from '../../assets/Home.svg'

const Home = () => {
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
                        <button>Sign Up</button>
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
      </>
    
  )
}

export default Home