import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="pt-12 pb-8 px-6 bg-transparent text-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Area: Links */}
        <div className="relative z-10 flex flex-col md:flex-row justify-center gap-16 md:gap-32 w-full max-w-4xl mx-auto py-8 md:py-16">
          <div className="flex flex-col space-y-6 items-center md:items-start text-center md:text-left">
            <h4 className="text-xl md:text-2xl font-['Cormorant_SC'] font-medium text-black tracking-[0.15em] uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#problem" className="text-sm text-black/70 hover:text-black transition-colors duration-200">Mission</a>
              </li>
              <li>
                <a href="#solution" className="text-sm text-black/70 hover:text-black transition-colors duration-200">Our Solution</a>
              </li>
              <li>
                <a href="#status" className="text-sm text-black/70 hover:text-black transition-colors duration-200">Status</a>
              </li>
              <li>
                <a href="#team" className="text-sm text-black/70 hover:text-black transition-colors duration-200">Team</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-6 items-center md:items-start text-center md:text-left">
            <h4 className="text-xl md:text-2xl font-['Cormorant_SC'] font-medium text-black tracking-[0.15em] uppercase">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-black/70 hover:text-black transition-colors duration-200">Twitter / X</a>
              </li>
              <li>
                <a href="#" className="text-sm text-black/70 hover:text-black transition-colors duration-200">LinkedIn</a>
              </li>
              <li>
                <a href="mailto:sensera@gmail.com" className="text-sm text-black/70 hover:text-black transition-colors duration-200">sensera@gmail.com</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-6 items-center md:items-start text-center md:text-left">
            <h4 className="text-xl md:text-2xl font-['Cormorant_SC'] font-medium text-black tracking-[0.15em] uppercase">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-black/70 hover:text-black transition-colors duration-200">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-sm text-black/70 hover:text-black transition-colors duration-200">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-sm text-black/70 hover:text-black transition-colors duration-200">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* SENSERA Watermark - Below the links */}
        <div className="w-full overflow-hidden flex justify-center items-center pointer-events-none mt-4 mb-2">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 0.12, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[18vw] font-normal tracking-widest text-black whitespace-nowrap w-full text-center leading-none select-none"
          >
            SENSERA
          </motion.h1>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-black/50 pt-8 border-t border-black/10">
          <p>© {new Date().getFullYear()} Sensera. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-normal">Care before it's too late.</p>
        </div>
      </div>
    </footer>
  );
}
