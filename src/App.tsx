import React from 'react';
import Home from './Screens/Home';
import { BrowserRouter, Routes, Route } from "react-router";
import About from './Screens/About';
import Contact from './Screens/Contact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  );
}

export default App;
