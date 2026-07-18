import { motion } from "framer-motion";
import techStack from "../data/techstack";
import Marquee from "./Marquee";

const bandWords = [
  "DEVELOPER",
  "PROBLEM SOLVER",
  "BACKEND ENGINEER",
  "DEBUGGER",
  "SYSTEM DESIGNER",
  "SHIPPER",
];

export default function TechStack() {
  return (
    <section id="stack" className="relative border-t border-line bg-ink-900 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="text-center">
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-paper-500">
            I constantly try to improve
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-paper-100 md:text-4xl">
            My Tech Stack
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {techStack.map((row, i) => (
            <motion.div
              key={row.group}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex flex-wrap items-center justify-center gap-2.5"
            >
              {row.items.map((tech) => (
                <span
                  key={tech}
                  className="group relative flex cursor-default items-center gap-2 rounded-lg border border-line bg-ink-850 px-3.5 py-2 font-mono text-[13px] text-paper-300 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-500/60 hover:text-paper-100 hover:shadow-[0_8px_24px_-8px_rgba(69,216,201,0.35)]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-line transition-colors duration-200 group-hover:bg-cyan-400 group-hover:shadow-[0_0_6px_2px_rgba(69,216,201,0.6)]" />
                  {tech}
                </span>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 space-y-3">
        <div className="-rotate-2 border-y border-cyan-500/30 bg-gradient-to-r from-cyan-500 to-cyan-600 shadow-[0_0_40px_-10px_rgba(69,216,201,0.5)]">
          <Marquee items={bandWords} direction="left" />
        </div>
        <div className="rotate-1 border-y border-amber-400/30 bg-gradient-to-r from-amber-400 to-amber-500 shadow-[0_0_40px_-10px_rgba(240,166,46,0.45)]">
          <Marquee
            items={["MERN STACK", "REST APIS", "SECURE AUTH", "CI/CD", "CLOUD DEPLOY", "CLEAN CODE"]}
            direction="right"
          />
        </div>
      </div>
    </section>
  );
}
