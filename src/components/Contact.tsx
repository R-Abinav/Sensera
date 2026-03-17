import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Construct mailto link
    const subject = encodeURIComponent(`New Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );
    const mailtoLink = `mailto:r.invictus1712@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    setStatus("success");

    // Reset status after a few seconds
    setTimeout(() => {
      setStatus("idle");
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 md:py-32 bg-[#0a0f1e]"
    >
      <div className="max-w-3xl mx-auto px-6 w-full flex flex-col items-center">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-[#4EECD4] text-4xl md:text-5xl font-bold uppercase tracking-[0.15em]">
            Get In Touch
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-normal">
            Whether you're a clinician, patient, or partner — we'd love to hear
            from you.
          </p>
        </div>

        <div className="w-full bg-[rgba(30,30,30,0.6)] backdrop-blur-[16px] border border-[#333333] p-8 md:p-12 rounded-[16px] shadow-2xl relative">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-white/90 tracking-wide uppercase"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#1e1e1e]/50 border border-[#444444] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#4EECD4] focus:ring-1 focus:ring-[#4EECD4] transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-white/90 tracking-wide uppercase"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#1e1e1e]/50 border border-[#444444] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#4EECD4] focus:ring-1 focus:ring-[#4EECD4] transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-white/90 tracking-wide uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#1e1e1e]/50 border border-[#444444] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#4EECD4] focus:ring-1 focus:ring-[#4EECD4] transition-all resize-y"
                placeholder="How can we help you?"
              />
            </div>

            <div className="mt-6 flex flex-col items-center">
              <Button
                type="submit"
                className="w-full max-w-xs h-12 rounded-full text-[13px] sm:text-sm font-semibold tracking-[0.1em] bg-white text-black hover:bg-neutral-200 transition-colors uppercase shadow-none border border-transparent cursor-pointer"
              >
                {status === "success" ? "Sent Successfully!" : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
