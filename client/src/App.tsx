import React from 'react'
  
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import Profile from './pages/Profile';
import Header from './components/Header';


export default function App() {
  return (

    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Signin' element={<SignIn />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/Profile' element={<Profile/>} />
    </Routes>
  
    </BrowserRouter>

  )
}

