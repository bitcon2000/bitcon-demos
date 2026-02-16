import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gibson\'s Janitorial Service - Premium Commercial Cleaning',
  description: 'Professional commercial cleaning services in Waterloo, Ontario. Office cleaning, post-construction cleanup, medical facility maintenance.',
  keywords: 'commercial cleaning, office cleaning, janitorial services, Waterloo Ontario',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
