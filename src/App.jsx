import './App.css'
import Menu from './Menu'
import Hero from './Hero'
import AbautMe  from './AboutMe'
import Projects from './Projects'
import Formation from './Formation'
import Experience from './Experience'
import Contact from './Contact'
import NotFound from './pages/NotFound';
import React from 'react';
import './index.css'; // Importando o CSS global
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Menu />
            <Hero />
            <AbautMe />
            <Projects />
            <Formation />
            <Experience />
            <Contact />
          </>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
