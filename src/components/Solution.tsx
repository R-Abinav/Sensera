import { motion } from "framer-motion";
import { Brain, HeartPulse } from "lucide-react";

export function Solution() {
  const features = [
    {
      title: "Continuous Monitoring",
      description: "Integrating wearable device data with EMR/EHR through secure APIs for 24/7 health tracking."
    },
    {
      title: "AI Health Insights",
      description: "Machine learning models analyze trends in patient data to provide personalized, actionable insights."
    },
    {
      title: "Anomaly Detection",
      description: "Proactive identification of early warning signs indicating potential health deterioration."
    },
    {
      title: "Escalation Alerts",
      description: "Automated, timely notifications to family and primary responders when intervention is needed."
    }
  ];

  return (
    <section id="solution" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Proactive Intelligence.</h2>
              <p className="text-xl text-white font-medium">Empowering proactive care through technology.</p>
              <p className="text-lg text-white leading-relaxed">
                Using AI/ML models, the platform analyzes trends in the patient’s health data, provides personalized health insights, and recommends when a patient should seek medical consultation or further evaluation.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex flex-col gap-2"
                >
                  <h3 className="font-semibold text-lg text-white">{feature.title}</h3>
                  <p className="text-white text-sm md:text-base leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Abstract representation of the solution dashboard/app */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative lg:h-[600px] w-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden p-8 flex flex-col gap-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5" />
            
            {/* Mock Dashboard UI Elements */}
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div className="h-6 w-32 bg-white/10 rounded-md animate-pulse" />
              <div className="h-8 w-8 bg-blue-500/20 rounded-full animate-pulse" />
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="col-span-2 h-40 bg-white/5 rounded-xl border border-white/5 relative overflow-hidden">
                {/* Mock Chart Line */}
                <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,100 L0,50 Q25,30 50,60 T100,20 L100,100 Z" fill="rgba(59, 130, 246, 0.1)" />
                  <path d="M0,50 Q25,30 50,60 T100,20" fill="none" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2" />
                </svg>
              </div>
              <div className="h-32 bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-end">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 mb-auto flex items-center justify-center text-white">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="h-4 w-20 bg-white/10 rounded mt-2" />
                <div className="h-3 w-16 bg-white/5 rounded mt-2" />
              </div>
              <div className="h-32 bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-end">
                <div className="w-12 h-12 rounded-full bg-rose-500/20 mb-auto flex items-center justify-center text-white">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div className="h-4 w-24 bg-white/10 rounded mt-2" />
                <div className="h-3 w-12 bg-white/5 rounded mt-2" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
