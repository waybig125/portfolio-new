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
import { Suspense } from "react";
// import FireTrail from "@/components/FireTrail";

export default function Home() {
  return (
    <>
      {/* <FireTrail /> */}
      <div className={`relative z-0 bg-black`}>
        <Preloader />
        <div className="starsCanvas">
          <StarsCanvas />
        </div>
        <div className={``}>
          <Navbar />
          <Hero />
          <About />
          <Suspense fallback={"Loading..."}>
            <Team />
          </Suspense>
          {/* <Suspense fallback={"Loading..."}>
            <Testimonials />
          </Suspense> */}
          <Suspense fallback={"Loading..."}>
            <Works />
          </Suspense>
        </div>
      </div>
    </>
  );
}
