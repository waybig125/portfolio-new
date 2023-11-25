import { About, Hero, Navbar, StarsCanvas, Works } from "@/components";
// import SmoothScroll from "@/components/smoothScroll";
import Image from "next/image";
export default function Home() {
  return (
    <>
      {/* <SmoothScroll> */}
      <div className={`relative z-0 bg-black`}>
        <div className="starsCanvas">
          <StarsCanvas />
        </div>
        <div className={``}>
          <Navbar />
          <Hero />
          <About />
          <Works />
        </div>
      </div>
      {/* </SmoothScroll> */}
    </>
  );
}
