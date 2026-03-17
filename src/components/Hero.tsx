import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-[#0a0f1c]">
      
      <div className="z-10 w-full flex flex-col items-center justify-center space-y-8 md:space-y-12 mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          {/* Main Brand Wordmark */}
          <h1 className="font-light text-[15vw] md:text-[12vw] tracking-[0.2em] md:tracking-[0.3em] text-white leading-none ml-[0.3em] uppercase">
            Sensera
          </h1>
          
          {/* Tagline */}
          <p className="font-['Cormorant_SC'] font-normal text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] text-white/60 uppercase mt-4 md:mt-8 ml-[0.5em]">
            Predict. Prevent. Protect.
          </p>
        </motion.div>

        {/* Subtext Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-[700px] px-6 mt-16 md:mt-24"
        >
          <p className="font-light text-[1.1rem] md:text-[1.3rem] leading-[1.8] text-white/75 text-center">
            Building systems that can detect early warning signs and ensure help arrives when it matters most. Taking responsibility for what happens to a person across time, not just during isolated medical encounters.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
