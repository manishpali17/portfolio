import ProjectListing from '@/components/ui/ProjectListing';
import { fetchProjects } from '@/app/lib/action';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
};

export default async function Page() {
  const data = await fetchProjects();
  return (
    <main>
      <ProjectListing items={data} />
    </main>
  );
}
