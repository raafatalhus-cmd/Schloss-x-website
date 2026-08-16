import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Services from "@/components/Services";
import Qualification from "@/components/Qualification";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      {/* Shared noise filter used by the .grain overlays in Hero/Services/Contact */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <filter id="grainFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={0.85}
            numOctaves={2}
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix
            in="noise"
            type="matrix"
            values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.9 0"
          />
        </filter>
      </svg>

      <Header />
      <Hero />
      <Statement />
      <Services />
      <Qualification />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}
