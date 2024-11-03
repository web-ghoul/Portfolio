import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Main from './Main';

const dyna_puff = localFont({
  src: [
    {
      path: './fonts/dyna_puff/regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/dyna_puff/medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/dyna_puff/semi_bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/dyna_puff/bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

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
      <body className={`${dyna_puff.className} antialiased`}>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
