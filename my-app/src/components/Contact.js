import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMapPin,
  FiCalendar,
  FiTerminal,
  FiMessageSquare,
  FiFileText,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const LINKEDIN_URL = "https://linkedin.com/in/nima-norouzi-28b63a237/";
const GITHUB_URL = "https://github.com/Nimanoro";
const INSTAGRAM_URL = "https://instagram.com/nima_.norouzi";
const RESUME_URL = "/Resume.png";

const fUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.19, 1, 0.22, 1] },
  },
};

function ActionCard({ href, icon: Icon, title, subtitle, variant = "dark" }) {
  const base =
    "group w-full rounded-2xl border transition-all duration-500 p-8 flex items-center justify-between gap-6 overflow-hidden relative";
  
  const styles =
    variant === "primary"
      ? [
          "bg-[#0d0d0d] text-white border-green-500/40",
          "hover:border-green-400 hover:bg-green-500/[0.03]",
          "shadow-[0_0_20px_rgba(34,197,94,0.1)] hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]",
        ].join(" ")
      : [
          "bg-[#0d0d0d] text-white border-gray-900",
          "hover:border-gray-700 hover:bg-white/[0.02]",
        ].join(" ");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        base,
        styles,
        "focus:outline-none focus:ring-2 focus:ring-green-500/40",
      ].join(" ")}
    >
      {/* Background radial highlight for the primary card */}
      {variant === "primary" && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent_70%)] pointer-events-none" />
      )}

      <div className="flex items-center gap-4 min-w-0 relative z-10">
        <div
          className={[
            "h-12 w-12 rounded-xl flex items-center justify-center border shrink-0 transition-all duration-300",
            variant === "primary"
              ? "bg-green-500/10 border-green-500/30 group-hover:bg-green-500 group-hover:border-green-500"
              : "bg-black/30 border-gray-800/70",
          ].join(" ")}
        >
          <Icon
            className={[
              "w-5 h-5 transition-colors",
              variant === "primary" ? "text-green-400 group-hover:text-black" : "text-gray-500 group-hover:text-green-500",
            ].join(" ")}
          />
        </div>

        <div className="min-w-0">
          <div className="text-lg sm:text-xl font-black tracking-tighter uppercase transition-colors group-hover:text-green-400">
            {title}
          </div>
          <div
            className={[
              "text-[10px] font-bold uppercase tracking-[0.2em] transition-colors",
              variant === "primary" ? "text-green-500/70" : "text-gray-500",
            ].join(" ")}
          >
            {subtitle}
          </div>
        </div>
      </div>

      <FiArrowUpRight className="w-5 h-5 shrink-0 opacity-40 group-hover:opacity-100 group-hover:text-green-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all relative z-10" />
    </a>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050505] text-[#EDEDED] py-28 px-6 lg:px-16 min-h-screen font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20 border-l-2 border-green-500 pl-10"
        >
          <div className="inline-flex items-center gap-2 mb-6 text-green-500 font-mono text-xs uppercase tracking-widest">
            <FiTerminal />
            <span>CONTACT_SYNC</span>
          </div>

          <h1 className="text-6xl sm:text-8xl font-black tracking-tighter mb-7 uppercase leading-[0.9]">
            Let's <br />
            <span className="text-gray-700">connect.</span>
          </h1>

          <p className="text-gray-400 text-xl sm:text-2xl max-w-2xl leading-relaxed font-medium">
            Currently vetting Summer 2026 SWE internships. If you want to discuss backend 
            architecture, ML pipelines, or system performance, LinkedIn is the most direct route.
          </p>
        </motion.div>

        {/* --- Layout Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Details */}
          <motion.div
            variants={fUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-5 bg-[#0d0d0d] border border-gray-900 rounded-2xl p-10 flex flex-col justify-between"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FiMapPin className="text-green-500 w-4 h-4" />
                  <span className="text-[11px] text-gray-500 uppercase font-bold tracking-[0.2em]">
                    Location
                  </span>
                </div>
                <p className="text-xl text-white font-bold uppercase tracking-tight">
                  Vancouver, BC
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FiCalendar className="text-green-500 w-4 h-4" />
                  <span className="text-[11px] text-gray-500 uppercase font-bold tracking-[0.2em]">
                    Availability
                  </span>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-bold uppercase tracking-tight">
                  Summer 2026 <br />
                  Backend / ML / Systems
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-900/50">
                <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                    UBC_CS_SENIOR // ENGR_COOP_ACTIVE
                </span>
            </div>
          </motion.div>

          {/* Right: Actions */}
          <motion.div
            variants={fUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Primary Action: LinkedIn with Glow */}
            <ActionCard
              href={LINKEDIN_URL}
              icon={FiMessageSquare}
              title="Message on LinkedIn"
              subtitle="Direct route for inquiries"
              variant="primary"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ActionCard
                href={RESUME_URL}
                icon={FiFileText}
                title="Resume"
                subtitle="Technical History"
              />
              <ActionCard
                href={GITHUB_URL}
                icon={FiGithub}
                title="GitHub"
                subtitle="Source Code"
              />
            </div>

            {/* Social Row */}
            <div className="bg-[#0d0d0d] border border-gray-900 rounded-2xl p-10">
              <span className="text-[11px] text-gray-500 uppercase font-bold tracking-[0.2em] block mb-7">
                Social_Verification
              </span>

              <div className="flex flex-wrap gap-5 items-center">
                <SocialIcon
                  url={LINKEDIN_URL}
                  bgColor="transparent"
                  fgColor="#22C55E"
                  className="hover:scale-110 transition-transform !h-12 !w-12 border border-gray-800 rounded-full"
                />
                <SocialIcon
                  url={GITHUB_URL}
                  bgColor="transparent"
                  fgColor="#22C55E"
                  className="hover:scale-110 transition-transform !h-12 !w-12 border border-gray-800 rounded-full"
                />
                <SocialIcon
                  url={INSTAGRAM_URL}
                  bgColor="transparent"
                  fgColor="#22C55E"
                  className="hover:scale-110 transition-transform !h-12 !w-12 border border-gray-800 rounded-full"
                />
              </div>

              <div className="mt-8 flex items-center gap-3 text-gray-600 text-[11px] font-bold uppercase tracking-tight">
                <FiLinkedin className="w-4 h-4 text-green-500/50" />
                <span>
                  Recruiters: Include role, location, and timeline.
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- Footer Status --- */}
        <div className="mt-20 text-center">
          <p className="font-mono text-[10px] text-gray-700 uppercase tracking-[0.5em]">
            Connection: Stable // Updated: Jan 2026
          </p>
        </div>
      </div>
    </section>
  );
}