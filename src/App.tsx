import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { Timeline } from "./components/Timeline";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";
import { AuroraBackground } from "./components/ui/AuroraBackground";

function App() {
  return (
    <AuroraBackground className="dark antialiased text-white selection:bg-blue-500/30 bg-gradient-to-br from-[#020617] via-[#0a0f1c] to-[#020215] bg-fixed">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Timeline />
        <Team />
      </main>
      <Footer />
    </AuroraBackground>
  );
}

export default App;
