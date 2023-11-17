import ProjectsAll from "@/api/projects/projects.json";

export async function generateStaticParams() {
  return ProjectsAll.projects.map((project) => {
    return {
      id: project.id,
      projectName: project.projectName.trim().replace(/\s+/g, "-"),
    };
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
