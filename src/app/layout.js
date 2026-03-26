import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://bedbugsboston.us"),
  title: "Bed Bug Exterminator Boston MA | Free Inspection",
  description: "Need bed bugs gone fast in Boston? We eliminate bed bugs in one treatment using heat + canine detection. Same-day service in Back Bay, South End, Cambridge & all Greater Boston. Fill out the form for a free inspection 24/7.",
  verification: {
    google: "3eKc0VZ2IMtz_yvrmI2QiwdOZQvRExQP2VJDlihJiAM",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
