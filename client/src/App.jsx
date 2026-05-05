import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="bg-dark min-h-screen font-sans selection:bg-accent selection:text-white">
      <Toaster 
        position="top-right" 
        toastOptions={{
          className: '!bg-[#222] !text-white !rounded-none !border-2 !border-accent',
        }} 
      />
      {/* Fixed Orange Bar - 4px width as requested */}
      <div className="fixed top-0 left-0 w-[4px] h-full bg-accent z-50" />
      
      {/* Main Content Wrapper - Ensures no overlap with the bar by adding padding */}
      <div className="pl-[60px] md:pl-[80px] w-full relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;