import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Welcome from './pages/Welcome';
import Services from './pages/Services';
import Header from './pages/Header';
import HomeSlider from './pages/HomeSlider';
import StatsSection from './pages/Stats';
import Testimonials from './pages/Testimonials';
import Clients from './pages/Clients';
import News from './pages/News';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HomeSlider />
              <Welcome />
              <Services />
              <StatsSection />
              <Testimonials />
              <Clients />
              <News />
            </>
          } />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
