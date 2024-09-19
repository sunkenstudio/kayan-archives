import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { NavBar } from './_components/NavBar';
import { SocialMediaBar } from './_components/SocialMediaBar';

export const metadata: Metadata = {
  title: 'THE KAYAN ARCHIVES',
  description:
    'A multidisciplinary project in collaboration with the Kayan tribe of Borneo to document, study, and preserve Kayan culture',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          {children}
          <SocialMediaBar />
        </Providers>
      </body>
    </html>
  );
}
