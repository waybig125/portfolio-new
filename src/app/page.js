import {
  About,
  Hero,
  Navbar,
  StarsCanvas,
  Testimonials,
  Works,
} from "@/components";
import Team from "@/components/Team";
// import LaptopModelCanvas from "@/components/Laptop";
// import LaptopModelCanvas from "../components/Laptop";
// import SmoothScroll from "@/components/smoothScroll";
// import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={`relative z-0 bg-black`}>
        <div className="starsCanvas">
          <StarsCanvas />
        </div>
        <div className={``}>
          <Navbar />
          <Hero />
          <About />
          <Team />
          <Testimonials />
          <Works />
        </div>
      </div>
    </>
  );
}
