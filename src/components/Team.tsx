import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Team() {
  const teamMembers = Array.from({ length: 9 }).map((_, i) => ({
    name: `Team Member ${i + 1}`,
    role: "Placeholder Role",
    bio: "This is a placeholder bio describing the team member's expertise and their contribution to the mission of transforming healthcare.",
    image: `https://i.pravatar.cc/150?u=${i + 10}`
  }));

  return (
    <section id="team" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Meet the Team</h2>
          <p className="text-lg text-foreground w-full max-w-2xl mx-auto">
            A diverse group of experts committed to transforming healthcare.
          </p>
        </motion.div>

        <div className="relative pb-24">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="sticky transition-all duration-300 ease-in-out"
              style={{
                top: `calc(100px + ${index * 2}rem)`,
                zIndex: index,
              }}
            >
              <Card className="w-full bg-black/60 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden p-6 md:p-10 mb-8 transform-gpu" style={{
                transform: `scale(${1 - (teamMembers.length - 1 - index) * 0.02})`,
                opacity: 1,
              }}>
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <div className="flex-shrink-0">
                    <Avatar className="w-32 h-32 md:w-48 md:h-48 border-4 border-white/10 shadow-xl">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="text-3xl bg-secondary text-foreground">{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="space-y-4 text-center md:text-left flex-1">
                    <h3 className="text-2xl md:text-4xl font-bold tracking-tight">{member.name}</h3>
                    <p className="text-xl text-blue-400 font-medium">{member.role}</p>
                    <p className="text-lg text-foreground/80 leading-relaxed mt-4">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
