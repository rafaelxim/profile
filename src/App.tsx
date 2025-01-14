import Navbar from './components/Navbar';
import AboutMe from './sections/AboutMe';
import Benefits from './sections/Benefits';
import Header from './sections/Header';
import HireMe from './sections/HireMe';
import Portfolio from './sections/Portfolio';
import Resume from './sections/Resume';
import Specializations from './sections/Specializations';
import Steps from './sections/Steps';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <Specializations />
      <Resume />
      <Portfolio />
      <HireMe />
      <Benefits />
      <Steps />
    </div>
  );
}

export default App;
