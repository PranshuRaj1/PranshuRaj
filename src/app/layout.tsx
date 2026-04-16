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
    default: 'Pranshu Raj — Full Stack Developer | Next.js & React',
    template: '%s | Pranshu Raj',
  },
  description: 'Full-stack developer with deep expertise in Next.js, React, TypeScript, and LLM integrations. I build end-to-end web products — from pixel-perfect UIs to real-time systems.',
  keywords: [
    "Pranshu Raj", 
    "Software Developer in Delhi",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Backend Engineer",
    "Frontend Engineer",
    "Database Management",
    "Web Developer",
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
    title: 'Pranshu Raj — Full Stack Developer | Next.js & React',
    description: 'Full-stack developer with deep expertise in Next.js, React, TypeScript, and LLM integrations. I build end-to-end web products — from pixel-perfect UIs to real-time systems.',
    siteName: 'Pranshu Raj Portfolio',
    images: [{ url: '/pp.jpeg', width: 800, height: 600, alt: 'Pranshu Raj' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pranshu Raj — Full Stack Developer',
    description: 'Full-stack developer with deep expertise in Next.js, React, TypeScript, and LLM integrations. I build end-to-end web products.',
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
  jobTitle: 'Software & Full Stack Developer',
  image: 'https://www.pranshuraj.info/pp.jpeg',
  description: 'Full-stack developer with deep expertise in Next.js, React, TypeScript, and LLM integrations. I build end-to-end web products — from pixel-perfect UIs to real-time systems.',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'VIT Bhopal University'
  },
  knowsAbout: ["Java", "Next.js", "React", "Node.js", "MongoDB", "Data Structures", "Algorithms", "TypeScript", "JavaScript", "Web Development", "Software Engineering", "Frontend", "Backend", "Databases", "Full Stack Developer"],
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