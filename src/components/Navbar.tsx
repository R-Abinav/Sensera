import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/50 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] supports-[backdrop-filter]:bg-background/20">
      <div className="flex items-center space-x-2">
        {/* Placeholder for actual logo */}
        <span className="text-2xl font-bold tracking-tighter">SENSERA</span>
      </div>
      <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
        <a href="#problem" className="text-foreground/80 hover:text-white transition-colors">Problem</a>
        <a href="#solution" className="text-foreground/80 hover:text-white transition-colors">Solution</a>
        <a href="#timeline" className="text-foreground/80 hover:text-white transition-colors">Timeline</a>
        <a href="#team" className="text-foreground/80 hover:text-white transition-colors">Team</a>
      </div>
      <div>
        <Button variant="default" className="rounded-full shadow-lg shadow-blue-500/20 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300">Contact Us</Button>
      </div>
    </nav>
  );
}
