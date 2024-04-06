import AboutSection from '@/components/ui/AboutSection';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export default async function Page() {
  return (
    <main>
      <AboutSection />
    </main>
  );
}
