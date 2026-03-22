import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { useRef } from "react";
import img1 from "../assets/img_1.jpg";
import img2 from "../assets/img_2.jpg";
import img3 from "../assets/img_3.jpg";
import img4 from "../assets/img_4.png";
import img5 from "../assets/img_5.png";

const timelineData = [
  {
    phase: "Phase 1",
    title: "Concept & Team Formation",
    duration: "0–1 month",
    status: "completed",
    image: img1,
    sections: [
      { label: "Goal", text: "Define the product and organize teams" },
      {
        label: "Tasks",
        text: "Finalize problem statement · Define core features: continuous health monitoring, escalation alerts to family and responders, AI health insights · Assign teams: Medical (clinical validation), Software (platform and AI models), Hardware (wearable prototype) · Identify existing wearable APIs",
      },
      { label: "Deliverable", text: "Concept note + product roadmap" },
    ],
  },
  {
    phase: "Phase 2",
    title: "Parallel Development",
    duration: "1–3 months",
    status: "ongoing",
    image: img2,
    sections: [
      { label: "Software Track — Goal", text: "Build the first software platform" },
      {
        label: "Features",
        text: "Wearable API integration · Health monitoring dashboard · AI anomaly detection · Escalation alerts to caregivers and responders · Early recommendation system",
      },
      { label: "Deliverable", text: "Software MVP" },
      {
        label: "Hardware Track — Goal",
        text: "Begin wearable development",
        marginTop: true,
      },
      {
        label: "Tasks",
        text: "Sensor selection · Prototype architecture · Initial hardware design · Integration planning",
      },
      { label: "Deliverable", text: "Hardware prototype design" },
    ],
  },
  {
    phase: "Phase 3",
    title: "Testing & Refinement",
    duration: "3–6 months",
    status: "upcoming",
    image: img3,
    sections: [
      { label: "Software", text: "Improve AI models · Test alert systems · Beta testing with users" },
      {
        label: "Hardware",
        text: "Build first functional wearable prototype · Sensor calibration · Power optimization",
      },
      { label: "Deliverable", text: "Beta software + prototype wearable" },
    ],
  },
  {
    phase: "Phase 4",
    title: "Integration Phase",
    duration: "6–12 months",
    status: "upcoming",
    image: img4,
    sections: [
      { label: "Goal", text: "Combine software platform with proprietary wearable" },
      {
        label: "Tasks",
        text: "Integrate device data with platform · Optimize real-time monitoring · Conduct pilot testing",
      },
      { label: "Deliverable", text: "Integrated system" },
    ],
  },
  {
    phase: "Phase 5",
    title: "Deployment & Scaling",
    duration: "12+ months",
    status: "upcoming",
    image: img5,
    sections: [
      { label: "Goal", text: "Full product launch" },
      {
        label: "Features",
        text: "Software platform · Proprietary wearable · AI-driven monitoring · Caregiver and responder alert system",
      },
      { label: "Deliverable", text: "Complete health monitoring ecosystem" },
    ],
  },
];

