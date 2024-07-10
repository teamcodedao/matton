import type {Metadata} from 'next';
import {Rowdies} from 'next/font/google';
import './globals.css';

const font = Rowdies({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Matt Furie on Ton',
  description:
    "Derived from Matt Furie (born August 14, 1979), the creator of the Boy's Club comic series. $MATTON aims to honor Matt Furie's legacy by combining creativity and community spirit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
