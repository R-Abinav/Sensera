import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export function Team() {
  const teamMembers = [
    {
      name: "Aditya Sahoo",
      role: "Founder",
      bio: "",
      image: "/team/sahoo.jpeg",
      linkedin: "https://www.linkedin.com/in/aditya-sahoo-8ba0812b9/",
    },
    {
      name: "Aditya BR",
      role: "Co-Founder",
      bio: "",
      image: "/team/br.jpeg",
      linkedin: "https://www.linkedin.com/in/aditya-bharath-raja-rao/",
    },
    {
      name: "Akshat G",
      role: "Founding ML Engineer",
      bio: "I'm Akshat G., a third-year CS & AI undergrad at Manipal Institute of Technology Bengaluru. I explore ML, deep learning, and computer vision out of genuine curiosity — turning what I learn into beginner-friendly articles and tutorials, and gradually getting involved in research to keep that learning more structured.",
      image: "/team/akshat.jpeg",
      linkedin: "https://www.linkedin.com/in/akshat-gururaj/",
    },
    {
      name: "Pranavi Prasad",
      role: "Founding Clinical Researcher",
      bio: "I’m Pranavi, a third-year MBBS student at Shri Atal Bihari Vajpayee Medical College and Research Institute, Bangalore. I’ve always been passionate about helping people and making a meaningful difference, and I’m constantly looking for ways to contribute to a better and more compassionate world.",
      image: "/team/pranavi.jpeg",
      linkedin: "https://www.linkedin.com/in/pranavi-prasad-b473b7331/",
    },
    {
      name: "Abinav Rajagopal",
      role: "Founding Software Engineer",
      bio: "I'm Abinav, a BTech student at IIIT Kancheepuram. I work in cryptography — particularly ZK proofs and Web3 — and have a thing for hardware, building and breaking stuff to understand how it works. Scalable and distributed systems are my core interests, and I'm always down for a conversation about large system architectures.",
      image: "/team/abi.jpeg",
      linkedin: "https://www.linkedin.com/in/abinav-rajagopal-2ba65a286/",
    },
    {
      name: "Suhail",
      role: "Founding clinical researcher",
      bio: "",
      image: "/team/suhail.jpeg",
      linkedin: "#",
    },
    {
      name: "Lithin Sai Kumar",
      role: "Founding Hardware Engineer",
      bio: "",
      image: "/team/lithin.jpeg",
      linkedin: "https://www.linkedin.com/in/lithinsaikumar/",
    },
    {
      name: "Pammi Nanda",
      role: "Founding Hardware Engineer",
      bio: "",
      image: "/team/nanda.jpeg",
      linkedin: "https://www.linkedin.com/in/nanda-mitra-pammi-2b1101291/",
    },
  ];

  return (
    <section id="team" className="relative w-full">
      <div className="w-full space-y-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 text-center px-6 pt-32"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase">
            Meet the Team
          </h2>
          <p className="text-xl md:text-2xl text-white/80 w-full max-w-3xl mx-auto">
            A diverse group of experts committed to transforming healthcare.
          </p>
        </motion.div>

        <div className="relative pb-24">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="sticky transition-all duration-300 ease-in-out w-full h-screen"
              style={{
                top: 0,
                zIndex: index,
              }}
            >
              <div
                className={`w-full h-full flex flex-col justify-center rounded-none border-none ring-0 shadow-2xl ${index % 2 === 0 ? "bg-[#020617]" : "bg-[#0a0f1c]"}`}
              >
                <div
                  className={`max-w-[80rem] mx-auto flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-12 md:gap-20 w-full px-8 md:px-16`}
                >
                  <div className="flex-shrink-0 relative group w-48 md:w-64 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10 bg-secondary/20 flex items-center justify-center">
                    <div className="absolute inset-0 bg-blue-500/20 blur-[100px] group-hover:bg-blue-400/40 transition-colors duration-500 text-white z-0" />
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover w-full h-full relative z-10 transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <span className="text-8xl font-black text-white/50 relative z-10">
                        {member.name.charAt(12)}
                      </span>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 z-20 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm group/icon"
                      >
                        <Linkedin className="w-10 h-10 text-white group-hover/icon:text-[#0a66c2] transition-colors duration-300" />
                      </a>
                    </div>
                  </div>
                  <div
                    className={`space-y-3 text-center ${index % 2 !== 0 ? "md:text-left" : "md:text-left"} flex-1 overflow-hidden`}
                  >
                    <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] font-black tracking-tighter text-white uppercase leading-none whitespace-nowrap overflow-hidden text-ellipsis">
                      {member.name}
                    </h3>
                    <p className="text-sm md:text-base text-white/50 font-bold uppercase tracking-[0.2em] opacity-80">
                      {member.role}
                    </p>
                    <p className="text-xl md:text-3xl text-white/80 leading-relaxed max-w-3xl mt-6 font-medium">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
