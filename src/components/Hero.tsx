import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
      
      {/* Background gradients for abstract aesthetic */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute bg-blue-500/20 w-96 h-96 blur-[120px] rounded-full top-1/4 left-1/4" />
      <div className="absolute bg-indigo-500/20 w-[30rem] h-[30rem] blur-[150px] rounded-full bottom-1/4 right-1/4" />
      
      <div className="z-10 max-w-4xl space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Care before it's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">too late.</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground font-medium max-w-2xl mx-auto">
            Building systems that can detect early warning signs and ensure help arrives when it matters most.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative max-w-3xl mx-auto mt-16 p-8 md:p-12 rounded-2xl bg-secondary/30 border border-white/10 backdrop-blur-sm"
        >
          <div className="absolute -top-6 -left-6 text-6xl text-blue-500/20">"</div>
          <p className="text-lg md:text-xl font-medium leading-relaxed italic text-foreground/90">
            I started this with a simple thought — what if care reached people before it was too late?
          </p>
          <p className="mt-4 text-base md:text-lg text-foreground/80 leading-relaxed italic">
            My grandfather suffered a stroke and didn’t receive medical attention in time. That experience stayed with me. It made me realise how often critical moments are missed — not because treatment doesn’t exist, but because it doesn’t reach in time.
          </p>
          <p className="mt-6 text-sm font-semibold tracking-widest uppercase text-blue-400">
            — Founder
          </p>
        </motion.div>
      </div>
    </section>
  );
}
