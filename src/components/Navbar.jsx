import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const links = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
];

export default function Navbar({ onConnect }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToSection = (href) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink-900/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          to="/"
          className="font-display text-lg font-semibold tracking-tight text-paper-100"
        >
          Dhruv<span className="text-cyan-500">  </span>Panchal
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => goToSection(l.href)}
              className="font-mono text-[13px] uppercase tracking-wide text-paper-300 transition-colors hover:text-cyan-400"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={onConnect}
            className="font-mono text-[13px] uppercase tracking-wide text-paper-300 transition-colors hover:text-cyan-400"
          >
            Contact
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line bg-ink-800 px-4 py-2 text-[13px] font-medium text-paper-100 transition-colors hover:border-cyan-500/60 hover:text-cyan-400"
          >
            Resume
          </a>
        </div>

        <button
          className="text-paper-100 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink-900/95 px-6 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => goToSection(l.href)}
                className="text-left font-mono text-sm uppercase tracking-wide text-paper-300"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onConnect();
              }}
              className="text-left font-mono text-sm uppercase tracking-wide text-paper-300"
            >
              Contact
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit rounded-full border border-line bg-ink-800 px-4 py-2 text-sm font-medium text-paper-100"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
