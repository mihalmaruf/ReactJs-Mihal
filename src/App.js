import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Testimonials from './components/testimonials/Testimonials';
import './App.css';

const App = () => {
  return (
    <>
    <Sidebar />
    <main className='main'>
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
    </>
  )
}

export default App