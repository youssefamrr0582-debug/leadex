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
          <div className="text-4xl font-bold text-[#ff7a00] tracking-wide">LeadEX</div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#f7f4ef] text-[#2b2b2b] font-sans leading-relaxed relative overflow-hidden">

      {/* FLOATING ORANGE 3D EFFECT (HYBRID PARALLAX UPGRADE) */}
      <div
        className="fixed top-20 left-10 w-72 h-72 bg-[#ff7a00]/25 rounded-full blur-3xl"
        style={{ transform: `translate3d(${scrollY * 0.05 + 20}px, ${scrollY * 0.1}px, 0)` }}
      />

      <div
        className="fixed bottom-20 right-10 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl"
        style={{ transform: `translate3d(${-scrollY * 0.05}px, ${-scrollY * 0.08}px, 0)` }}
      />

      <div
        className="fixed top-1/2 left-1/2 w-96 h-96 bg-[#ff7a00]/10 rounded-full blur-3xl"
        style={{ transform: `translate3d(${scrollY * 0.02}px, ${-scrollY * 0.02}px, 0) translate(-50%, -50%)` }}
      />

      {/* NAV */}
      <div className="sticky top-0 z-50 flex justify-between items-center px-8 py-5 border-b bg-[#f7f4ef]/80 backdrop-blur-md border-gray-200">
        <div className="text-2xl font-bold text-[#ff7a00]">LeadEX</div>
        <div className="hidden md:flex gap-6 text-sm text-gray-700">
          <a href="#services" className="hover:text-[#ff7a00]">What We Do</a>
          <a href="#process" className="hover:text-[#ff7a00]">How It Works</a>
          <a href="#industries" className="hover:text-[#ff7a00]">Industries</a>
          <a href="#contact" className="hover:text-[#ff7a00]">Contact</a>
        </div>
      </div>

      {/* HERO */}
      <div className="px-8 py-20 text-center relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Stop Chasing Leads. Start Closing Deals.
        </motion.h1>

        <motion.p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          LeadEX helps B2B companies in Australia connect directly with qualified decision-makers and turn conversations into real revenue. We deliver sales-ready meetings with CEOs, founders, IT managers, and operations managers through structured outreach, qualification, and appointment setting.
        </motion.p>

        <motion.p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We handle the full process — from targeting and outreach to booking and briefing — so your sales team focuses only on closing deals.
        </motion.p>

        <motion.a
          href="#contact"
          className="inline-block mt-10 bg-[#ff7a00] text-white px-8 py-3 rounded-full shadow-md hover:scale-105 transition"
        >
          Get Started <ArrowRight size={16} className="inline ml-2" />
        </motion.a>
      </div>

      {/* WHAT WE DO */}
      <div id="services" className="px-8 py-20 bg-white relative">
        <h2 className="text-3xl font-bold text-center">What We Do</h2>
        <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-6 text-gray-600">
          <div className="p-4 rounded-xl bg-[#f7f4ef]">We identify your ideal clients</div>
          <div className="p-4 rounded-xl bg-[#f7f4ef]">We reach out on your behalf</div>
          <div className="p-4 rounded-xl bg-[#f7f4ef]">We engage and qualify leads</div>
          <div className="p-4 rounded-xl bg-[#f7f4ef]">We filter only real opportunities</div>
          <div className="p-4 rounded-xl bg-[#f7f4ef]">We book confirmed meetings</div>
          <div className="p-4 rounded-xl bg-[#f7f4ef]">We manage scheduling</div>
          <div className="p-4 rounded-xl bg-[#ffedd5] md:col-span-2 font-semibold text-center">
            We deliver sales-ready appointments
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div id="process" className="px-8 py-28 bg-white">
        <h2 className="text-3xl font-bold text-center">How It Works</h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          A structured outbound system designed to turn outreach into qualified, sales-ready meetings.
        </p>

        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "Discovery & Targeting", desc: "We define your ICP and ideal decision-makers." },
            { title: "Lead Research", desc: "We build a verified list of relevant companies and contacts." },
            { title: "Outreach", desc: "We contact decision-makers through calls and email campaigns." },
            { title: "Qualification", desc: "We confirm interest, need, and budget." },
            { title: "Booking", desc: "We schedule confirmed meetings into your calendar." },
            { title: "Briefing", desc: "We send you all key info before each meeting." },
            { title: "Delivery", desc: "We deliver sales-ready meetings only." }
          ].map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-[#f7f4ef] border border-orange-200 shadow-sm hover:shadow-md hover:border-[#ff7a00] transition"
            >
              <p className="text-lg font-semibold text-gray-800">
                <span className="text-[#ff7a00]">●</span> {item.title}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* INDUSTRIES */}
      <div id="industries" className="px-4 md:px-8 py-20 md:py-28 bg-[#f7f4ef] relative overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Industries</h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          We work across high-value B2B sectors where decision-makers respond to structured outreach.
        </p>

        <div className="max-w-6xl mx-auto mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { name: "Telecom", desc: "High-volume B2B decision-maker outreach" },
            { name: "SaaS", desc: "Pipeline generation for subscription-based platforms" },
            { name: "Cybersecurity", desc: "Targeting IT leaders and enterprise buyers" },
            { name: "Cleaning Services", desc: "Local & commercial contract acquisition" },
            { name: "Logistics & Warehousing", desc: "Operations-driven lead qualification" },
            { name: "Business Mobile", desc: "SME and enterprise telecom solutions" },
            { name: "Cloud Solutions", desc: "B2B infrastructure and cloud decision-makers" },
            { name: "Platforms", desc: "SaaS and digital platform growth outreach" },
            { name: "VoIP", desc: "Communication systems & enterprise calling solutions" },
            { name: "Internet Services", desc: "ISP and connectivity business acquisition" }
          ].map((i) => (
            <div
              key={i.name}
              className="p-5 md:p-8 rounded-2xl bg-white border border-orange-200 shadow-sm hover:shadow-md hover:border-[#ff7a00] transition"
            >
              <p className="text-base md:text-lg font-semibold text-gray-800">
                <span className="text-[#ff7a00]">●</span> {i.name}
              </p>
              <p className="text-xs md:text-sm text-gray-500 mt-2">
                {i.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* QUALITY */}
      <div className="px-8 py-24">
        <h2 className="text-3xl font-bold text-center">Quality Control</h2>
        <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-4">
          {[
            "We verify every lead before booking",
            "We confirm decision-maker authority",
            "We review all conversations",
            "We ensure only sales-ready meetings",
            "We continuously optimize performance"
          ].map((q, i) => (
            <div
              key={i}
              className={`p-5 rounded-xl shadow-sm border ${i % 2 === 0 ? "bg-white border-orange-200" : "bg-[#fff7ed] border-orange-300"}`}
            >
              {q}
            </div>
          ))}
        </div>
      </div>

      {/* CASE STUDY */}
      <div className="px-8 py-24 bg-white">
        <h2 className="text-3xl font-bold text-center">Case Study</h2>
        <div className="max-w-4xl mx-auto mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#fff7ed] to-[#ffedd5] shadow">
          We helped a B2B service provider increase qualified sales meetings by delivering targeted decision-maker appointments. Their team shifted from cold outreach to closing only pre-qualified opportunities, improving conversion and efficiency.
        </div>
      </div>

      {/* PRICING */}
      <div className="px-8 py-24">
        <h2 className="text-3xl font-bold text-center">Pricing</h2>

        <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white shadow border">
            <p className="font-semibold">Custom Strategy</p>
            <p className="mt-3 text-gray-600">
              Our pricing is fully customized based on your requirements, including your target criteria, number of users/seats, and expected lead volume.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#fff7ed] shadow border">
            <p className="font-semibold">Tailored Solution</p>
            <p className="mt-3 text-gray-600">
              Every campaign is different. We design a strategy around your market, offer, and sales process to ensure maximum conversion potential.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#ffedd5] shadow border font-semibold">
            <p className="font-semibold">No Fixed Packages</p>
            <p className="mt-3 text-gray-600 font-normal">
              We don’t use fixed packages because every market, offer, and sales process requires a different approach.
            </p>
          </div>
        </div>

        <p className="text-center mt-10 font-semibold text-[#ff7a00]">
          Contact us to request a tailored quote.
        </p>
      </div>

      {/* GUARANTEE */}
      <div className="px-8 py-24 bg-white">
        <h2 className="text-3xl font-bold text-center">Guarantee</h2>
        <div className="max-w-4xl mx-auto mt-12 space-y-4 text-center">
          <div className="p-4 bg-[#ecfdf5] rounded-xl">We replace unqualified meetings</div>
          <div className="p-4 bg-[#fff7ed] rounded-xl">70%+ show-up guarantee</div>
          <div className="p-4 bg-[#ffedd5] rounded-xl">Credit or extra meetings if needed</div>
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" className="px-8 py-24 text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <div className="mt-6">
          <p><Mail className="inline" /> info@lea-dex.com</p>
          <p><Phone className="inline" /> 0272651399</p>
        </div>

        <form className="mt-10 max-w-xl mx-auto space-y-4">
          <input className="w-full p-3 border rounded" placeholder="Name" />
          <input className="w-full p-3 border rounded" placeholder="Email" />
          <textarea className="w-full p-3 border rounded h-32" placeholder="Message" />
          <button className="w-full bg-[#ff7a00] text-white py-3 rounded hover:scale-105 transition">
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
