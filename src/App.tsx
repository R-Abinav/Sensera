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
  );
}

export default App;
