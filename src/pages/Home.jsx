import { useConnect } from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import CallToAction from "../components/CallToAction";

export default function Home() {
  const { onConnect } = useConnect();
  return (
    <>
      <Hero onConnect={onConnect} />
      <About />
      <TechStack />
      <Projects />
      <CallToAction onConnect={onConnect} />
    </>
  );
}
