import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import SpotlightPreview from "@/components/SpotlightPreview";
import Footer from "@/components/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Navbar from "@/components/Navbar";

const inter = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Pranshu Raj",
  description: `Pranshu Raj is a web developer specializing in Next.js, 
    React, and modern JavaScript frameworks. 
    View my projects and skills. Pranshu Raj is also a competitive programmer and has keen interest in Data Structure and Algorithm`,
  keywords:
    "Pranshu Raj, web developer, portfolio, Next.js, React, Leetcode, DSA",
  openGraph: {
    title: "Pranshu Raj - Portfolio",
    description: "Web Developer specializing in Next.js and React",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="EKx-40vDiPGApU-paIAt4y3TM-lfPi48sMAXaLH396k"
        />
      </head>
      <body className={`${inter.className} flex flex-col min-h-[100%]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SpotlightPreview />
          <Navbar />
          <div>{children}</div>
          <Footer />
          <BackgroundBeams />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
