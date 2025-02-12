import type { Metadata, Viewport } from 'next';
import { Cormorant, Open_Sans } from 'next/font/google';
import './globals.css';
import { NavBar } from '@components/navBar';

const cormorant = Cormorant({
  variable: '--font-cormorant',
  subsets: ['latin'],
});

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Martin Posso Portfolio',
  description: 'A Portfolio to display Martin Posso Work',
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
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
