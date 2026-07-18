import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="relative border-t border-line bg-ink-900 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="text-center">
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-paper-500">
            Selected work
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-paper-100 md:text-4xl">
            Things I've Shipped
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-paper-300">
            Three full-stack builds, each split across real services — not
            single-file demos.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
