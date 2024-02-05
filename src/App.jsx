import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import Portfolio from './components/Pages/Portfolio';
import Blog from './components/Pages/Blog';
import Footer from './components/Footer/Footer';

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in-out',
      delay: 100,
    });
  });

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Products />
      <Portfolio />
      <Blog />
      <Footer />

    </>
  );  
}

export default App
