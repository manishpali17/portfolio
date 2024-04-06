import Header from '@/components/ui/Header';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};
export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
