import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://havenketamine.com'),
  title: "Haven Ketamine | Physician-Led Ketamine Therapy in Irvine, CA",
  description: "Haven Ketamine is a physician-led clinic in North Irvine providing safe, evidence-based ketamine infusions for depression, anxiety, PTSD, and chronic stress. Join the waitlist for our opening.",
  keywords: [
    "ketamine therapy Irvine",
    "ketamine clinic Irvine CA",
    "IV ketamine infusion Irvine",
    "ketamine treatment for depression Irvine",
    "ketamine therapy anxiety PTSD Orange County",
    "physician-led ketamine therapy",
    "ketamine infusion North Irvine"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://havenketamine.com",
    siteName: "Haven Ketamine",
    title: "Haven Ketamine | Physician-Led Ketamine Therapy in Irvine, CA",
    description: "Haven Ketamine is a physician-led clinic in North Irvine providing safe, evidence-based ketamine infusions for depression, anxiety, PTSD, and chronic stress. Join the waitlist for our opening.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haven Ketamine | Physician-Led Ketamine Therapy in Irvine, CA",
    description: "Physician-led ketamine therapy for depression, anxiety, PTSD, and chronic stress in North Irvine, CA.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    // TODO: Add Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 text-slate-900 antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
