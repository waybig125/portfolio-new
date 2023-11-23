import { About, Hero, Navbar, StarsCanvas } from "@/components";
// import SmoothScroll from "@/components/smoothScroll";
import Image from "next/image";
export default function Home() {
  return (
    <>
      {/* <SmoothScroll> */}
        <div className={`relative z-0 bg-primary`}>
          <div className="starsCanvas">{/* <StarsCanvas /> */}</div>
          <div className={`bg-hero-pattern bg-cover bg-no-repeat bg-center`}>
            <Navbar />
            <Hero />
            <About />
          </div>
        </div>
      {/* </SmoothScroll> */}
    </>
  );
}
