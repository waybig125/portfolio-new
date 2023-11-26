import { About, Hero, Navbar, StarsCanvas, Works } from "@/components";
import LaptopModelCanvas from "@/components/Laptop";
// import LaptopModelCanvas from "../components/Laptop";
// import SmoothScroll from "@/components/smoothScroll";
import Image from "next/image";

// if (process.env.NODE_ENV != "production") {
//   var axe = require("react-axe");
//   axe(React, ReactDOM, 1000);
// }

export default function Home() {
  return (
    <>
      {/* <SmoothScroll> */}
      <div className={`relative z-0 bg-black`}>
        <div className="fixed z-[999] bg-white h-[100vh] w-[100%]">
          <LaptopModelCanvas />
        </div>
        {/* <div className="starsCanvas">
          <StarsCanvas />
        </div> */}
        <div className={``}>
          <Navbar />
          {/* <Hero />
          <About />
          <Works /> */}
        </div>
      </div>
      {/* </SmoothScroll> */}
    </>
  );
}
