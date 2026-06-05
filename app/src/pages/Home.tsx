import GradientOrb from '../components/GradientOrb';
import Navbar from '../sections/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import WhatIDo from '../sections/WhatIDo';
import Tools from '../sections/Tools';
import CV from '../sections/CV';
import Brands from '../sections/Brands';
import Licenses from '../sections/Licenses';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-dark overflow-x-hidden">
      <GradientOrb />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <WhatIDo />
        <Tools />
        <CV />
        <Brands />
        <Licenses />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
