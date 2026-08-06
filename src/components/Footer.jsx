import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

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
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:items-start md:justify-between md:px-10">
        <div>
          <p className="font-display text-xl font-semibold text-paper-100">
            Dhruv Panchal
          </p>
          <p className="mt-2 max-w-xs text-sm text-paper-300">
            Engineering secure, scalable web applications — from requirement
            to production.
          </p>
          <div className="mt-5 flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-paper-500 transition-colors hover:text-cyan-400"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:text-right">
          <p className="font-semibold text-paper-100">
            Feel free to reach out for inquiries or collaborations.
          </p>
          <a
            href="mailto:dhruvpanchal1345@gmail.com"
            className="mt-2 inline-flex items-center gap-2 text-cyan-400 transition-colors hover:text-cyan-300"
          >
            dhruvpanchal1345@gmail.com
          </a>
        </div>
      </div>

      <div className="border-t border-line py-5 text-center">
        <p className="font-mono text-xs text-paper-500">
          Copyright © {new Date().getFullYear()} Dhruv Panchal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
