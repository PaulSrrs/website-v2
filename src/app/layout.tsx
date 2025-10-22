import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://paul-surrans.fr'),
  title: 'Paul Surrans - Chef de projet | Développeur',
  description:
    'Bienvenue sur mon site web. Vous pouvez en apprendre un peu plus sur moi, bonne navigation !',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '152x152' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: 'https://paul-surrans.fr/',
    title: 'Paul Surrans',
    description:
      'Bienvenue sur mon site web. Vous pouvez en apprendre un peu plus sur moi, bonne navigation !',
    images: [
      {
        url: '/banner.jpeg',
        width: 1200,
        height: 628,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paul Surrans',
    description:
      'Bienvenue sur mon site web. Vous pouvez en apprendre un peu plus sur moi, bonne navigation !',
    images: ['/banner.jpeg'],
  },
  other: {
    'msapplication-TileColor': '#da532c',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8F8F8' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
