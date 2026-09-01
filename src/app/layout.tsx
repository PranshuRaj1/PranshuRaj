import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import SpotlightPreview from "@/components/SpotlightPreview";
import Footer from "@/components/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Navbar from "@/components/Navbar";
import SpaceBackground from "@/components/SpaceBackground";
import person from "@/data/person";

export const metadata: Metadata = {
  metadataBase: new URL("https://pranshuraj.vercel.app"),
  title: {
    default: "Pranshu Raj - Software Engineer & AI Engineer",
    template: "%s | Pranshu Raj",
  },
  description:
    "Pranshu Raj is a software engineer building backend systems, AI developer tools, and production LLM applications, including Parakh, an AI GitHub PR reviewer.",
  authors: [{ name: "Pranshu Raj", url: "https://pranshuraj.vercel.app" }],
  creator: "Pranshu Raj",
  publisher: "Pranshu Raj",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "EKx-40vDiPGApU-paIAt4y3TM-lfPi48sMAXaLH396k",
  },
  openGraph: {
    type: "website",
    url: "https://pranshuraj.vercel.app",
    title: "Pranshu Raj - Software Engineer & AI Engineer",
    description:
      "Software engineer building backend systems, AI developer tools, and production LLM applications.",
    siteName: "Pranshu Raj Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pranshu Raj - Software Engineer",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranshu Raj - Software Engineer & AI Engineer",
    description:
      "Software engineer building backend systems, AI developer tools, and production LLM applications.",
    creator: "@RajPranshu12",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  ...person,
  image: "https://pranshuraj.vercel.app/pp.jpeg",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "VIT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="me" href="https://github.com/PranshuRaj1" />
      </head>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <SpotlightPreview />
          <Navbar />
          <main className="relative z-10 flex-grow">{children}</main>
          <Footer />
          <SpaceBackground />
          <BackgroundBeams className="opacity-40" />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
