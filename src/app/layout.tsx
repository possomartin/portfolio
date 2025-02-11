import type { Metadata } from 'next';
import { Cormorant, Open_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant({
  variable: '--font-cormorant',
  subsets: ['latin'],
});

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Martin Posso Portfolio',
  description: 'A Portfolio to display Martin Posso Work',
  viewport: { width: 'device-width', initialScale: 1 },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
