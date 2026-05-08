import { Montserrat } from "next/font/google";
import "./globals.css";
import MobileActions from "@/components/MobileActions";
import { LeadFormProvider } from "@/components/LeadFormContext";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Casagrand Casablanca | Dubai Lifestyle Homes in Kogilu, North Bangalore",
  description: "Experience the pinnacle of luxury with Casagrand Casablanca in Kogilu, North Bangalore. Offering premium 2, 3 & 4 BHK apartments inspired by Dubai's iconic architecture.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
     >
      <body className="min-h-full flex flex-col font-montserrat">
        <LeadFormProvider>
          {children}
          <MobileActions />
        </LeadFormProvider>
      </body>
    </html>
  );
}
