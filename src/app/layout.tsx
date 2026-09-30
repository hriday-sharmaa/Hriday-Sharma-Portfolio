import type { Metadata, Viewport } from "next";
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#171717",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Hriday Sharma — The Digital Journey | Portfolio",
  description:
    "Personal portfolio of Hriday Sharma — First-year Computer Science Engineering student at JECRC University, exploring programming, C language, computer science fundamentals, and creative technology.",
  keywords: [
    "Hriday Sharma",
    "Hriday Sharma Portfolio",
    "JECRC University",
    "Computer Science Engineering",
    "B.Tech CSE",
    "C Programming",
    "The Digital Journey",
  ],
  authors: [{ name: "Hriday Sharma", url: "mailto:hridaysharma3264@gmail.com" }],
  creator: "Hriday Sharma",
  openGraph: {
    title: "Hriday Sharma — The Digital Journey",
    description:
      "First-year Computer Science Engineering student at JECRC University, Jaipur. Exploring programming, technology, and the art of turning ideas into meaningful digital experiences.",
    type: "website",
    locale: "en_US",
    siteName: "Hriday Sharma Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${syne.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#171717] text-[#F5F3EE] antialiased selection:bg-[#C6F36B] selection:text-[#171717] min-h-screen relative font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
