import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Team() {
  const teamMembers = [
    { name: "Founder 1", role: "CEO & Co-founder", initials: "F1" },
    { name: "Founder 2", role: "CTO & Co-founder", initials: "F2" },
    // Add more team members here
  ];

  return (
    <section id="team" className="py-24 px-6 relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-6xl mx-auto space-y-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Meet the Team</h2>
          <p className="text-lg text-foreground w-full max-w-2xl mx-auto">
            A diverse group of medical experts, software engineers, and hardware specialists committed to transforming healthcare.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-12">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="flex flex-col items-center space-y-4 group cursor-pointer"
            >
              <Avatar className="w-32 h-32 border-4 border-background shadow-xl group-hover:border-blue-500/50 transition-colors duration-300">
                <AvatarImage src="" />
                <AvatarFallback className="text-2xl font-semibold bg-secondary text-secondary-foreground">{member.initials}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">{member.name}</h3>
                <p className="text-foreground/80">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
