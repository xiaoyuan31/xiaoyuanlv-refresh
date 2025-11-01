import { define } from "../utils.ts";
import Home from "../islands/Home.tsx";
import Hero from "../islands/Hero.tsx";
import About from "../islands/About.tsx";
import Tech from "../islands/Tech.tsx";
import Skills from "../islands/Skills.tsx";
import Footer from "../islands/Footer.tsx";
import MapSection from "../islands/MapSection.tsx";

export default define.page(() => {

  return (
    <div>
      <Hero />
      <Home />
      <About />
      <Tech />
      <Skills />
      <MapSection />
      <Footer />
    </div>
   ) ;
});
