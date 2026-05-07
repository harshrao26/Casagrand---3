import { Poppins } from "next/font/google";
import "./globals.css";
import MobileActions from "@/components/MobileActions";
import { LeadFormProvider } from "@/components/LeadFormContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Casagrand Casablanca | Dubai Lifestyle Homes in Kogilu, North Bangalore",
  description: "Experience the pinnacle of luxury with Casagrand Casablanca in Kogilu, North Bangalore. Offering premium 1, 2, 3 & 4 BHK apartments inspired by Dubai's iconic architecture.",
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
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-poppins">
        <LeadFormProvider>
          {children}
          <MobileActions />
        </LeadFormProvider>
      </body>
    </html>
  );
}
