import Footer from "@/components/Footer";
import { GradientBg } from "@/components/GradientBg";
import Messenger from "@/components/Messenger";
import Nav from "@/components/navbar/Nav";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
        className={`${roboto.variable} flex min-h-screen w-full touch-auto flex-col overflow-y-auto font-sans antialiased`}
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
