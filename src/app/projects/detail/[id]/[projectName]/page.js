// "use client";

import styles from "@/styles/projectDetail.module.css";

import ProjectFrame from "@/components/projectFrame";
import ProjectsAll from "@/api/projects/projects.json";
import useSWR, { unstable_serialize } from "swr";
import { useParams } from "next/navigation";
import ShowPage from "./showPage.js";

export async function generateStaticParams() {
  return ProjectsAll.projects.map((project) => {
    return {
      id: project.id,
      projectName: project.projectName.trim().replace(/\s+/g, "-"),
    };
  });
}
// const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Page({ params }) {
  return <ShowPage props={params} />;
}
