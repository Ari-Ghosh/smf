import React from 'react'
import ImgCarousel from './components/carousel/ImgCarousel';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Events from './components/events/Events'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <ImgCarousel />
      <Footer />
    </div>
  );
}

export default App;
