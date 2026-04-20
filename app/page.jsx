import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";

export default function LeadEXWebsite() {
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#f7f4ef]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="text-4xl font-bold text-[#ff7a00]">LeadEX</div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#f7f4ef] text-[#2b2b2b] font-sans">

      {/* NAV */}
      <div className="flex justify-between items-center px-8 py-5 border-b bg-[#f7f4ef]/80 backdrop-blur-md">
        <div className="text-2xl font-bold text-[#ff7a00]">LeadEX</div>
      </div>

      {/* HERO */}
      <div className="text-center px-8 py-24">
        <h1 className="text-5xl font-bold">
          Stop Chasing Leads. Start Closing Deals.
        </h1>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
          LeadEX helps B2B companies in Australia connect with qualified decision-makers and book sales-ready meetings.
        </p>

        <a
          href="#contact"
          className="inline-block mt-10 bg-[#ff7a00] text-white px-8 py-3 rounded-full"
        >
          Get Started <ArrowRight className="inline ml-2" />
        </a>
      </div>

      {/* WHAT WE DO */}
      <div className="px-8 py-20 bg-white">
        <h2 className="text-3xl font-bold text-center">What We Do</h2>

        <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-4 text-gray-600">
          <div className="p-4 bg-[#f7f4ef] rounded-xl">We identify your ideal clients</div>
          <div className="p-4 bg-[#f7f4ef] rounded-xl">We reach out on your behalf</div>
          <div className="p-4 bg-[#f7f4ef] rounded-xl">We qualify decision-makers</div>
          <div className="p-4 bg-[#f7f4ef] rounded-xl">We book confirmed meetings</div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="px-8 py-20">
        <h2 className="text-3xl font-bold text-center">How It Works</h2>

        <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-3 gap-6">
          {[
            "Discovery & Targeting",
            "Lead Research",
            "Outreach",
            "Qualification",
            "Booking",
            "Briefing"
          ].map((item) => (
            <div key={item} className="p-6 bg-white rounded-xl border">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* INDUSTRIES */}
      <div className="px-8 py-20 bg-[#f7f4ef]">
        <h2 className="text-3xl font-bold text-center">Industries</h2>

        <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-3 gap-4">
          {[
            "Telecom",
            "SaaS",
            "Cybersecurity",
            "Cloud Solutions",
            "VoIP",
            "Logistics"
          ].map((i) => (
            <div key={i} className="p-5 bg-white rounded-xl border border-orange-200">
              {i}
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" className="px-8 py-24 text-center bg-white">
        <h2 className="text-3xl font-bold">Contact Us</h2>

        <p className="mt-4">
          <Mail className="inline" /> info@lea-dex.com
        </p>
        <p>
          <Phone className="inline" /> 0272651399
        </p>

        <form className="mt-10 max-w-md mx-auto space-y-4">
          <input className="w-full p-3 border rounded" placeholder="Name" />
          <input className="w-full p-3 border rounded" placeholder="Email" />
          <textarea className="w-full p-3 border rounded h-24" placeholder="Message" />
          <button className="w-full bg-[#ff7a00] text-white py-3 rounded">
            Send
          </button>
        </form>
      </div>

      <div className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} LeadEX
      </div>
    </div>
  );
}
