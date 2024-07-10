import type {Metadata} from 'next';
import {Rowdies} from 'next/font/google';
import './globals.css';

const font = Rowdies({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Matton Furie On Ton',
  description: 'Matton Furie On Ton',
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
