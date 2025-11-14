import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://havenketamine.com'),
  title: "Haven Ketamine | Physician-Led Ketamine Therapy in Newport Beach, CA",
  description: "Haven Ketamine is a physician-led clinic in Newport Beach providing safe, evidence-based ketamine infusions for depression, anxiety, PTSD, and chronic stress. Join the waitlist for our opening.",
  keywords: [
    "ketamine therapy Newport Beach",
    "ketamine clinic Newport Beach CA",
    "IV ketamine infusion Newport Beach",
    "ketamine treatment for depression Newport Beach",
    "ketamine therapy anxiety PTSD Orange County",
    "physician-led ketamine therapy",
    "ketamine infusion Newport Beach"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://havenketamine.com",
    siteName: "Haven Ketamine",
    title: "Haven Ketamine | Physician-Led Ketamine Therapy in Newport Beach, CA",
    description: "Haven Ketamine is a physician-led clinic in Newport Beach providing safe, evidence-based ketamine infusions for depression, anxiety, PTSD, and chronic stress. Join the waitlist for our opening.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haven Ketamine | Physician-Led Ketamine Therapy in Newport Beach, CA",
    description: "Physician-led ketamine therapy for depression, anxiety, PTSD, and chronic stress in Newport Beach, CA.",
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
        className={`${inter.variable} ${playfair.variable} bg-sand-50 text-stone-900 antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
