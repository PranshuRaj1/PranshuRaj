import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import SpotlightPreview from "@/components/SpotlightPreview";
import Footer from "@/components/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Navbar from "@/components/Navbar";
import SpaceBackground from "@/components/SpaceBackground";

const inter = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pranshuraj.info'),
  title: {
    default: 'Pranshu Raj | Software Developer & Creative Coder',
    template: '%s | Pranshu Raj',
  },
  description: 'Pranshu Raj is a Software Developer specializing in Next.js, React, and modern web technologies. Explore his portfolio, projects, and creative coding experiments.',
  keywords: [
    "Pranshu Raj", 
    "Pranshu", 
    "Raj", 
    "Software Developer", 
    "Web Developer", 
    "Next.js Developer", 
    "React Developer", 
    "Frontend Engineer", 
    "Creative Developer", 
    "Portfolio", 
    "VIT Bhopal"
  ],
  authors: [{ name: 'Pranshu Raj', url: 'https://www.pranshuraj.info' }],
  creator: 'Pranshu Raj',
  publisher: 'Pranshu Raj',
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'EKx-40vDiPGApU-paIAt4y3TM-lfPi48sMAXaLH396k',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.pranshuraj.info',
    title: 'Pranshu Raj | Software Developer & Creative Coder',
    description: 'Pranshu Raj is a Software Developer specializing in Next.js, React, and modern web technologies. Explore his portfolio, projects, and creative coding experiments.',
    siteName: 'Pranshu Raj Portfolio',
    images: [{ url: '/pp.jpeg', width: 800, height: 600, alt: 'Pranshu Raj' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pranshu Raj | Software Developer',
    description: 'Pranshu Raj is a Software Developer specializing in Next.js, React, and modern web technologies.',
    creator: '@RajPranshu12',
    images: '/pp.jpeg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pranshu Raj',
  givenName: 'Pranshu',
  familyName: 'Raj',
  url: 'https://www.pranshuraj.info',
  sameAs: [
    'https://www.linkedin.com/in/pranshuraj/',
    'https://github.com/PranshuRaj1',              
    'https://x.com/RajPranshu12',                   
  ],
  jobTitle: 'Software Developer',
  image: 'https://www.pranshuraj.info/pp.jpeg',
  description: 'Pranshu Raj is a Software Developer specializing in Next.js, React, and modern web technologies.',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'VIT Bhopal University'
  },
  knowsAbout: ["Java", "Next.js", "React", "Node.js", "MongoDB", "Data Structures", "Algorithms", "TypeScript", "JavaScript", "Web Development", "Software Engineering"],
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance'
  }
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
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <SpotlightPreview />
          <Navbar />
          {/* Use a semantic <main> tag for the main content */}
          <main className="flex-grow relative z-10">{children}</main>
          <Footer />
          <SpaceBackground />
          <BackgroundBeams className="opacity-40" />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}