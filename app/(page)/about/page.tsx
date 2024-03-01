import StacksListing from '@/components/ui/StacksListing';
import AboutSection from '@/components/ui/AboutSection';
import { fetchStack } from '@/app/lib/action';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export default async function Page() {
  const data = await fetchStack();
  return (
    <main>
      <AboutSection />
      <StacksListing data={data} />
    </main>
  );
}
