import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between px-6 h-[60px] w-full max-w-[900px] bg-[rgba(30,30,30,0.85)] backdrop-blur-[12px] border border-[#333333] shadow-2xl rounded-[16px]">
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <span className="font-['Cormorant_Garamond'] font-normal text-[1.2rem] tracking-[0.25em] text-white uppercase">
            Sensera
          </span>
        </div>

        {/* Links (Center) */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-normal tracking-wide">
          <a
            href="#problem"
            className="text-white hover:text-white/70 transition-colors"
          >
            Mission
          </a>
          <a
            href="#solution"
            className="text-white hover:text-white/70 transition-colors"
          >
            Our Solution
          </a>
          <a
            href="#timeline"
            className="text-white hover:text-white/70 transition-colors"
          >
            Status
          </a>
          <a
            href="#team"
            className="text-white hover:text-white/70 transition-colors"
          >
            Team
          </a>
        </div>

        {/* CTA (Right) */}
        <div className="shrink-0 flex items-center">
          <Button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="h-9 px-6 rounded-md text-[11px] font-semibold tracking-[0.1em] bg-white text-black hover:bg-neutral-200 transition-colors uppercase shadow-none border border-transparent cursor-pointer"
          >
            Contact
          </Button>
        </div>
      </nav>
    </div>
  );
}
