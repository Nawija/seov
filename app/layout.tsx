import Nav from "@/components/Header/Nav";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      <body className={`${geistMono.variable} antialiased`}>
        <div className="fixed -z-10 top-0 left-0 right-0 bg-gradient-to-bl from-blue-100 via-gray-50 to-pink-100 w-full h-screen" />
        <Nav />
        {children}
      </body>
    </html>
  );
}
