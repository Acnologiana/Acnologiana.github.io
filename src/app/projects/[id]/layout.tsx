import { projectsData } from '@/data/projectsData';

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
