import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiGithub, FiExternalLink } from "react-icons/fi";
import projects from "../data/projects";
import { useConnect } from "../components/Layout";

const accentText = { cyan: "text-cyan-400", amber: "text-amber-400" };
const accentBorder = { cyan: "border-cyan-500/40", amber: "border-amber-400/40" };

export default function ProjectDetail() {
  const { slug } = useParams();
  const { onConnect } = useConnect();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-40 text-center">
        <p className="font-mono text-sm text-paper-500">404</p>
        <h1 className="mt-2 font-display text-2xl font-semibold text-paper-100">
          Project not found
        </h1>
        <Link
          to="/#work"
          className="mt-6 inline-flex items-center gap-2 text-cyan-400"
        >
          <FiArrowLeft /> Back to work
        </Link>
      </div>
    );
  }

  const accent = accentText[project.accent] ?? accentText.cyan;
  const border = accentBorder[project.accent] ?? accentBorder.cyan;

  const secondaryLinks = [
    project.links.githubSecondary && {
      href: project.links.githubSecondary,
      label: project.links.githubSecondaryLabel,
    },
    project.links.githubTertiary && {
      href: project.links.githubTertiary,
      label: project.links.githubTertiaryLabel,
    },
    project.links.liveSecondary && {
      href: project.links.liveSecondary,
      label: project.links.liveSecondaryLabel,
    },
  ].filter(Boolean);

  return (
    <article className="pt-28">
      <header className="relative overflow-hidden border-b border-line">
        <div className="blueprint-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-16 md:px-10">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-paper-500 transition-colors hover:text-cyan-400"
          >
            <FiArrowLeft size={14} /> Back to work
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mt-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-paper-500">
              <span className={`flex items-center gap-1.5 ${accent}`}>
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {project.status}
              </span>
              <span>·</span>
              <span>{project.year}</span>
              <span>·</span>
              <span>{project.tag}</span>
            </div>

            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-paper-100 md:text-5xl">
              {project.name}
            </h1>
            <p className="mt-4 max-w-2xl text-balance text-base leading-relaxed text-paper-300">
              {project.summary}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-paper-100 px-5 py-2.5 text-sm font-semibold text-ink-900"
              >
                Check it live <FiExternalLink size={15} />
              </a>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium text-paper-100 transition-colors hover:text-paper-100 ${border}`}
              >
                <FiGithub size={15} /> Source
              </a>
            </div>

            {secondaryLinks.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-xs text-paper-500">
                {secondaryLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-line underline-offset-4 transition-colors hover:text-cyan-400"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </header>

      <div className="mx-auto grid max-w-4xl gap-14 px-6 py-16 md:grid-cols-[1fr_240px] md:px-10">
        <div>
          <section>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-500">
              Overview
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-paper-300">
              {project.description}
            </p>
          </section>

          <section className="mt-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-500">
              Features
            </p>
            <ul className="mt-4 space-y-3">
              {project.features.map((f) => (
                <li key={f} className="flex gap-3 text-[15px] leading-relaxed text-paper-300">
                  <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.replace("text-", "bg-")}`} />
                  {f}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-500">
              Tech stack
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="rounded border border-line px-2 py-1 font-mono text-[11px] text-paper-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-line bg-ink-850 p-5">
            <p className="font-display text-sm font-semibold text-paper-100">
              Want something like this built?
            </p>
            <button
              onClick={onConnect}
              className="mt-3 w-full rounded-full bg-paper-100 py-2.5 text-sm font-semibold text-ink-900"
            >
              Let's talk
            </button>
          </div>
        </aside>
      </div>
    </article>
  );
}
