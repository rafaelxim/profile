import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import ToTopArrow from './components/ToTopArrow';
import WhatsCTA from './components/WhatsCTA';
import AboutMe from './sections/AboutMe';
import Benefits from './sections/Benefits';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Header from './sections/Header';
import HireMe from './sections/HireMe';
import Portfolio from './sections/Portfolio';
import Resume from './sections/Resume';
import Specializations from './sections/Specializations';
import Steps from './sections/Steps';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {isScrolled && <ToTopArrow />}

      <Navbar />
      <Header />
      <AboutMe />
      <Specializations />
      <Resume />
      <Portfolio />
      <HireMe />
      <Benefits />
      <Steps />
      <Contact />
      <Footer />
      <WhatsCTA />
    </div>
  );
}

export default App;
