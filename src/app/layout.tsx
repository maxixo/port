import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-maxixo.vercel.app"),
  title: "Usman Oshodi — Full-Stack Developer",
  description:
    "Full-stack developer building scalable web applications with Next.js, TypeScript, and Node.js. Projects, writing, and contact.",
  openGraph: {
    title: "Usman Oshodi — Full-Stack Developer",
    description:
      "Scalable web apps with Next.js, TypeScript, and Node.js. Projects, writing, and contact.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usman Oshodi — Full-Stack Developer",
    description: "Scalable web apps with Next.js, TypeScript, and Node.js.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetBrainsMono.variable} m-0 antialiased`}>
        {children}
      </body>
    </html>
  );
}
