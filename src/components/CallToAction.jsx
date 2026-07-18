import { motion } from "framer-motion";
import Particles from "./Particles";

export default function CallToAction({ onConnect }) {
  return (
    <section className="relative overflow-hidden border-t border-line bg-ink-900 py-28">
      <Particles className="opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(69,216,201,0.08),transparent)]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-balance font-display text-3xl font-semibold tracking-tight text-paper-100 md:text-5xl"
        >
          From Concept to <span className="text-cyan-400">Creation</span>
          <br />
          Let's Make It <span className="text-amber-400">Happen!</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <button
            onClick={onConnect}
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-paper-100 px-6 py-3 text-sm font-semibold text-ink-900 transition-transform hover:-translate-y-0.5"
          >
            Let's Connect
            <span className="grid h-6 w-6 place-items-center rounded-full bg-ink-900 text-paper-100 transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <p className="text-balance font-display text-xl font-semibold text-paper-100 md:text-2xl">
            I'm available for full-time roles &amp; freelance projects.
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm text-paper-300">
            I thrive on crafting dynamic web applications and delivering
            secure, production-ready systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
