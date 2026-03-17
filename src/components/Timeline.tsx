import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle } from "lucide-react";

export function Timeline() {
  const timelineData = [
    {
      phase: "Phase 1",
      timeline: "0–1 month",
      title: "Concept & Team Formation",
      status: "current",
      goal: "Define the product and organize teams",
      tasks: [
        "Finalize problem statement",
        "Define core features (monitoring, alerts, AI insights)",
        "Assign Medical, Software, and Hardware teams",
        "Identify existing wearable APIs for initial integration",
      ],
      deliverable: "Concept note + product roadmap",
    },
    {
      phase: "Phase 2",
      timeline: "1–3 months",
      title: "Parallel Development",
      status: "upcoming",
      goal: "Build the first software platform",
      track: "Software Track",
      tasks: [
        "Integration with existing wearable APIs",
        "Health monitoring dashboard",
        "AI anomaly detection",
        "Escalation alerts integration",
      ],
      deliverable: "Alpha Software Release",
    },
  ];

  return (
    <section id="timeline" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Startup Development Timeline
          </h2>
          <p className="text-lg text-white w-full max-w-2xl mx-auto">
            How we are approaching product development and execution.
          </p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:space-y-12 space-y-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative pl-8 md:pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3.5 md:-left-4 top-1 bg-background rounded-full">
                {item.status === "current" ? (
                  <CheckCircle2 className="w-7 h-7 md:w-8 md:h-8 text-white animate-pulse" />
                ) : (
                  <Circle className="w-7 h-7 md:w-8 md:h-8 text-white/50" />
                )}
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold text-white">
                    {item.phase} — {item.title}
                  </h3>
                  <Badge
                    variant={
                      item.status === "current" ? "default" : "secondary"
                    }
                  >
                    {item.timeline}
                  </Badge>
                  {item.status === "current" && (
                    <Badge
                      variant="outline"
                      className="border-white/50 text-white"
                    >
                      Current Phase
                    </Badge>
                  )}
                </div>

                <div className="p-6 bg-background/50 border border-white/5 rounded-xl space-y-4 backdrop-blur-sm shadow-lg">
                  <div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-white">
                      Goal
                    </span>
                    <p className="text-lg font-normal text-white mt-1">
                      {item.goal}
                    </p>
                  </div>

                  {item.track && (
                    <div className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium mt-2">
                      {item.track}
                    </div>
                  )}

                  <div className="pt-2">
                    <span className="text-sm font-semibold uppercase tracking-wider text-white">
                      Tasks
                    </span>
                    <ul className="mt-2 space-y-2">
                      {item.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start text-white">
                          <span className="mr-2 text-white font-bold">•</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <span className="text-sm font-semibold uppercase tracking-wider text-white">
                      Deliverable
                    </span>
                    <p className="font-normal text-white mt-1">
                      {item.deliverable}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
