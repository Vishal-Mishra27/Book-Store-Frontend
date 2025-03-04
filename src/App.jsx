import { useState } from 'react'
import './App.css'
import Home from "../src/Router/Home";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Courses from './cources/Cources'
import Signup from './components/Signup'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={authUser?<Courses />:<Navigate to="/signup"/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    <Toaster/>
    </div>
    
    </>
  )
}

export default App
