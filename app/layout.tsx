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
  themeColor: "#101113",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Dharmendra Verma — Full-Stack & Shopify Apps Developer",
  description: "PERN Stack Developer & Shopify Apps Developer specializing in full-stack web applications, Shopify app development, backend APIs, and storefront experiences.",
  keywords: [
    "Dharmendra Verma",
    "PERN Stack Developer",
    "Shopify Apps Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Prisma",
    "Shopify API",
    "CleverCat",
    "Invictus Alpha",
    "Jaipur Developer",
  ],
  authors: [{ name: "Dharmendra Verma", url: "https://github.com/dharmendravm" }],
  metadataBase: new URL("https://dharmendra.dev"),
  openGraph: {
    title: "Dharmendra Verma — PERN & Shopify Apps Developer",
    description: "Building useful products for the web. Working across PERN stack applications and Shopify app development.",
    type: "website",
    url: "https://dharmendra.dev",
    siteName: "Dharmendra Verma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dharmendra Verma — Full-Stack & Shopify Apps Developer",
    description: "Building useful products for the web. PERN stack & Shopify app development.",
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
      <body className="min-h-full flex flex-col bg-bg-main text-[#f2f2f0] font-sans">
        {children}
      </body>
    </html>
  );
}

