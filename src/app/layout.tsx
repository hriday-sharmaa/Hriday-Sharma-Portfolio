import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hriday Sharma | 1st Year B.Tech CSE @ JECRC University",
  description:
    "Official developer portfolio of Hriday Sharma — 1st Year B.Tech Computer Science & Engineering undergraduate at JECRC University, Jaipur. Exploring C++ DSA, Next.js 14, Web Architecture, and Generative AI.",
  keywords: [
    "Hriday Sharma",
    "Hriday Sharma Portfolio",
    "JECRC University",
    "B.Tech CSE",
    "1st Year CSE Undergrad",
    "Computer Science Portfolio",
    "C++ Data Structures",
    "Next.js Developer",
    "Jaipur Developer",
  ],
  authors: [{ name: "Hriday Sharma", url: "mailto:hridaysharma3264@gmail.com" }],
  creator: "Hriday Sharma",
  openGraph: {
    title: "Hriday Sharma | 1st Year B.Tech CSE @ JECRC University",
    description:
      "Official portfolio of Hriday Sharma — 1st Year B.Tech CSE Student at JECRC University, Jaipur. Merging algorithmic rigor with modern web architecture.",
    type: "website",
    locale: "en_US",
    siteName: "Hriday Sharma Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#08090d] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black min-h-screen relative font-sans">
        {/* Ambient cybernetic background glow */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] cyber-radial-glow opacity-60" />
          <div className="absolute inset-0 cyber-grid opacity-25" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
