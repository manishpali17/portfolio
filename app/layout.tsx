import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Manish Pali',
    default: 'Manish Pali',
  },
  description: 'A portofolio website for manish pali using next.js',
  metadataBase: new URL('https://manish-pali-portfolio.vercel.app'),
  openGraph: {
    url: new URL('https://manish-pali-portfolio.vercel.app'),
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider attribute="class">
        <body
          className={`${inter.className} scrollbar antialiased dark:bg-[#0B0B0B]`}
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
