import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Blogs from './components/Pages/Blogs';
import SignUp from './components/Pages/SignUp';



function App() {
  return (

    <>
    <BrowserRouter>
      <Navbar />
      <Routes>

        
        <Route path='/'  element={<Home/>}/>
        <Route path='/about'  element={<About/>}/>
        <Route path='/blogs'  element={<Blogs/>}/>
        <Route path='/sign-up'  element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
