import { Inria_Serif, Outfit, Poppins } from "next/font/google";
import "./globals.css";
import MobileActions from "@/components/MobileActions";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inriaSerif = Inria_Serif({
  variable: "--font-inria-serif",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Casagrand Estancia | Dubai Lifestyle Homes in Kogilu, North Bangalore",
  description: "Experience the pinnacle of luxury with Casagrand Estancia in Kogilu, North Bangalore. Offering premium 1, 2, 3 & 4 BHK apartments inspired by Dubai's iconic architecture.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${outfit.variable} ${inriaSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-poppins">
        {children}
        <MobileActions />
      </body>
    </html>
  );
}

