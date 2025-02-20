import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s / KOTA. KEYZIE ONLINE TRADING ACADEMY",
    default: "KOTA. KEYZIE ONLINE TRADING ACADEMY",
  },
  description: {
    template: "%s / ",
    default: "",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="relative isolate px-6 lg:px-8">
          <div className="">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
