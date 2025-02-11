import type { Metadata } from 'next';
import { Cormorant, Open_Sans } from 'next/font/google';
import './globals.css';
import { Menu } from '@components/menu';

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
          <Menu />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
