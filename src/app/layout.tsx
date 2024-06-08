import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import '@styles/style.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'School Template',
  description: 'This a templated created for school website.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
