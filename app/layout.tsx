import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0D0E10",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Dharmendra Verma — Full Stack Developer",
  description:
    "Full Stack Developer specializing in Node.js, React, Next.js, PostgreSQL, Redis, Socket.IO, and Shopify app development. Based in Jaipur, India.",
  keywords: [
    "Dharmendra Verma",
    "Full Stack Developer",
    "Node.js Developer",
    "React Developer",
    "Next.js Developer",
    "Shopify Developer",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Redis",
    "Socket.IO",
    "Shopify APIs",
    "Liquid",
    "Jaipur Developer",
    "CleverCat",
    "Invictus Alpha",
  ],
  authors: [{ name: "Dharmendra Verma", url: "https://github.com/dharmendravm" }],
  metadataBase: new URL("https://dharmendra.dev"),
  openGraph: {
    title: "Dharmendra Verma — Full Stack Developer",
    description:
      "Full Stack Developer building real-time backends, REST APIs, React frontends, and Shopify storefront experiences.",
    type: "website",
    url: "https://dharmendra.dev",
    siteName: "Dharmendra Verma",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dharmendra Verma — Full Stack Developer",
    description:
      "Full Stack Developer — Node.js, React, Next.js, PostgreSQL, Redis, Shopify APIs.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${jetbrainsMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0D0E10] text-[#f2f2f0] font-sans">
        {children}
      </body>
    </html>
  );
}
