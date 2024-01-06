import { Poppins } from "next/font/google";
import { Suspense } from "react";
import Preloader from "@/components/Preloader";
import "./globals.scss";
import library from "@/utils/fontawesome";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Axisio",
  description:
    "A team of expert web developers, seo specilists & digital marketers.",
  keywords:
    "i need a website, i need a webpage, i need the website, i need a website for my business, axisio, i need a web page for my business, i need a website for my small business, i need the website for, i need a website for, i need someone to build me a website, i need a web developer, i need to create a website for my business, i need someone to build my website, i need a business website, i need to make a website for my business, i need someone to create a website for me, i need someone to make me a website, i need a seo expert, i need a social media marketer, what do i need to be a social media manager",
  // icons: {
  //   icon: "https://axisio.vercel.app/assets/Logo-Dark.gif",
  //   apple: "https://axisio.vercel.app/assets/Logo-Dark.gif",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon" type="image/png" sizes="50x50" />
        <meta
          name="google-site-verification"
          content="-siKZcOKXtrt2dqEQW6sRuqEx8E1d_MRSntn0gR5qgc"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={poppins.className}>
        <Suspense fallback={<Preloader />}>{children}</Suspense>
      </body>
    </html>
  );
}
