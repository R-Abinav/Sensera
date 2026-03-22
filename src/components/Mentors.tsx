import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export function Mentors() {
  const mentorMembers = [
    {
      name: "Dr. Ashok Shenoy",
      role: "Faculty Mentor",
      bio: "Professor of Pharmacology at Kasturba Medical College, Mangalore. Experienced clinician and educator with a demonstrated history in Clinical Research, Pharmacology, Clinical Trials, and Bioethics.",
      image: "/team/ashok_faculty.jpeg",
      linkedin: "https://www.linkedin.com/in/ashok-s-302a4955/",
    },{
name: "Dr. Bharath MS",
      role: "Faculty Mentor",
      bio: "",
      image: "",
      linkedin: "",
    },
    {
      name: "Dr. Bharath MS",
      role: "Faculty Mentor",
      bio: "Associate Professor, Department of General Medicine, Bowring and Lady Curzon Hospital",
      image: "",
      linkedin: "",
    },
  ];

  return (
    <section id="mentors" className="relative w-full">
      <div className="w-full space-y-16 md:space-y-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 text-center px-6 pt-20 md:pt-32"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black uppercase">
            Advisors & Mentors
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-black/80 w-full max-w-3xl mx-auto">
            Guiding our vision with decades of clinical and domain expertise.
          </p>
        </motion.div>

        <div className="relative pb-16 md:pb-24">
          {mentorMembers.map((member, index) => (
            <div
              key={index}
              className="sticky transition-all duration-300 ease-in-out w-full min-h-screen flex justify-center items-center bg-white border-t border-neutral-200 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.08)] rounded-t-[2.5rem]"
              style={{ top: 0, zIndex: index }}
            >
              <div
                className={`max-w-[80rem] mx-auto flex flex-col ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                } items-center justify-between gap-8 md:gap-20 w-full px-6 sm:px-8 md:px-16 py-12 md:py-0`}
              >
                {/* Photo */}
                <div className="flex-shrink-0 relative group w-36 sm:w-48 md:w-64 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10 bg-secondary/20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-blue-500/20 blur-[100px] group-hover:bg-blue-400/40 transition-colors duration-500 text-black z-0" />
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full relative z-10 transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span className="text-6xl md:text-8xl font-semibold text-black/50 relative z-10">
                      {member.name.charAt(0)}
                    </span>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 z-20 bg-transparent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm group/icon"
                    >
                      <Linkedin className="w-7 h-7 md:w-10 md:h-10 text-black group-hover/icon:text-[#0a66c2] transition-colors duration-300" />
                    </a>
                  </div>
                </div>

                {/* Text */}
                <div className="space-y-3 md:space-y-4 text-center md:text-left flex-1 overflow-hidden">
                  <h3 className="text-2xl sm:text-3xl md:text-[2rem] font-semibold tracking-tighter text-black uppercase leading-[1.2]">
                    {member.name}
                  </h3>
                  <p className="font-['Cormorant_SC'] text-xs sm:text-sm md:text-base text-black/80 font-normal uppercase tracking-[0.25em]">
                    {member.role}
                  </p>
                  <p className="text-[0.95rem] sm:text-[1.15rem] text-black/80 leading-[1.9] max-w-3xl mt-4 md:mt-6 font-normal">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
