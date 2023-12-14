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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={poppins.className}>
        <Suspense fallback={<Preloader />}>{children}</Suspense>
      </body>
    </html>
  );
}
