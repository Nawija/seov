import Footer from "@/components/Footer";
import { GradientBg } from "@/components/GradientBg";
import Nav from "@/components/Header/Nav";
import Messenger from "@/components/Messenger";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seovileo.pl"),
  openGraph: {
    url: "https://seovileo.pl/",
    siteName: "Seovileo - strona interntowa",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`flex min-h-screen w-full touch-auto flex-col overflow-y-auto antialiased ${geistSans.variable}`}
      >
        <GradientBg />
        <Nav />
        <main className="relative min-h-[90vh] w-full flex-1 overflow-x-hidden">
          {children}
        </main>
        <Messenger />
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
