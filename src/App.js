import './App.css';
import About from './components/About/About';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer';
import Particle from './components/Particle';
import { MemoryRouter } from 'react-router-dom';

function App() {
  return (
    <>
     <Particle/>
      <NavBar/>
      <Home/>
      <MemoryRouter><About/></MemoryRouter>
      <Projects/>
      <Contact/>
      <Footer/>
    </> 
  );
} 

export default App;
