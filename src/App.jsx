import './App.css';
import Menu from './Menu';
import Hero from './Hero';
import AbautMe from './AboutMe';
import Projects from './Projects';
import Formation from './Formation';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';
import NotFound from './pages/NotFound';
import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Menu />
              <div id="hero"><Hero /></div>
              <div id="about"><AbautMe /></div>
              <div id="projects"><Projects /></div>
              <div id="formation"><Formation /></div>
              <div id="experience"><Experience /></div>
              <div id="contact"><Contact /></div>
              <div id="Footer"><Footer /></div>
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
