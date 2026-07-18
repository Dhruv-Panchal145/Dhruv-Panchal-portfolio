import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactModal from "./ContactModal";

export default function Layout() {
  const [contactOpen, setContactOpen] = useState(false);
  const onConnect = () => setContactOpen(true);

  return (
    <div className="flex min-h-screen flex-col bg-ink-900">
      <Navbar onConnect={onConnect} />
      <main className="flex-1">
        <Outlet context={{ onConnect }} />
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}

export function useConnect() {
  return useOutletContext();
}
