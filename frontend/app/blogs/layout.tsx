import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'webGhoul - Home',
  description: 'Full-Stack Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir={'ltr'}>
      <body>
        {children}
      </body>
    </html>
  );
}
