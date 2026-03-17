import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { Timeline } from "./components/Timeline";
import { Footer } from "./components/Footer";
import { AuroraBackground } from "./components/ui/AuroraBackground";

function App() {
  return (
    <AuroraBackground className="dark antialiased text-foreground selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Timeline />
      </main>
      <Footer />
    </AuroraBackground>
  );
}

export default App;
