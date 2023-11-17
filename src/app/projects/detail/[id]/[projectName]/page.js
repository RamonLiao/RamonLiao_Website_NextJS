// "use client";

import styles from "@/styles/projectDetail.module.css";

import ProjectFrame from "@/components/projectFrame";
import ProjectsAll from "@/api/projects/projects.json";
import ShowPage from "./showPage.js";

export async function generateStaticParams() {
  return ProjectsAll.projects.map((project) => {
    return {
      id: project.id,
      projectName: project.projectName.trim().replace(/\s+/g, "-"),
    };
  });
}

export default function Page({ params }) {
  return <ShowPage props={params} />;
}
