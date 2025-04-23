import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero/HeroSection';
import AboutSection from './components/About/AboutSection';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <header>
      <Navbar />
    </header>

    <main>
      <HeroSection /> 
      <AboutSection />
    </main>

    </>
  )
}

export default App
