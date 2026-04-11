import Articles from "../components/Articles";
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
          <Projects />
        </section>
        <section id="articles">
          <Articles />
        </section>
        <section id="stack">
          <TechStack />
        </section>
      </main>
    </>
  );
}
