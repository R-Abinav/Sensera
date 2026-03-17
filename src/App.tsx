import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { FounderQuote } from "./components/FounderQuote";
import { Timeline } from "./components/Timeline";
import { Team } from "./components/Team";
import { Mentors } from "./components/Mentors";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AuroraBackground } from "./components/ui/AuroraBackground";

function App() {
  return (
    <AuroraBackground className="dark antialiased text-white selection:bg-blue-500/30 bg-black">
      {/* 
        Mobile Blocker
        Only visible on screens < 768px (md:hidden).
        Position fixed, maximum z-index, pure black background.
      */}
      <div className="md:hidden fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-['Cormorant_Garamond'] font-light text-[1.5rem] tracking-[0.3em] text-white opacity-100 uppercase mb-4">
          Sensera
        </h1>
        <p className="font-['Cormorant_Garamond'] font-light text-[1rem] tracking-[0.1em] text-white opacity-80 mb-2">
          This website is best experienced on a laptop.
        </p>
        <p className="font-['Cormorant_Garamond'] font-light text-[1rem] tracking-[0.1em] text-white opacity-60">
          Mobile version coming soon.
        </p>
      </div>

      {/* Main Content Container - Hidden on Mobile */}
      <div className="hidden md:block">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <FounderQuote />
        <Timeline />
        <Team />
        <Mentors />
        <Contact />
      </main>
        <Footer />
      </div>
    </AuroraBackground>
  );
}

export default App;
