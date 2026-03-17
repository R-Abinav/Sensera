import { motion } from "framer-motion";
import heartBg from "../assets/heart_bg.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-black">
      {/* Gentle Breathing Background Heart */}
      <motion.img
        src={heartBg}
        alt="Background Heart"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] md:h-[70vh] w-auto object-contain z-0 mix-blend-screen"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.45,
        }}
        transition={{
          opacity: { duration: 2, ease: "easeOut" }
        }}
        style={{ pointerEvents: "none" }}
      />

      <div className="z-10 w-full flex flex-col items-center justify-center mt-12 relative">
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
          <p className="font-['Cormorant_SC'] font-normal text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] text-[#4EECD4] uppercase mt-4 md:mt-8 ml-[0.5em]">
            Predict. Prevent. Protect.
          </p>
        </motion.div>

        {/* Main Heading & Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-[800px] px-6 mt-16 md:mt-24 space-y-8 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-white">
            Care before it's too late.
          </h2>
          <p className="font-normal text-[1.15rem] leading-[1.9] tracking-normal text-white/80 text-center">
            Our platform addresses delays in recognising deterioration of
            patients' health status, and promptly notifies family members and
            primary responders to ensure the patient receives timely medical
            attention. Our system continuously monitors health parameters by
            integrating wearable device data with electronic medical records
            through secure APIs. Using a custom-built AI model, the platform
            analyses trends in the patient's health data, delivers personalised
            health insights, and recommends when a patient should seek medical
            consultation — enabling care that is proactive, not reactive.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
