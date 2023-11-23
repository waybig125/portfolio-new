import { About, Hero, Navbar, StarsCanvas } from "@/components";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className={`relative z-0 bg-primary`}>
        <div className="starsCanvas">
          <StarsCanvas />
        </div>
        <div className={`bg-hero-pattern bg-cover bg-no-repeat bg-center`}>
          <Navbar />
          <Hero />
          <About />
        </div>
      </div>
    </>
  );
}
