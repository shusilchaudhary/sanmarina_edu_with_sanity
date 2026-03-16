import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-sans' });

export const metadata = {
  other: {
    'msvalidate.01': '0C17D4C57F533FB2FCFCFE2F0B9E03E8',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
