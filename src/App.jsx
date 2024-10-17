import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail'; // Import the ServiceDetail component

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Routes>
          <Route path="/" element={<Service />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
        </Routes>
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
