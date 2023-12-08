import {
  About,
  Hero,
  Navbar,
  StarsCanvas,
  Testimonials,
  Works,
} from "@/components";
import Team from "@/components/Team";

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
