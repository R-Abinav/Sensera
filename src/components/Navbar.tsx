import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const navLinks = [
    { label: "Problem", id: "problem" },
    { label: "Our Solution", id: "solution" },
    { label: "Status", id: "timeline" },
    { label: "Team", id: "team" },
  ];

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full pointer-events-none">
        <nav className="pointer-events-auto flex items-center justify-between px-6 h-[60px] w-full max-w-[900px] bg-white/70 backdrop-blur-md border border-neutral-200 shadow-sm rounded-[16px]">
          {/* Logo */}
          <div
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <span className="font-['Cormorant_Garamond'] font-normal text-[1.2rem] tracking-[0.25em] text-black uppercase">
              Sensera
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-[15px] font-normal tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-black hover:text-black/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex shrink-0 items-center">
            <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="h-9 px-6 rounded-md text-[11px] font-semibold tracking-[0.1em] bg-black text-white hover:bg-neutral-800 transition-colors uppercase shadow-none border border-transparent cursor-pointer"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-md text-black hover:bg-black/5 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-10">
          {navLinks.map((link, i) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="font-['Cormorant_Garamond'] font-light text-[2rem] tracking-[0.2em] text-black uppercase hover:text-black/60 transition-colors"
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
              }}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => handleNavClick("contact")}
            className="mt-4 h-12 px-10 rounded-full text-[12px] font-semibold tracking-[0.15em] bg-black text-white hover:bg-neutral-800 transition-colors uppercase"
          >
            Contact
          </button>
        </nav>

        {/* Subtle branding at bottom */}
        <p className="absolute bottom-10 font-['Cormorant_SC'] text-xs tracking-[0.3em] text-black/30 uppercase">
          Care before it's too late.
        </p>
      </div>
    </>
  );
}
