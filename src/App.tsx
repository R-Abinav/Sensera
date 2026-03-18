import { useState } from "react";
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
import { IntroAnimation } from "./components/IntroAnimation";

function App() {
  const [introPlayed, setIntroPlayed] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("senseraIntroPlayed") === "true";
    }
    return false;
  });

  const handleIntroComplete = () => {
    sessionStorage.setItem("senseraIntroPlayed", "true");
    setIntroPlayed(true);
  };

  return (
    <div className="bg-white min-h-screen w-full relative antialiased text-black selection:bg-blue-500/30">
      {!introPlayed && <IntroAnimation onComplete={handleIntroComplete} />}
      
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          !introPlayed ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* 
          Mobile Blocker
          Only visible on screens < 768px (md:hidden).
          Position fixed, maximum z-index.
        */}
        <div className="md:hidden fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center p-6 text-center">
          <h1 className="font-['Cormorant_Garamond'] font-light text-[1.5rem] tracking-[0.3em] text-black opacity-100 uppercase mb-4">
            Sensera
          </h1>
          <p className="font-['Cormorant_Garamond'] font-light text-[1rem] tracking-[0.1em] text-black opacity-80 mb-2">
            This website is best experienced on a laptop.
          </p>
          <p className="font-['Cormorant_Garamond'] font-light text-[1rem] tracking-[0.1em] text-black opacity-60">
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
      </div>
    </div>
  );
}

export default App;
