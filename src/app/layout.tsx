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
  metadataBase: new URL('https://www.pranshuraj.info'),
  title: {
    default: 'Pranshu Raj | Software Developer',
    template: '%s | Pranshu Raj',
  },
  description: 'Portfolio of Pranshu Raj, Software Developer skilled in Next.js, React, Node.js, MongoDB, and Competitive Programming.',
  keywords: ["Pranshu Raj", "Software Developer", "Next.js", "React", "Node.js", "Portfolio", "VIT"],
  verification: {
    google: 'EKx-40vDiPGApU-paIAt4y3TM-lfPi48sMAXaLH396k',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.pranshuraj.info',
    title: 'Pranshu Raj | Software Developer',
    description: 'Explore projects, achievements, and contact details.',
    images: [{ url: '/pp.jpeg', width: 800, height: 600, alt: 'Pranshu Raj' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pranshu Raj | Software Developer',
    description: 'Explore projects, achievements, and contact details.',
    images: '/pp.jpeg',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pranshu Raj',
  url: 'https://www.pranshuraj.info',
  sameAs: [
    'https://www.linkedin.com/in/pranshuraj/',
    'https://github.com/PranshuRaj1',              
    'https://x.com/RajPranshu12',                   
  ],
  jobTitle: 'Software Developer',
  image: 'https://www.pranshuraj.info/pp.jpeg',
  "alumniOf": "VIT Bhopal University",
  "knowsAbout": ["Java", "Next.js", "React", "Node.js", "MongoDB", "Data Structures", "Algorithms", "Typescript", "JavaScript"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* The manual <head> tag is no longer needed */}
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* Add the JSON-LD script for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SpotlightPreview />
          <Navbar />
          {/* Use a semantic <main> tag for the main content */}
          <main className="flex-grow">{children}</main>
          <Footer />
          <BackgroundBeams />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}