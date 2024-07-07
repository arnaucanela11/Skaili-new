import { Inter, Shanti, Raleway, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GTMnoscript, GTMscript } from "./components";

const inter = Inter({ subsets: ["latin"] });
export const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] });
export const shanti = Shanti({ subsets: ["latin"], weight: ["400"] });
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Skaili Agency",
  description: "Skaili es una agencia de digitalización enfocada en ayudarte a lograr la digitalización de tu negocio en un tiempo récord con nuestro equipo especializado.",
  keywords: ["Digitalization agency", "Skaili", "Business Digitalization", "web creation agency", "web design agency", "web creation", "agencia web", "agencia de desarrollo web", "agencia de diseño web"],
  image: "./assets/MainImage.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white overflow-hidden`}>
      <GTMnoscript />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
      <GTMscript />
    </html>
  );
}
