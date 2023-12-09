import {
  About,
  Hero,
  Navbar,
  StarsCanvas,
  Testimonials,
  Works,
} from "@/components";
import Team from "@/components/Team";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <>
      <div className={`relative z-0 bg-black`}>
        <Preloader />
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
