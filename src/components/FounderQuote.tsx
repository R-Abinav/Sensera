import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
      className="relative w-full bg-[#0a0f1c] pt-[50vh] pb-[50vh]"
    >
      <div className="sticky top-0 min-h-screen w-full flex flex-col justify-center px-6">
        <motion.div
          style={{ opacity: fadeOutOpacity, y: fadeOutY }}
          className="max-w-[680px] w-full mx-auto md:ml-32 lg:ml-48 flex flex-col items-start text-left space-y-6"
        >
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 1.2,
              delay: lines.length * 0.25 + 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="font-['Cormorant_SC'] font-normal text-sm md:text-base tracking-[0.25em] uppercase text-white pt-8"
          >
            — Aditya Sahoo, Founder
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
