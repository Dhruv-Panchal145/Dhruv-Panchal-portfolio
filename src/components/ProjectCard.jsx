import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

const accentMap = {
  cyan: {
    ring: "group-hover:border-cyan-500/60",
    glow: "group-hover:shadow-[0_20px_60px_-20px_rgba(69,216,201,0.4)]",
    text: "text-cyan-400",
    dot: "bg-cyan-400",
  },
  amber: {
    ring: "group-hover:border-amber-400/60",
    glow: "group-hover:shadow-[0_20px_60px_-20px_rgba(240,166,46,0.4)]",
    text: "text-amber-400",
    dot: "bg-amber-400",
  },
};

export default function ProjectCard({ project, index }) {
  const a = accentMap[project.accent] ?? accentMap.cyan;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className={`group relative overflow-hidden rounded-2xl border border-line bg-ink-850 transition-all duration-300 ${a.ring} ${a.glow}`}
    >
      {/* schematic corner ticks */}
      <span className="absolute left-3 top-3 z-10 h-3 w-3 border-l border-t border-paper-500/40" />
      <span className="absolute right-3 top-3 z-10 h-3 w-3 border-r border-t border-paper-500/40" />

      <Link to={`/work/${project.slug}`} className="block">
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-line bg-[linear-gradient(135deg,#111826,#0A0E15)] p-8">
          <div className="blueprint-grid absolute inset-0 opacity-40" />
          <div className="relative text-center">
            <p className="font-display text-3xl font-semibold tracking-tight text-paper-100/90">
              {project.name}
            </p>
            <p className={`mt-2 font-mono text-[11px] uppercase tracking-[0.2em] ${a.text}`}>
              {project.tag}
            </p>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-paper-500">
            <span className="flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
              {project.status}
            </span>
            <span>{project.year}</span>
          </div>

          <h3 className="font-display text-xl font-semibold text-paper-100">
            {project.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-paper-300">
            {project.summary}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded border border-line px-2 py-0.5 font-mono text-[10.5px] text-paper-500"
              >
                {t}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="rounded border border-line px-2 py-0.5 font-mono text-[10.5px] text-paper-500">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </div>
      </Link>

      <div className="flex items-center gap-3 border-t border-line px-6 py-4">
        <Link
          to={`/work/${project.slug}`}
          className={`inline-flex items-center gap-1 text-sm font-medium text-paper-100 transition-colors hover:${a.text}`}
        >
          Case study <FiArrowUpRight size={15} />
        </Link>
        <span className="text-line">/</span>
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-paper-300 transition-colors hover:text-paper-100"
        >
          <FiGithub size={15} /> Code
        </a>
      </div>
    </motion.article>
  );
}
