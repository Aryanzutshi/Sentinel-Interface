import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import OCConnectWrapper from '../components/OCConnectWrapper';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sentinel",
  icons: {
    icon: "/favicon.ico"
  },
  description: "The ultimate firewall for smart contracts",
  keywords: ['Smart Contract Security', 'AI-Powered Auditing', 'MEV-Resistant Execution'],
  authors: [{ name: 'Aryan', url: 'https://github.com/aryanzutshi' }],
  creator: 'Aryan Zutshi',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: "Sentinel",
    description: "The Ultimate Firewall for Smart Contracts",
    siteName: "Sentinel",
    locale: "en_US",
    type: "website",
  }
};

import { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const opts = {
    redirectUri: 'http://localhost:3000/', // Adjust this URL
    referralCode: 'PARTNER6', // Assign partner code
  };

  return (
    <html lang="en">
      <body>
        <OCConnectWrapper opts={opts} sandboxMode={true}>
          {children}
        </OCConnectWrapper>
      </body>
    </html>
  );
}
