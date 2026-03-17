import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="pt-12 pb-8 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Area: Links & Watermark */}
        <div className="relative w-full py-8 md:py-16 flex justify-center items-center">
          {/* SENSERA Watermark - Absolute Behind */}
          <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center z-0 pointer-events-none px-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 0.15, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-[18vw] font-normal tracking-widest text-white whitespace-nowrap opacity-[0.15] w-full text-center leading-none select-none"
            >
              SENSERA
            </motion.h1>
          </div>

          {/* Links section */}
          <div className="relative z-10 flex flex-col md:flex-row justify-center gap-16 md:gap-32 w-full max-w-4xl mx-auto">
            <div className="flex flex-col space-y-6 items-center md:items-start text-center md:text-left">
              <h4 className="text-xl md:text-2xl font-['Cormorant_SC'] font-medium text-white tracking-[0.15em] uppercase">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#problem"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Mission
                  </a>
                </li>
                <li>
                  <a
                    href="#solution"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Our Solution
                  </a>
                </li>
                <li>
                  <a
                    href="#status"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Status
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Team
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col space-y-6 items-center md:items-start text-center md:text-left">
              <h4 className="text-xl md:text-2xl font-['Cormorant_SC'] font-medium text-white tracking-[0.15em] uppercase">
                Connect
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Twitter / X
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sensera@gmail.com"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    sensera@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col space-y-6 items-center md:items-start text-center md:text-left">
              <h4 className="text-xl md:text-2xl font-['Cormorant_SC'] font-medium text-white tracking-[0.15em] uppercase">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/50 pt-8 border-t border-white/10">
          <p>© {new Date().getFullYear()} Sensera. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-normal">Care before it's too late.</p>
        </div>
      </div>
    </footer>
  );
}
