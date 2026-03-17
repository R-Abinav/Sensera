import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import imgFounder from "../assets/img_founder.png";

export function FounderQuote() {
  const containerRef = useRef<HTMLElement>(null);

  // For the outgoing fade out when scrolling past
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const fadeOutOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const fadeOutY = useTransform(scrollYProgress, [0, 1], ["0px", "-50px"]);

  const lines = [
    "I started this with a simple thought — what if care reached people before it was too late?",
    "My grandfather suffered a stroke and didn't receive medical attention in time.",
    "That experience stayed with me. It made me realise how often critical moments are missed —",
    "not because treatment doesn't exist, but because it doesn't reach in time.",
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-black pt-[50vh] pb-[50vh]"
    >
      <div className="sticky top-0 min-h-screen w-full flex flex-col justify-center px-6 md:px-16 lg:px-24">
        <motion.div
          style={{ opacity: fadeOutOpacity, y: fadeOutY }}
          className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24"
        >
          {/* Text Container */}
          <div className="max-w-[680px] w-full flex flex-col items-start text-left space-y-6">
            {lines.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.25,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="font-light italic text-[1.5rem] md:text-[2rem] leading-[1.6] text-white"
              >
                {text}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 1.2,
                delay: lines.length * 0.25 + 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="w-full text-right mt-8"
            >
              <p className="font-['Cormorant_SC'] font-normal text-[1.3rem] tracking-[0.25em] uppercase text-white inline-block">
                — Aditya Sahoo, Founder
              </p>
            </motion.div>
          </div>

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 1.2,
              delay: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="w-full md:w-1/2 flex justify-center md:justify-end shrink-0"
          >
            <img
              src={imgFounder}
              alt="Aditya Sahoo, Founder"
              className="w-full max-w-[400px] lg:max-w-[550px] object-contain rounded-2xl shadow-2xl relative z-10"
              style={{ clipPath: "inset(0 0 8% 0)" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
