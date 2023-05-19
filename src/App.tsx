import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Projects from './components/sections/Projects';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
