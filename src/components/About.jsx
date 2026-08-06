import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

const socials = [
  { icon: FiGithub, href: "https://github.com/Dhruv-Panchal145", label: "GitHub" },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/dhruv-panchal-524a2037a",
    label: "LinkedIn",
  },
  {
    icon: FiInstagram,
    href: "https://www.instagram.com/dhruv__panchal57",
    label: "Instagram",
  },
  { icon: FiMail, href: "mailto:dhruvpanchal1345@gmail.com", label: "Email" },
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-line bg-ink-900 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-paper-500">
          Know about me
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-paper-100 md:text-4xl">
          Who Am I?
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-8 space-y-5 text-balance text-[15px] leading-relaxed text-paper-300 md:text-base"
        >
          <p>
            I'm <strong className="text-paper-100">Dhruv Panchal</strong>, a
            core-focused software engineer specializing in building, securing,
            and deploying robust applications from the ground up. I bridge the
            gap between complex business logic and production-ready
            infrastructure by handling the complete development lifecycle —
            end to end.
          </p>
          <p>
            My work spans initial requirement gathering and database schema
            design with <strong className="text-paper-100">MongoDB</strong> and{" "}
            <strong className="text-paper-100">SQL</strong>, to writing clean
            backend logic with{" "}
            <strong className="text-paper-100">Node.js</strong> and{" "}
            <strong className="text-paper-100">Express.js</strong>. With a
            strong focus on system stability, I integrate secure
            authentication like <strong className="text-paper-100">JWT</strong>,
            run comprehensive security testing, and manage automated cloud
            deployments and long-term maintenance.
          </p>
          <p>
            I thrive on building resilient digital systems — ones that handle
            data smoothly and stay secure under pressure.
          </p>
        </motion.div>

        <div className="mt-9 flex items-center justify-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-paper-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
