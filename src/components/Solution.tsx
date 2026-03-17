import { motion } from "framer-motion";
import stethBg from "../assets/no_bg_steth.png";

export function Solution() {
  const features = [
    {
      title: "Continuous Monitoring",
      description:
        "Integrating wearable device data with EMR/EHR through secure APIs for 24/7 health tracking.",
    },
    {
      title: "AI Health Insights",
      description:
        "Machine learning models analyze trends in patient data to provide personalized, actionable insights.",
    },
    {
      title: "Anomaly Detection",
      description:
        "Proactive identification of early warning signs indicating potential health deterioration.",
    },
    {
      title: "Escalation Alerts",
      description:
        "Automated, timely notifications to family and primary responders when intervention is needed.",
    },
  ];

  return (
    <section
      id="solution"
      className="py-24 px-6 relative overflow-hidden bg-black"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Proactive Intelligence.
              </h2>
              <p className="text-[1.15rem] leading-[1.85] text-white/[0.85] font-normal">
                Empowering proactive care through technology.
              </p>
              <p className="text-[1.15rem] leading-[1.85] text-white/[0.85] font-normal">
                Using AI/ML models, the platform analyzes trends in the
                patient’s health data, provides personalized health insights,
                and recommends when a patient should seek medical consultation
                or further evaluation.
              </p>
            </div>

            <div className="space-y-8 mt-12">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex flex-col gap-2"
                >
                  <h3 className="font-semibold text-xl text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-white/[0.85] text-[1.15rem] leading-[1.85] font-normal">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-full flex items-center justify-center pt-12 lg:pt-0"
          >
            <img
              src={stethBg}
              alt="Stethoscope"
              className="w-full max-w-none object-contain bg-transparent drop-shadow-2xl"
              style={{ transform: "scale(1.4)", transformOrigin: "center left", maxHeight: "1000px" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
