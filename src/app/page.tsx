import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import BackToTop from "@/components/BackToTop";
import { About, Contact, Footer, Hackathons, Projects, Teaching, Ventures, YouTube } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Teaching />
        <Projects />
        <Hackathons />
        <YouTube />
        <Ventures />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
