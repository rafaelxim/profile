import React from 'react';

import Navbar from './components/Navbar';
import AboutMe from './sections/AboutMe';
import Header from './sections/Header';
import Resume from './sections/Resume';
import Specializations from './sections/Specializations';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <Specializations />
      <Resume />
    </div>
  );
}

export default App;
