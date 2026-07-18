import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiX, FiMail } from "react-icons/fi";

// EmailJS — sends the message straight from the browser, no backend needed.
// Get these 3 values free at https://www.emailjs.com (see README for steps).
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      const t = setTimeout(() => {
        setStatus("idle");
        setForm({ email: "", message: "" });
        setErrorMsg("");
      }, 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.email || !form.message) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      setErrorMsg(
        "Contact form isn't configured yet — add your EmailJS keys to client/.env (see README)."
      );
      return;
    }

    setStatus("sending");
    setErrorMsg("");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.email,
          email: form.email,
          title: "Portfolio Contact Form",
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMsg("Couldn't send that — try again in a moment.");
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-md rounded-2xl border border-line bg-ink-850 p-6 shadow-2xl md:p-7"
          >
            <div className="mb-5 flex items-start justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-400">
                  Get in touch
                </p>
                <h3
                  id="contact-title"
                  className="mt-1 font-display text-2xl font-semibold text-paper-100"
                >
                  Let's Connect
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-paper-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
              >
                <FiX size={17} />
              </button>
            </div>

            {status === "sent" ? (
              <div className="py-6 text-center">
                <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-cyan-500/10 text-cyan-400">
                  <FiMail size={22} />
                </div>
                <p className="font-display text-lg font-semibold text-paper-100">
                  Message sent
                </p>
                <p className="mt-1.5 text-sm text-paper-300">
                  Thanks for reaching out — I'll reply at{" "}
                  <span className="text-paper-100">{form.email}</span> soon.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 rounded-full bg-paper-100 px-5 py-2.5 text-sm font-semibold text-ink-900"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-paper-500"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="john@gmail.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-line bg-ink-900 px-3.5 py-2.5 text-sm text-paper-100 placeholder:text-paper-500/70 focus:border-cyan-500/60"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-paper-500"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="I would like to connect with you..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-lg border border-line bg-ink-900 px-3.5 py-2.5 text-sm text-paper-100 placeholder:text-paper-500/70 focus:border-cyan-500/60"
                  />
                </div>

                {status === "error" && (
                  <p className="font-mono text-xs text-amber-400">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-full bg-paper-100 py-3 text-sm font-semibold text-ink-900 transition-opacity disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
