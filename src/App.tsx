import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Projects from './components/sections/Projects';

function App() {
  return (
    <div className='container max-w-[120rem] relative'>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