const TimelineNode = ({ status }: { status: string }) => {
  if (status === "completed") {
    return (
      <div
        className="relative w-[14px] h-[14px] rounded-full border border-black bg-white flex items-center justify-center z-20"
        style={{ boxShadow: "0 0 16px rgba(0,0,0,0.3)" }}
      >
        <Check className="w-2.5 h-2.5 text-black" strokeWidth={4} />
      </div>
    );
  }

  if (status === "ongoing") {
    return (
      <div
        className="relative w-[14px] h-[14px] rounded-full border border-black bg-white flex items-center justify-center z-20"
        style={{ boxShadow: "0 0 16px rgba(0,0,0,0.3)" }}
      >
        <motion.div
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-[5px] h-[5px] rounded-full bg-black"
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ scale: 1, boxShadow: "none", borderColor: "rgba(0,0,0,0.3)" }}
      whileInView={{
        scale: 1.2,
        boxShadow: "0 0 16px rgba(0,0,0,0.3)",
        borderColor: "rgba(0,0,0,1)",
      }}
      viewport={{ once: true, margin: "-50% 0px" }}
      className="relative w-[14px] h-[14px] rounded-full border bg-white flex items-center justify-center z-20 transition-all duration-300"
    />
  );
};

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="py-16 md:py-24 px-4 sm:px-6 relative bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-16 md:mb-32">
          <h2 className="font-['Cormorant_SC'] text-4xl sm:text-5xl md:text-[4rem] tracking-[0.2em] md:tracking-[0.3em] uppercase text-black font-medium">
            Development Timeline
          </h2>
        </div>

        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto pb-16 md:pb-24">
          {/* Base Line — left on mobile, center on desktop */}
          <div className="absolute left-[6px] md:left-1/2 top-0 bottom-0 w-[1px] bg-black/[0.15] -translate-x-1/2 z-0" />

          {/* Glowing Animated Line */}
          <motion.div
            className="absolute left-[6px] md:left-1/2 top-0 w-[1px] bg-black -translate-x-1/2 origin-top z-10"
            style={{ height: lineHeight, boxShadow: "0 0 12px rgba(0,0,0,0.4)" }}
          />

          <div className="flex flex-col gap-20 md:gap-40 w-full relative z-20">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col items-start w-full justify-between gap-8 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse md:items-center"
                  }`}
                >
                  {/* Node — always left on mobile */}
                  <div className="absolute left-[6px] md:left-1/2 top-1 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20">
                    <TimelineNode status={item.status} />
                  </div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`w-full md:w-1/2 pl-8 md:pl-0 flex flex-col ${
                      isEven
                        ? "md:pr-24 md:items-end text-left md:text-right"
                        : "md:pl-24 md:items-start text-left"
                    }`}
                  >
                    <div className="flex flex-col gap-1 mb-6 md:mb-8 w-full max-w-lg">
                      <h3 className="font-semibold text-[1.4rem] sm:text-[2rem] text-black mb-2 md:mb-3 tracking-normal leading-tight">
                        {item.phase} — {item.title}
                      </h3>
                      <div
                        className={`flex flex-wrap items-center gap-2 md:gap-3 ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <span className="font-['Cormorant_SC'] uppercase text-xs tracking-[0.2em] text-teal-700 border border-teal-700/30 rounded-full px-3 py-1 bg-black/5">
                          {item.duration}
                        </span>
                        {item.status === "completed" && (
                          <span className="font-['Cormorant_SC'] uppercase text-xs tracking-[0.2em] text-black bg-[#FFD700] px-3 py-1 flex items-center gap-1.5 font-semibold">
                            <Check className="w-3 h-3 text-black" strokeWidth={3} /> Completed
                          </span>
                        )}
                      </div>
                    </div>

                    <div
                      className={`space-y-5 max-w-lg w-full ${
                        isEven ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      {item.sections.map((sec, idx) => (
                        <div key={idx} className={sec.marginTop ? "mt-6 md:mt-10" : ""}>
                          <span className="block font-['Cormorant_SC'] uppercase text-[0.75rem] md:text-[0.85rem] tracking-[0.3em] text-teal-700 mb-1 md:mb-2 font-semibold">
                            {sec.label}
                          </span>
                          <p className="font-light text-[0.95rem] sm:text-[1.15rem] leading-[1.85] text-black/[0.85]">
                            {sec.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Image — desktop only */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30% 0px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`hidden md:flex relative w-full md:w-[45%] items-center justify-center ${
                      isEven ? "md:pl-12 lg:pl-16" : "md:pr-12 lg:pr-16"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={`${item.phase} visual`}
                      className="w-full object-contain bg-transparent relative drop-shadow-2xl"
                      style={{
                        maxHeight: index === 1 ? "900px" : "500px",
                        clipPath: index >= 2 ? "inset(0 0 8% 0)" : "none",
                        transform: index === 1 ? "scale(1.5) translateX(10%)" : "none",
                        transformOrigin: index === 1 ? "center right" : "center",
                      }}
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
