import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Particles from "./Particles";

export default function Hero({ onConnect }) {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink-900 pt-24">
      <div className="absolute inset-0 blueprint-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_35%,black,transparent)]" />
      <Particles className="opacity-70" />

      {/* corner brackets — schematic framing */}
      <div className="pointer-events-none absolute inset-6 hidden border border-line/0 md:block">
        <span className="absolute left-0 top-0 h-8 w-8 border-l border-t border-cyan-500/30" />
        <span className="absolute right-0 top-0 h-8 w-8 border-r border-t border-cyan-500/30" />
        <span className="absolute bottom-0 left-0 h-8 w-8 border-b border-l border-cyan-500/30" />
        <span className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-cyan-500/30" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-6 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-ink-800/60 px-4 py-1.5 font-mono text-[12px] uppercase tracking-widest text-cyan-400"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(69,216,201,0.6)]" />
          Ahmedabad · Full Stack Engineer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance font-display text-[clamp(2.1rem,5.4vw,4rem)] font-semibold leading-[1.08] tracking-tight text-paper-100"
        >
          Engineering secure, scalable
          <br className="hidden sm:block" /> web applications from{" "}
          <span className="text-cyan-400">requirement</span> to{" "}
          <span className="text-amber-400">production</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-balance text-base text-paper-300 md:text-lg"
        >
          Turning complex requirements into secure, optimized, production-ready
          digital infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 flex items-center justify-center gap-2 font-mono text-sm text-paper-300"
        >
          <span className="text-paper-500">Right now, working as a</span>
          <TypeAnimation
            sequence={[
              "Technical Analyst",
              2200,
              "Core Backend Developer",
              2200,
            ]}
            wrapper="span"
            speed={40}
            deletionSpeed={55}
            repeat={Infinity}
            className="font-semibold text-cyan-400"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={onConnect}
            className="group inline-flex items-center gap-2 rounded-full bg-paper-100 px-6 py-3 text-sm font-semibold text-ink-900 transition-transform hover:-translate-y-0.5"
          >
            Let's Connect
            <span className="grid h-6 w-6 place-items-center rounded-full bg-ink-900 text-paper-100 transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </button>
          <a
            href="#work"
            className="rounded-full border border-line px-6 py-3 text-sm font-medium text-paper-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
          >
            View Work
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 font-mono text-xs uppercase tracking-widest text-paper-500"
        >
          Available for new projects &amp; full-time roles
        </motion.p>
      </div>
    </section>
  );
}
