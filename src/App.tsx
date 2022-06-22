import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Importing Pages
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Library from './pages/Library/Library';

function App() {

  const currentUser = false;

  // const RequireAuth = ({children}) {
  //   return currentUser ? (children) : <Navigate to='/sign-in' />
  // }
  
  return (
    <div className="App">
      <Router>
        {/* <Home /> */}
        {/* <SignUp /> */}
        {/* <SignIn /> */}
        {/* <Library /> */}
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/library' element={<Library />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
