import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import ToTopArrow from './components/ToTopArrow';
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

  // Função para monitorar a posição do scroll
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Limpeza do evento ao desmontar o componente
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
    </div>
  );
}

export default App;
