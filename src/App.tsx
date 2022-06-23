import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Importing Pages
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Library from './pages/Library/Library';
import Profile from './pages/Profile/Profile';
import MyBooks from './pages/MyBooks/MyBooks';
import AddBook from './pages/AddBook/AddBook';

function App() {

  const currentUser = false;

  // const RequireAuth = ({children}) {
  //   return currentUser ? (children) : <Navigate to='/sign-in' />
  // }
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/library' element={<Library />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/my-books' element={<MyBooks />}/>
          <Route path='/add-books' element={<AddBook />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
