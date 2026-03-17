import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Problem() {
  const problems = [
    {
      title: "Delayed Recognition",
      description:
        "Critical deterioration often goes unnoticed until it becomes an emergency, reducing the window for effective intervention.",
    },
    {
      title: "Disconnected Care",
      description:
        "Patients' health status isn't continuously monitored outside clinical settings, leading to fragmented care and missed warning signs.",
    },
    {
      title: "Communication Gaps",
      description:
        "Family members and primary responders are often the last to know when a patient's health declines unexpectedly.",
    },
  ];

  return (
    <section id="problem" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            The Problem We Are Solving
          </h2>
          <p className="text-lg text-white leading-relaxed">
            Our platform addresses delays in recognising deterioration of
            patients' health status and promptly notifies family members and
            primary responders to ensure the patient gets timely medical
            attention.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <Card className="h-full bg-background/50 backdrop-blur-sm border-white/5 hover:border-white/20 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-white">
                    {problem.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white">{problem.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
