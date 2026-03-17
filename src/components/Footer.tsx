import { motion } from "framer-motion";

export function Footer() {
  const footerLinks = [
    {
      title: "Platform",
      links: ["Features", "Pricing", "Integration", "Security"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Manifesto", "Contact"]
    },
    {
      title: "Resources",
      links: ["Blog", "Documentation", "Support", "Status"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
    }
  ];

  return (
    <footer id="contact" className="pt-16 pb-8 px-6 bg-[#0a0f1c] text-slate-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top links section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-24">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="flex flex-col space-y-4">
              <h4 className="font-semibold text-white tracking-wide">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col space-y-4 col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-white tracking-wide">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@sensera.in" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                  hello@sensera.in
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                  Twitter / X
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Massive brand text like CHCKN reference but fitting the Sensera theme */}
        <div className="w-full flex justify-center items-center mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[12vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 select-none"
            style={{ lineHeight: 0.85 }}
          >
            SENSERA
          </motion.h1>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 pt-8 border-t border-white/5">
          <p>© {new Date().getFullYear()} Sensera. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-medium">Care before it's too late.</p>
        </div>
      </div>
    </footer>
  );
}
