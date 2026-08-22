import Articles from "../components/Articles";
import Certifications from "../components/Certifications";
import Reveal from "../components/Reveal";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="top">
          <Hero />
        </section>
        <section id="work">
          <Reveal>
            <Projects />
          </Reveal>
        </section>
        <section id="articles">
          <Reveal>
            <Articles />
          </Reveal>
        </section>
        <section id="certifications">
          <Reveal>
            <Certifications />
          </Reveal>
        </section>
        <section id="stack">
          <TechStack />
        </section>
      </main>
    </>
  );
}
